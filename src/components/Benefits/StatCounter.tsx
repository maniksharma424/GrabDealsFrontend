import React from 'react';
import { useInView } from 'react-intersection-observer';

interface StatCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function StatCounter({ end, suffix = '', duration = 2000 }: StatCounterProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(end * percentage));

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}