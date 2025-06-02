import { motion } from 'framer-motion';

interface TechAnimationsProps {
  type: 'loading' | 'success' | 'processing';
}

const TechAnimations = ({ type }: TechAnimationsProps) => {
  const loadingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const successVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  const processingVariants = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      {type === 'loading' && (
        <motion.div
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
          animate="animate"
          variants={loadingVariants}
        />
      )}

      {type === 'success' && (
        <motion.div
          className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center"
          initial="initial"
          animate="animate"
          variants={successVariants}
        >
          <motion.svg
            className="w-10 h-10 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.path
              d="M20 6L9 17l-5-5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      )}

      {type === 'processing' && (
        <div className="relative w-20 h-20">
          <motion.svg
            className="absolute inset-0 text-primary/20"
            viewBox="0 0 100 100"
            initial="initial"
            animate="animate"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              variants={processingVariants}
            />
            <motion.path
              d="M50 25L50 75M25 50L75 50"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.svg>
        </div>
      )}
    </div>
  );
};

export default TechAnimations; 