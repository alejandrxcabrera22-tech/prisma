import {
  Droplets,
  Hammer,
  PaintRoller,
  Plug,
  Snowflake,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

export type Category = {
  slug: string
  label: string
  icon: LucideIcon
  description: string
}

export const CATEGORIES: Category[] = [
  {
    slug: 'fontaneria',
    label: 'Fontanería',
    icon: Droplets,
    description: 'Atascos, fugas, calderas',
  },
  {
    slug: 'reformas',
    label: 'Reformas',
    icon: Hammer,
    description: 'Cocinas, baños, pisos',
  },
  {
    slug: 'electricidad',
    label: 'Electricidad',
    icon: Plug,
    description: 'Instalaciones y averías',
  },
  {
    slug: 'pintura',
    label: 'Pintura',
    icon: PaintRoller,
    description: 'Interior y fachadas',
  },
  {
    slug: 'climatizacion',
    label: 'Climatización',
    icon: Snowflake,
    description: 'Aire acondicionado, calefacción',
  },
  {
    slug: 'mantenimiento',
    label: 'Mantenimiento',
    icon: Wrench,
    description: 'Pequeñas reparaciones',
  },
]
