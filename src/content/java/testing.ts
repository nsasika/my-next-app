import type { ConceptLessonContent } from '@/components/learning/ConceptLessonPage';

export const javaBackendTesting = {
  header: {
    description:
      'A layered Java backend testing strategy for business logic, Spring boundaries, persistence, APIs, and production confidence.',
    eyebrow: 'Java / Backend quality',
    tags: ['JUnit 5', 'Mockito', 'Spring Boot', 'Testcontainers'],
    title: 'Java Backend Application Testing',
  },
  theory: {
    title: 'Test business rules quickly and infrastructure realistically',
    summary:
      'Java backend suites should keep domain unit tests fast, use focused Spring slice tests for framework boundaries, verify persistence against a real database engine, and reserve full application tests for important flows.',
    points: [
      'Unit tests use JUnit 5 and test doubles to isolate domain and service behavior.',
      'Integration tests verify repositories, transactions, messaging, and external adapters working together.',
      '@WebMvcTest checks controller HTTP behavior; @DataJpaTest checks persistence mappings and queries.',
      'Testcontainers runs PostgreSQL, Kafka, Redis, or other real dependencies in disposable containers.',
      'Contract tests protect REST or event compatibility between services.',
      'End-to-end and smoke tests validate a few critical deployed workflows; load and resilience tests verify operational behavior.',
    ],
    code: `many: domain unit tests
some: Spring slice + integration + contract tests
few: full-context + end-to-end tests
targeted: load, resilience, and security tests`,
    whatToTry: [
      'Test a transfer service for success, insufficient balance, duplicate idempotency key, and repository failure.',
      'Run the repository test against the same database engine used in production.',
    ],
  },
  flow: {
    title: 'Backend quality workflow',
    steps: [
      {
        label: 'Unit-test rules',
        description:
          'Exercise domain behavior without Spring or network startup.',
      },
      {
        label: 'Test adapters',
        description:
          'Use focused slices for controllers, serialization, validation, and repositories.',
      },
      {
        label: 'Use real infrastructure',
        description:
          'Run integration tests against disposable production-compatible dependencies.',
      },
      {
        label: 'Verify delivery',
        description:
          'Run contract, smoke, security, resilience, and performance checks according to risk.',
      },
    ],
  },
  codeExamples: [
    {
      title: 'JUnit service unit test',
      filePath: 'src/test/java/com/example/TransferServiceTest.java',
      language: 'java',
      code: `@Test
void rejectsTransferWhenBalanceIsInsufficient() {
    when(accounts.balance("A-1")).thenReturn(new BigDecimal("40.00"));

    assertThrows(InsufficientFundsException.class,
        () -> service.transfer("A-1", "B-1", new BigDecimal("50.00")));

    verify(transfers, never()).save(any());
}`,
    },
    {
      title: 'Repository integration test with Testcontainers',
      filePath: 'src/test/java/com/example/TransferRepositoryIT.java',
      language: 'java',
      code: `@Testcontainers
@DataJpaTest
class TransferRepositoryIT {
    @Container
    static PostgreSQLContainer<?> postgres =
        new PostgreSQLContainer<>("postgres:17-alpine");

    @Test
    void persistsAndFindsTransfer() {
        var saved = repository.save(aTransfer());
        assertThat(repository.findById(saved.getId())).isPresent();
    }
}`,
    },
  ],
} as const satisfies ConceptLessonContent;
