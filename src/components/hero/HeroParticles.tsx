import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = { x: 0, y: 0, active: false };
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let pixelRatio = 1;

    const draw = () => {
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (!motionPreference.matches) {
          if (pointer.active) {
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const distance = Math.hypot(dx, dy);
            const radius = 145;

            if (distance < radius) {
              const force = (1 - distance / radius) * 0.32;
              const safeDistance = Math.max(distance, 1);
              particle.vx += (dx / safeDistance) * force;
              particle.vy += (dy / safeDistance) * force;
              particle.opacity = Math.max(0, particle.opacity - (1 - distance / radius) * 0.006);
            }
          }

          particle.vx *= 0.985;
          particle.vy *= 0.985;
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < -8) particle.x = width + 8;
          if (particle.x > width + 8) particle.x = -8;
          if (particle.y < -8) particle.y = height + 8;
          if (particle.y > height + 8) particle.y = -8;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(2, 132, 199, ${particle.opacity})`;
        context.fill();
      }

      if (!motionPreference.matches) frame = window.requestAnimationFrame(draw);
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      particles = Array.from({ length: Math.min(220, Math.max(72, Math.round((width * height) / 5000))) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: 0.8 + Math.random() * 1.6,
        opacity: 0.14 + Math.random() * 0.24,
      }));

      if (motionPreference.matches) draw();
    };

    const trackPointer = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.active = event.pointerType !== 'touch'
        && event.clientX >= bounds.left
        && event.clientX <= bounds.right
        && event.clientY >= bounds.top
        && event.clientY <= bounds.bottom;
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };

    const clearPointer = () => {
      pointer.active = false;
    };

    const updateMotionPreference = () => {
      window.cancelAnimationFrame(frame);
      if (motionPreference.matches) draw();
      else frame = window.requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener('pointermove', trackPointer);
    window.addEventListener('blur', clearPointer);
    motionPreference.addEventListener('change', updateMotionPreference);
    resize();
    if (!motionPreference.matches) frame = window.requestAnimationFrame(draw);

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', trackPointer);
      window.removeEventListener('blur', clearPointer);
      motionPreference.removeEventListener('change', updateMotionPreference);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />;
}