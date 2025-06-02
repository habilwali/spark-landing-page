import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const PageLoader = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix rain effect
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(0);
    const chars = '01'.split('');

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#8A2BE2';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
      />

      <div className="relative">
        {/* Central loading animation */}
        <motion.div
          className="w-32 h-32 relative"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 border-4 border-primary/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Inner ring */}
          <motion.div
            className="absolute inset-2 border-4 border-t-primary border-r-primary border-b-transparent border-l-transparent rounded-full"
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Center dot */}
          <motion.div
            className="absolute inset-0 m-auto w-4 h-4 bg-primary rounded-full"
            animate={{
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="text-center mt-8"
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <h2 className="text-2xl font-bold text-primary mb-2">
            Initializing AI
          </h2>
          <p className="text-white/70">Please wait...</p>
        </motion.div>

        {/* Circuit lines */}
        <div className="absolute -inset-8">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-primary/20 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.2],
                opacity: [0, 0.2, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader; 