import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function sectionAboutCarAnimationInit() {
  gsap.registerPlugin(ScrollTrigger);

  // car animation
  gsap.fromTo(
    '.about__animation-car',
    { y: '-70%' },
    {
      y: '50%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.about__animation',
        start: 'top 50%',
        end: 'center center',
        scrub: true,
      },
    },
  );

  // bg animation
  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about__animation',
      start: 'top 50%',
      end: 'top 20%',
      scrub: true,
    },
  });

  introTl.to(
    '.about__animation-overlay',
    {
      y: '80%',
      ease: 'none',
    },
    0,
  );
  introTl.to(
    '.about__animation-bg',
    {
      y: '10%',
      ease: 'none',
    },
    0,
  );
}
