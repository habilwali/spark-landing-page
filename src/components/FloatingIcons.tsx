import { motion } from 'framer-motion';

const icons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    label: 'AI Innovation'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: 'Fast Processing'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    label: 'Automation'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'Security'
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32" stroke="currentColor">
        <circle cx="16" cy="16" r="12" strokeWidth="2" className="text-blue-400" fill="none" />
        <circle cx="16" cy="16" r="4" strokeWidth="2" className="text-purple-400" fill="currentColor" />
        <line x1="16" y1="4" x2="16" y2="12" strokeWidth="2" className="text-blue-400" />
        <line x1="16" y1="20" x2="16" y2="28" strokeWidth="2" className="text-blue-400" />
        <line x1="4" y1="16" x2="12" y2="16" strokeWidth="2" className="text-blue-400" />
        <line x1="20" y1="16" x2="28" y2="16" strokeWidth="2" className="text-blue-400" />
      </svg>
    ),
    label: 'Neural Network'
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32" stroke="currentColor">
        <rect x="8" y="8" width="16" height="16" rx="3" strokeWidth="2" className="text-yellow-400" fill="none" />
        <rect x="14" y="14" width="4" height="4" strokeWidth="2" className="text-yellow-400" fill="currentColor" />
        <circle cx="8" cy="8" r="2" fill="#fbbf24" />
        <circle cx="24" cy="8" r="2" fill="#fbbf24" />
        <circle cx="8" cy="24" r="2" fill="#fbbf24" />
        <circle cx="24" cy="24" r="2" fill="#fbbf24" />
      </svg>
    ),
    label: 'AI Chip'
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32" stroke="currentColor">
        <rect x="6" y="10" width="20" height="12" rx="2" strokeWidth="2" className="text-green-400" fill="none" />
        <path d="M10 14h12v4H10z" fill="#34d399" />
        <rect x="14" y="14" width="4" height="4" fill="#059669" />
      </svg>
    ),
    label: 'Code'
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32" stroke="currentColor">
        <rect x="8" y="12" width="16" height="8" rx="4" strokeWidth="2" className="text-pink-400" fill="none" />
        <circle cx="12" cy="16" r="2" fill="#f472b6" />
        <circle cx="20" cy="16" r="2" fill="#f472b6" />
        <rect x="14" y="20" width="4" height="2" fill="#f472b6" />
      </svg>
    ),
    label: 'Robot'
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32" stroke="currentColor">
        <rect x="6" y="14" width="20" height="4" rx="2" strokeWidth="2" className="text-blue-400" fill="none" />
        <circle cx="8" cy="16" r="1.5" fill="#60a5fa" />
        <circle cx="24" cy="16" r="1.5" fill="#60a5fa" />
        <rect x="14" y="10" width="4" height="12" fill="#3b82f6" />
      </svg>
    ),
    label: 'Circuit'
  },
];

const ambientShapes = [
  // Circles only
  { type: 'circle', size: 120, color: 'bg-pink-400/30', blur: 'blur-2xl', opacity: 'opacity-60' },
  { type: 'circle', size: 80, color: 'bg-blue-400/30', blur: 'blur-xl', opacity: 'opacity-40' },
  { type: 'circle', size: 100, color: 'bg-yellow-300/30', blur: 'blur-2xl', opacity: 'opacity-50' },
  { type: 'circle', size: 60, color: 'bg-purple-400/40', blur: 'blur-lg', opacity: 'opacity-50' },
];

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Ambient shapes */}
      {ambientShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.blur} ${shape.opacity}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0.7 + Math.random() * 0.3,
            scale: 0.9 + Math.random() * 0.3
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 18 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        >
          {shape.type === 'circle' && (
            <div className={`rounded-full w-full h-full ${shape.color}`}></div>
          )}
        </motion.div>
      ))}
      {/* Floating icons */}
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/40 drop-shadow-lg"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
          }}
          initial={{ 
            x: 0,
            y: 0,
            opacity: 0.7 + Math.random() * 0.3,
            scale: 0.9 + Math.random() * 0.3
          }}
          animate={{
            x: [0, Math.random() * 80 - 40, 0],
            y: [0, Math.random() * 80 - 40, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 22 + Math.random() * 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="relative group">
            {item.icon}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-primary text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons; 