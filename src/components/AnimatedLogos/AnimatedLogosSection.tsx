import React, { useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react';
import LogoIcon from './LogoIcon';

const LOGOS = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    alt: "Amazon Logo",
    initialPosition: { x: -150, y: -100 }
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flipkart_logo.svg",
    alt: "Flipkart Logo",
    initialPosition: { x: 150, y: -100 }
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.svg",
    alt: "Myntra Logo",
    initialPosition: { x: -150, y: 100 }
  },
  {
    src: "https://texts.com/images/social-icons/WhatsApp.svg",
    alt: "AJIO Logo",
    initialPosition: { x: 150, y: 100 }
  }
];

export default function AnimatedLogosSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationTriggered.current) {
          animationTriggered.current = true;
          entry.target.classList.add('animate-logos');
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative h-[400px] w-full max-w-3xl mx-auto my-20">
      {LOGOS.map((logo, index) => (
        <div
          key={index}
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 logo-float-${index + 1}`}
          style={{
            '--initial-x': `${logo.initialPosition.x}px`,
            '--initial-y': `${logo.initialPosition.y}px`
          } as React.CSSProperties}
        >
          <LogoIcon src={logo.src} alt={logo.alt} />
        </div>
      ))}
      
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center whatsapp-target">
          <MessageSquare className="w-12 h-12 text-white" />
        </div>
      </div>
    </div>
  );
}