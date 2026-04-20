import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function sectionAboutCarAnimationInit() {
  gsap.registerPlugin(ScrollTrigger)

  // car animation
  gsap.fromTo(
    '.about__animation-car',
    { y: '-70%' },
    {
      y: '40%',
      ease: 'power2.in',
      scrollTrigger: {
        trigger: '.about__animation',
        start: 'top 70%',
        end: 'center center',
        scrub: 1.5,
      },
    },
  )

  // bg animation
  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about__animation',
      start: 'top 70%',
      end: 'top 30%',
      scrub: 1.5,
    },
  })

  // overlay animation
  introTl.to(
    '.about__animation-overlay',
    {
      y: '80%',
      ease: 'power2.in',
    },
    0,
  )
}
