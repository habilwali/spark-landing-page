import { motion } from 'framer-motion';

const GradientBackground = () => {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{
        background: 'linear-gradient(-45deg, #FFFFFF, #E6E6FA, #8A2BE2, #4169E1)',
        backgroundSize: '400% 400%',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

export default GradientBackground; 