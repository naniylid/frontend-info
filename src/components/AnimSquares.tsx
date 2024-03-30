import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimSquares: React.FC = () => {
  const springs = useSpring({
    from: { background: '#ff6d6d', y: -40, x: 0 },
    to: [
      { x: 80, background: '#fff59a' },
      { y: 40, background: '#88DFAB' },
      { x: 0, background: '#569AFF' },
      { y: -40, background: '#ff6d6d' },
    ],
    loop: true,
  });
  return (
    <animated.div
      style={{
        width: 40,
        height: 40,
        borderRadius: 4,
        ...springs,
      }}
    />
  );
};

export default AnimSquares;
