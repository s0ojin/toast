import React, { useEffect, useRef } from 'react';

function ProgressBar({ delay }: { delay: string | null }) {
  const startTime = new Date();
  document.documentElement.style.setProperty('--progress', '1');
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const passedTime = currentTime.getTime() - startTime.getTime();
      progressBarRef.current?.style.setProperty(
        '--progress',
        String(1 - passedTime / Number(delay)),
      );
    }, 10);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {delay && (
        <div
          ref={progressBarRef}
          style={{
            width: `calc(var(--progress) * 100%)`,
          }}
          className="absolute inset-x-0 bottom-0 h-[0.6rem] bg-white opacity-60"
        />
      )}
    </>
  );
}

export default ProgressBar;
