import { useEffect, useRef, useState } from 'react';

// Subtle scroll-reveal wrapper. Content is always rendered; only its entrance is
// animated. If IntersectionObserver is unavailable — or has not fired within a
// short grace period — the content is shown anyway, so nothing can stay hidden.
// The motion itself is defined in Home.css (.reveal / .reveal.is-visible) and is
// neutralised globally under prefers-reduced-motion.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(node);

    // Safety net: never leave content hidden if the observer never fires.
    const fallback = window.setTimeout(() => setVisible(true), 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
