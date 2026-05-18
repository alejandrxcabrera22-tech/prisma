// Toda la información del negocio vive aquí. Edita este archivo para
// actualizar la web entera (nav, hero, secciones, footer).

export const BUSINESS = {
  name: 'Z barber studio',
  tagline: 'Tres años de oficio en Plaza Castilla, Elche.',
  description:
    'Cortes con criterio, barba al detalle y la calma de un estudio donde el tiempo se gestiona como una cita, no como un turno.',
  yearsOfCraft: 3,
  formationsGiven: 8, // placeholder — edita
  recognitions: 4, // placeholder — edita

  // Contacto
  booksyUrl:
    'https://booksy.com/es-es/88635_z-barbershop_barberia_55371_elx-elche',
  phone: '+34 000 000 000', // placeholder — saca el real de Booksy y reemplaza
  email: 'hola@zbarber.studio', // placeholder
  instagram: 'https://www.instagram.com/zbarberr_/',
  instagramHandle: '@zbarberr_',
  tiktok: '',
  whatsapp: '', // ej. https://wa.me/34000000000

  // Ubicación
  address: {
    street: 'Carrer Adolfo Marsillach, 5',
    postal: '03202',
    city: 'Elche',
    province: 'Alicante',
    country: 'España',
  },
  mapsEmbedSrc:
    'https://www.google.com/maps?q=Carrer+Adolfo+Marsillach+5,+03202+Elche&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Carrer+Adolfo+Marsillach+5,+03202+Elche',

  // Horario — placeholder, edita con horario real
  hours: [
    { day: 'Lunes', hours: 'Cerrado' },
    { day: 'Martes', hours: '10:00 – 14:00 · 16:30 – 20:30' },
    { day: 'Miércoles', hours: '10:00 – 14:00 · 16:30 – 20:30' },
    { day: 'Jueves', hours: '10:00 – 14:00 · 16:30 – 20:30' },
    { day: 'Viernes', hours: '10:00 – 14:00 · 16:30 – 20:30' },
    { day: 'Sábado', hours: '09:30 – 14:30' },
    { day: 'Domingo', hours: 'Cerrado' },
  ],
} as const

// Servicios — precios y duraciones placeholder. Reemplaza con los reales de Booksy.
export const SERVICES = [
  {
    number: '01',
    name: 'Corte clásico',
    duration: '30 min',
    price: '15 €',
    description: 'Tijera y máquina con acabado a navaja en cuello y patillas.',
  },
  {
    number: '02',
    name: 'Corte + barba',
    duration: '50 min',
    price: '22 €',
    description: 'Corte completo, perfilado de barba con navaja y toalla caliente.',
  },
  {
    number: '03',
    name: 'Barba con navaja',
    duration: '25 min',
    price: '12 €',
    description: 'Perfilado a navaja, toalla caliente, aceites y bálsamo final.',
  },
  {
    number: '04',
    name: 'Afeitado tradicional',
    duration: '40 min',
    price: '18 €',
    description: 'El ritual completo: vapor, jabón en brocha, dos pasadas de navaja.',
  },
  {
    number: '05',
    name: 'Corte infantil',
    duration: '25 min',
    price: '12 €',
    description: 'Para menores de 12. Sin prisa, sin estrés, con paciencia.',
  },
  {
    number: '06',
    name: 'Diseño y tinte',
    duration: '60 min',
    price: 'desde 25 €',
    description: 'Trabajo de diseño, color, mechas y acabados especiales.',
  },
] as const

// Equipo
export const TEAM = [
  {
    name: 'Adrián Zambrana',
    role: 'Master barber · Fundador',
    bio: 'Más de una década aprendiendo el oficio. Imparte formaciones para barberos en España.',
    instagram: '@zbarberr_',
    photo: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80',
  },
  {
    name: 'Fran',
    role: 'Barber',
    bio: 'Especialidad en fades milimétricos y diseños. Ojo quirúrgico para los detalles.',
    instagram: '',
    photo: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
  },
] as const

// Trayectoria — bloque editorial breve + 3 stats
export const TRAJECTORY = {
  manifesto:
    'Tres años abriendo persiana en Plaza Castilla. Tres años puliendo un oficio que no admite atajos: leer la cara, elegir la herramienta, respetar el silencio. Lo que empezó como un local pequeño hoy es un estudio que también forma a otros barberos — porque transmitir lo aprendido también es parte del oficio.',
  formations: [
    {
      title: 'Master class de fade y diseño',
      location: 'Alicante',
      year: '2024',
    },
    {
      title: 'Workshop de barba con navaja',
      location: 'Murcia',
      year: '2024',
    },
    {
      title: 'Curso de afeitado tradicional',
      location: 'Elche',
      year: '2025',
    },
  ],
  awards: [
    'Featured en perfil destacado de Booksy Elche',
    'Reconocimiento local "Mejor barbería barrio Plaza Castilla"',
  ],
} as const

// Galería — placeholders desde Unsplash. Sustituye por tus fotos en /public/gallery/
export const GALLERY = [
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&q=80',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=80',
  'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&q=80',
  'https://images.unsplash.com/photo-1521490683822-1bbfb45dfba6?w=1200&q=80',
  'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200&q=80',
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=80',
  'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=80',
  'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?w=1200&q=80',
] as const

// Testimonios
export const TESTIMONIALS = [
  {
    quote:
      'The best haircuts in the city. Camaraderie, good vibes y profesionalidad. Salgo siempre como nuevo.',
    author: 'Cliente Booksy',
    source: 'Booksy · reseña verificada',
  },
  {
    quote:
      'Adrián es un artista. Le explicas lo que tienes en la cabeza y te lo borda, sin importar si es un corte clásico o algo más arriesgado.',
    author: 'C. M.',
    source: 'Google',
  },
  {
    quote:
      'El sitio es un atelier, no una barbería al uso. Café, conversación, oficio. Vale cada euro.',
    author: 'J. P.',
    source: 'Instagram',
  },
] as const

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Visítanos', href: '#ubicacion' },
] as const
