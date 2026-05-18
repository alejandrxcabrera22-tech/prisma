import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Envuelve cada palabra en un <span class="word"> con un <span class="word-inner">
// dentro para poder animar y mantener máscara. Devuelve los wrappers internos.
export function splitWords(el: HTMLElement): HTMLElement[] {
  const raw = el.textContent ?? ''
  el.textContent = ''
  const inners: HTMLElement[] = []
  raw.split(/(\s+)/).forEach((part) => {
    if (part.trim() === '') {
      el.appendChild(document.createTextNode(part))
      return
    }
    const wrap = document.createElement('span')
    wrap.className = 'word'
    wrap.style.display = 'inline-block'
    wrap.style.overflow = 'hidden'
    wrap.style.verticalAlign = 'top'
    wrap.style.lineHeight = '1'
    wrap.style.paddingBottom = '0.1em'

    const inner = document.createElement('span')
    inner.className = 'word-inner'
    inner.style.display = 'inline-block'
    inner.style.willChange = 'transform, opacity'
    inner.textContent = part

    wrap.appendChild(inner)
    el.appendChild(wrap)
    inners.push(inner)
  })
  return inners
}

// Anima la entrada con stagger por palabras. Devuelve función de limpieza.
export function animateHeading(
  el: HTMLElement,
  options: { delay?: number; start?: string } = {},
): () => void {
  const inners = splitWords(el)
  gsap.set(inners, { yPercent: 110, opacity: 0 })

  const tween = gsap.to(inners, {
    yPercent: 0,
    opacity: 1,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.045,
    delay: options.delay ?? 0,
    scrollTrigger: {
      trigger: el,
      start: options.start ?? 'top 85%',
      once: true,
    },
  })

  return () => {
    tween.scrollTrigger?.kill()
    tween.kill()
  }
}

// Fade-up suave al entrar en viewport.
export function fadeUp(
  el: Element | Element[],
  options: { delay?: number; y?: number; start?: string; stagger?: number } = {},
): () => void {
  const tween = gsap.fromTo(
    el,
    { y: options.y ?? 24, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
      delay: options.delay ?? 0,
      stagger: options.stagger ?? 0,
      scrollTrigger: {
        trigger: Array.isArray(el) ? el[0] : (el as Element),
        start: options.start ?? 'top 85%',
        once: true,
      },
    },
  )
  return () => {
    tween.scrollTrigger?.kill()
    tween.kill()
  }
}

// Contador numérico animado.
export function countUp(
  el: HTMLElement,
  target: number,
  options: { duration?: number; start?: string } = {},
): () => void {
  const obj = { value: 0 }
  const tween = gsap.to(obj, {
    value: target,
    duration: options.duration ?? 1.6,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = String(Math.round(obj.value))
    },
    scrollTrigger: {
      trigger: el,
      start: options.start ?? 'top 85%',
      once: true,
    },
  })
  return () => {
    tween.scrollTrigger?.kill()
    tween.kill()
  }
}

// Reveal de imagen con clip-path (máscara de abajo a arriba).
export function clipReveal(
  el: Element,
  options: { delay?: number; start?: string } = {},
): () => void {
  const tween = gsap.fromTo(
    el,
    { clipPath: 'inset(100% 0% 0% 0%)' },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.1,
      ease: 'power3.out',
      delay: options.delay ?? 0,
      scrollTrigger: {
        trigger: el,
        start: options.start ?? 'top 88%',
        once: true,
      },
    },
  )
  return () => {
    tween.scrollTrigger?.kill()
    tween.kill()
  }
}
