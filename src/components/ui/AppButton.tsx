import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type AppButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

type AppButtonBaseProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: AppButtonVariant;
};

type AppButtonProps = AppButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

const variantClasses: Record<AppButtonVariant, string> = {
  primary: 'bg-slate-950 text-white shadow-sm hover:bg-slate-800',
  secondary:
    'border border-slate-300 bg-white text-slate-950 hover:border-sky-300 hover:bg-sky-50',
  ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
  danger: 'bg-rose-600 text-white shadow-sm hover:bg-rose-700',
};

export default function AppButton({
  children,
  className = '',
  href,
  type = 'button',
  variant = 'primary',
  ...buttonProps
}: AppButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
