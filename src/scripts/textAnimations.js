import gsap from 'gsap';

export function textAnimations() {
  const svgs = document.querySelectorAll('#text-animation-1, #text-animation-2');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const svg = entry.target;
        const paths = svg.querySelectorAll('path');
        const isBlack = svg.id === 'text-animation-2';

        const tl = gsap.timeline();

        paths.forEach((path, i) => {
          const length = path.getTotalLength();

          // старт
          path.setAttribute('fill', 'none');
          path.setAttribute('stroke', isBlack ? 'black' : 'white');
          path.setAttribute('stroke-width', '2');

          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          // малювання
          tl.to(path, {
            strokeDashoffset: 0,
            duration: length / 400,
            ease: 'power1.out',
          }, i * 0.05);
        });

        // 🔥 ЗАЛИВКА ВСІХ PATH ОДРАЗУ
        tl.to(paths, {
          fill: isBlack ? 'black' : 'white',
          stroke: 'transparent',
          duration: 0.4,
          ease: 'power1.out',
        }, '<');

        observer.unobserve(svg);
      });
    },
    { threshold: 0.3 }
  );

  svgs.forEach(svg => observer.observe(svg));
}