// Central place mapping the icon-name strings used in src/data to their
// actual lucide-react components. Keeps data files free of JSX/React
// imports, and keeps "did I spell the icon name right" a one-file problem.
import {
  Archive,
  Bell,
  Boxes,
  Building2,
  ClipboardCheck,
  Code2,
  Database,
  Layers,
  LineChart,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const ICONS: Record<string, LucideIcon> = {
  Archive,
  Bell,
  Boxes,
  Building2,
  ClipboardCheck,
  Code2,
  Database,
  Layers,
  LineChart,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? Sparkles;
}
