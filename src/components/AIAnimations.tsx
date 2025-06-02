import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const AIAnimations = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.size = Math.random() * 1.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'rgba(138, 43, 226, 0.2)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(138, 43, 226, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none opacity-30">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Circuit Pattern Animations */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 left-20 w-40 h-40 border-2 border-primary/10 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute bottom-40 right-20 w-60 h-60 border-2 border-primary/10 rounded-full"
        />
        
        {/* Binary Code Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 0.1, 0], y: [20, 0, -20] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 left-1/4 text-primary/10 text-[8px] font-mono"
        >
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i}>
              {Array.from({ length: 15 }, () => Math.round(Math.random())).join('')}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M0,100 Q400,150 800,100 T1600,100"
          stroke="rgba(138, 43, 226, 0.05)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};

export default AIAnimations; 