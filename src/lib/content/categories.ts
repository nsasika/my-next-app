import {
  FileText,
  Shield,
  CreditCard,
  Heart,
  Car,
  Plane,
  Users,
  Home,
} from 'lucide-react';
import type { ElementType } from 'react';

export type CategoryMeta = {
  label: string;
  icon: ElementType;
  description: string;
};

export const CATEGORY_META: Record<string, CategoryMeta> = {
  claims: {
    label: 'Claims',
    icon: FileText,
    description: 'File, track, and dispute insurance claims',
  },
  coverage: {
    label: 'Coverage',
    icon: Shield,
    description: 'Understand what your policy covers',
  },
  billing: {
    label: 'Billing',
    icon: CreditCard,
    description: 'Payments, autopay, and grace periods',
  },
  health: {
    label: 'Health',
    icon: Heart,
    description: 'Plans, networks, and preventive care',
  },
  auto: {
    label: 'Auto',
    icon: Car,
    description: 'Car insurance, teens, and roadside help',
  },
  travel: {
    label: 'Travel',
    icon: Plane,
    description: 'Luggage, cancellation, and trip coverage',
  },
  life: {
    label: 'Life',
    icon: Users,
    description: 'Term, whole life, and beneficiaries',
  },
  home: {
    label: 'Home',
    icon: Home,
    description: 'Property coverage and water damage',
  },
};
