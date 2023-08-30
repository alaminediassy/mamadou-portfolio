import React, { useState, useRef } from 'react';

function InfiniteSlider({
  speed,
  direction,
  children,
}: {
  speed: number;
  direction: 'right' | 'left';
  children: React.ReactNode;
}) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="looper w-full overflow-hidden" ref={outerRef}>
      <div className="looper__innerList flex justify-center space-x-4" ref={innerRef}>
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className={`looper__listInstance w-max animate-slideAnimation ${
              direction === 'right' ? 'animate-reverse' : ''
            }`}
            style={{
              animationDuration: `${speed}s`,
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteSlider;
