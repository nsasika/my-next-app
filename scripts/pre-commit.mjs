import { spawnSync } from 'node:child_process';

const blockedSensitiveFiles = [
  '.env',
  '.env.local',
  '.env.development',
  '.env.production',
];

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: false,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function output(command, args) {
  const result = spawnSync(command, args, {
    encoding: 'utf8',
    shell: false,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }

  return result.stdout;
}

const stagedFiles = output('git', [
  'diff',
  '--cached',
  '--name-only',
  '--diff-filter=ACMR',
])
  .split('\n')
  .map((file) => file.trim())
  .filter(Boolean);

const sensitiveFiles = stagedFiles.filter((file) =>
  blockedSensitiveFiles.some(
    (blockedFile) => file === blockedFile || file.endsWith(`/${blockedFile}`),
  ),
);

if (sensitiveFiles.length > 0) {
  console.error('Refusing to commit sensitive environment files:');
  for (const file of sensitiveFiles) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

console.log('Checking staged whitespace...');
run('git', ['diff', '--cached', '--check']);

console.log('Checking full repo lint and formatting...');
run('npm', ['run', 'lint']);

console.log('Checking TypeScript project...');
run('npm', ['run', 'type-check']);

console.log('Pre-commit checks passed.');
