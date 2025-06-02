import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from './assets/PHOTO-2025-05-27-15-45-14.jpg'
import AIAnimations from './components/AIAnimations'
import TechAnimations from './components/TechAnimations'
import FloatingIcons from './components/FloatingIcons'
import WaveBackground from './components/WaveBackground'
import PageLoader from './components/PageLoader'
import Calendar from './components/Calendar'
import TechServices from './components/TechServices'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import GradientBackground from './components/GradientBackground'

// Animation variants
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  initial: {
    scale: 0.9,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

// Add image URLs for different sections
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
  automation: "https://images.unsplash.com/photo-1677442136184-d22d4f3dc6d0?q=80&w=1932&auto=format&fit=crop",
  benefits: "https://images.unsplash.com/photo-1677442136469-21780ecad995?q=80&w=1932&auto=format&fit=crop",
  testimonials: [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  ]
}

const navItems = [
  { 
    name: "Home", 
    href: "/",
    preview: "Discover AI automation solutions" 
  },
  { 
    name: "About Us", 
    href: "#about",
    preview: "Learn about our expertise" 
  },
  { 
    name: "Services", 
    href: "/services",
    preview: "Explore our AI services" 
  },
  { 
    name: "Benefits", 
    href: "#benefits",
    preview: "See how AI transforms business" 
  },
  { 
    name: "Testimonials", 
    href: "#testimonials",
    preview: "Read success stories" 
  }
];

function HomePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)

  useEffect(() => {
    // Simulate initial page loading
    const timer = setTimeout(() => {
      setPageLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleVideoPlay = () => {
    setIsLoading(true)
    // Simulate video loading
    setTimeout(() => {
      setIsLoading(false)
      setIsVideoPlaying(true)
    }, 1500)
  }

  return (
    <>
      <AnimatePresence>
        {pageLoading && <PageLoader />}
      </AnimatePresence>

      <motion.div 
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <WaveBackground />
        <AIAnimations />
        <FloatingIcons />
        
        {/* Header with hover previews */}
        <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-primary/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center"
              >
                <div className="relative group">
                  <img src={logo} alt="SparkAI Logo" className="h-10 w-auto relative z-10" />
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full opacity-75 blur-sm group-hover:opacity-100"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="ml-2">
                  <span className="text-xl font-semibold text-white">
                    Spark<span className="text-primary">AI</span>
                  </span>
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-primary to-blue-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                </div>
              </motion.div>

              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {item.href.startsWith('/') ? (
                      <Link 
                        to={item.href}
                        className="text-white hover:text-primary transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a 
                        href={item.href}
                        className="text-white hover:text-primary transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    )}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-blue-600"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.div
                      className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-48 bg-black/90 rounded-lg opacity-0 scale-95 pointer-events-none z-50 group-hover:opacity-100 group-hover:scale-100"
                      initial={{ opacity: 0, y: -5, scale: 0.95 }}
                      animate={{ opacity: 0, y: -5, scale: 0.95 }}
                      whileHover={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black/90 rotate-45" />
                        <div className="px-4 py-2 text-sm text-primary/90 relative z-10">
                          {item.preview}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative group"
                >
                  <motion.a
                    href="#book-call"
                    className="relative inline-flex group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"
                      animate={{
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    />
                    <span className="relative px-6 py-2 bg-black rounded-lg text-white border border-primary/50 group-hover:border-primary transition-colors duration-200">
                      Book Call
                    </span>
                  </motion.a>
                </motion.div>
              </nav>
            </div>
          </div>
        </header>

        {/* Enhanced Hero Section with Video Background */}
        <div className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-16 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            {/* Animated purple wave image background */}
            <motion.img
              src="/src/assets/purple-wave-bg.png"
              alt="Purple Wave Background"
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ scale: 1, opacity: 0.85 }}
              animate={{ scale: [1, 1.05, 1], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              style={{ zIndex: 0 }}
            />
            {/* Animated floating tech elements */}
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-primary/10 rounded-full blur-md"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 40 - 20],
                  y: [0, Math.random() * 40 - 20],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              />
            ))}
            {/* Tech-savvy animated SVG network background */}
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] opacity-30" viewBox="0 0 900 500" fill="none">
              {/* Animated network lines */}
              <motion.line x1="100" y1="100" x2="800" y2="100" stroke="#a78bfa" strokeWidth="2" initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.line x1="200" y1="200" x2="700" y2="400" stroke="#6366f1" strokeWidth="2" initial={{ opacity: 0.2 }} animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
              <motion.line x1="400" y1="50" x2="400" y2="450" stroke="#38bdf8" strokeWidth="2" initial={{ opacity: 0.2 }} animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
              {/* Animated network nodes */}
              <motion.circle cx="100" cy="100" r="10" fill="#a78bfa" animate={{ r: [10, 14, 10] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.circle cx="800" cy="100" r="8" fill="#6366f1" animate={{ r: [8, 12, 8] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
              <motion.circle cx="200" cy="200" r="7" fill="#38bdf8" animate={{ r: [7, 11, 7] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
              <motion.circle cx="700" cy="400" r="9" fill="#a78bfa" animate={{ r: [9, 13, 9] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }} />
              <motion.circle cx="400" cy="50" r="6" fill="#6366f1" animate={{ r: [6, 10, 6] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }} />
              <motion.circle cx="400" cy="450" r="8" fill="#38bdf8" animate={{ r: [8, 12, 8] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }} />
            </svg>
            {/* Optional: faint mesh SVG for extra depth */}
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] opacity-10" viewBox="0 0 900 500" fill="none">
              <ellipse cx="450" cy="250" rx="400" ry="180" fill="url(#meshGradient)" />
              <defs>
                <radialGradient id="meshGradient" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5" gradientTransform="matrix(1 0 0 0.5 0 0.25)">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Content Overlay - Moved to top */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center space-y-8"
            >
              {/* New line above headline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl font-semibold text-primary mb-2"
              >
                Get a Free AI Automation Audit and discover your biggest automation opportunities
              </motion.p>
              {/* Existing headline follows */}
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900"
              >
                <motion.div className="overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="block mb-2 relative group cursor-default"
                  >
                    Save{' '}
                    <motion.span 
                      className="text-primary relative inline-block group-hover:scale-110 transition-transform duration-300"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      60+ Hours
                      <motion.span
                        className="absolute -inset-2 bg-primary/20 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.span>
                    {' '}Monthly with
                  </motion.span>
                </motion.div>
                <motion.span
                  className="block relative group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <span className="relative inline-block group-hover:scale-105 transition-transform duration-300">
                    AI Automation
                    <motion.span
                      className="absolute -inset-2 bg-primary/10 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </span>
                </motion.span>
              </motion.h1>

              {/* Subheading with hover effect and metrics */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="relative group cursor-default"
              >
                <motion.p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto relative group-hover:scale-105 transition-transform duration-300 mt-4">
                  AI automation frees you from repetitive tasks, giving you more time to focus on what truly matters.
                </motion.p>

                {/* Metrics Display */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="mt-6 flex justify-center gap-8 text-center"
                >
                  <div className="relative group">
                    <motion.div
                      className="text-3xl font-bold text-primary"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      30 Minutes
                      <motion.span
                        className="absolute -inset-2 bg-primary/20 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.div>
                    <p className="text-gray-600 mt-1">Strategy Call</p>
                  </div>

                  <div className="relative group">
                    <motion.div
                      className="text-3xl font-bold text-primary"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3
                      }}
                    >
                      60+ Hours
                      <motion.span
                        className="absolute -inset-2 bg-primary/20 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.div>
                    <p className="text-gray-600 mt-1">Monthly Time Saved</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Email/Name Form above CTA */}
              <motion.form
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="mx-auto mb-8 flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl bg-white/40 backdrop-blur-2xl p-4 md:p-6 rounded-2xl shadow-2xl border-2 border-transparent relative overflow-hidden"
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
                onSubmit={e => { e.preventDefault(); /* placeholder */ }}
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl z-0 pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, #a78bfa33, #6366f133, #38bdf833)' }}
                  animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.03, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Name input with icon */}
                <div className="relative w-full md:w-1/3 z-10">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/70">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="pl-10 pr-4 py-3 rounded-lg border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-lg transition w-full bg-white/70 backdrop-blur placeholder-primary/40"
                    required
                  />
                </div>
                {/* Email input with icon */}
                <div className="relative w-full md:w-1/3 z-10">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/70">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm0 0l8 8 8-8"/></svg>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    className="pl-10 pr-4 py-3 rounded-lg border border-primary/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-lg transition w-full bg-white/70 backdrop-blur placeholder-primary/40"
                    required
                  />
                </div>
                {/* Submit button with glow */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.07, boxShadow: '0 0 24px 6px #a78bfa55' }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary to-blue-500 text-white rounded-lg font-bold shadow-lg hover:from-blue-500 hover:to-primary transition-colors duration-200 z-10 relative"
                  style={{ boxShadow: '0 0 16px 2px #a78bfa33' }}
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    Submit
                  </span>
                </motion.button>
              </motion.form>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="mt-12 text-center"
              >
                <motion.a
                  href="#book-call"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors duration-300 group shadow-xl"
                >
                  <span>Book Your Free AI Audit</span>
                  <motion.svg 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Video Section - Moved below */}
          <div className="relative w-full max-w-6xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              {!isVideoPlaying && (
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 w-full h-full -z-10">
                    <div className="absolute inset-0 bg-black opacity-95" />
                    <img
                      src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80"
                      alt="Light AI Neural Network Background"
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80">
                    {isLoading ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <TechAnimations type="loading" />
                      </div>
                    ) : (
                      <motion.button
                        onClick={handleVideoPlay}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white rounded-full p-8 transition-colors duration-300 shadow-2xl group"
                      >
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primary opacity-20"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <svg className="w-20 h-20 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <motion.div
                          className="absolute -inset-4 bg-primary/20 rounded-full blur-xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Enhanced AI Journey Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 py-24 relative overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-100/30 to-blue-600/10 rounded-3xl"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          
          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              initial={{
                x: Math.random() * 100 - 50 + "%",
                y: Math.random() * 100 - 50 + "%",
              }}
              animate={{
                x: [
                  Math.random() * 100 - 50 + "%",
                  Math.random() * 100 - 50 + "%",
                ],
                y: [
                  Math.random() * 100 - 50 + "%",
                  Math.random() * 100 - 50 + "%",
                ],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}

          {/* Main Content */}
          <div className="relative">
            {/* Heading with animated gradient */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Free{' '}
                <span className="text-primary relative inline-block">
                  AI Audit
                  <motion.span
                    className="absolute -inset-2 bg-primary/20 blur-lg rounded-lg -z-10"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
                {' '}Includes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In just 30 minutes, get actionable insights to transform your business operations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <span className="text-5xl md:text-6xl block mb-4">🔍</span>,
                  title: "Workflow Analysis",
                  description: "Identify time-wasting manual processes and bottlenecks in your operations",
                  gradient: "from-blue-500/20 via-primary/20 to-blue-500/20",
                  border: "border-blue-400/30"
                },
                {
                  icon: <span className="text-5xl md:text-6xl block mb-4">⚡</span>,
                  title: "Automation Map",
                  description: "Get a clear roadmap of which tasks to automate first for maximum impact",
                  gradient: "from-purple-500/20 via-primary/20 to-purple-500/20",
                  border: "border-purple-400/30"
                },
                {
                  icon: <span className="text-5xl md:text-6xl block mb-4">📈</span>,
                  title: "ROI Calculator",
                  description: "See exactly how many hours and dollars you can save with AI automation",
                  gradient: "from-green-500/20 via-primary/20 to-green-500/20",
                  border: "border-green-400/30"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative group bg-white/90 backdrop-blur-md p-8 rounded-2xl border-2 ${feature.border} shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col items-center text-center`}
                >
                  <motion.div
                    className={`absolute -inset-2 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-60 -z-10`}
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                      scale: [0.98, 1.02, 0.98]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {feature.icon}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-base">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Calendly Section (Book Your Free AI Audit) */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative py-24 bg-gradient-to-b from-gray-50 to-white"
          id="book-call"
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5" />
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                style={{
                  top: `${30 * i}%`,
                  left: '-100%',
                  right: '-100%'
                }}
                animate={{
                  x: ['0%', '100%']
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
            ))}
          </div>

          <div className="relative z-10 container mx-auto px-4">
            {/* Section Header - Now on the left */}
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              <div className="space-y-8">
                <motion.div
                  variants={fadeInUp}
                  className="text-left"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Book Your{' '}
                    <span className="text-primary relative inline-block">
                      Free AI Audit
                      <motion.span
                        className="absolute -inset-2 bg-primary/20 blur-lg rounded-lg"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </span>
                  </h2>
                  <motion.p
                    variants={fadeInUp}
                    className="text-xl text-gray-600 max-w-xl"
                  >
                    Struggling with manual processes? In just 30 minutes, discover how AI can save your team 60+ hours every month
                  </motion.p>

                  {/* Booking Flow Steps */}
                  <div className="mt-12 space-y-6">
                    {[
                      {
                        step: 1,
                        icon: "🔍",
                        title: "Process Analysis",
                        description: "We'll analyze your current workflows and identify automation opportunities"
                      },
                      {
                        step: 2,
                        icon: "⚡",
                        title: "AI Solutions",
                        description: "Get tailored AI recommendations for your specific business needs"
                      },
                      {
                        step: 3,
                        icon: "📊",
                        title: "Action Plan",
                        description: "Receive a clear roadmap with estimated time and cost savings"
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        variants={{
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 }
                        }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-start space-x-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-200"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-2xl">{step.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Calendar Container - Now smaller and on the right */}
              <motion.div
                variants={scaleIn}
                className="w-full max-w-lg mx-auto"
              >
                <Calendar />
              </motion.div>
            </div>

            {/* Booking Confirmation Preview */}
            {/* Removed Custom Automation Report, ROI Breakdown, Implementation Roadmap */}
            
            {/* Benefits Grid */}
            {/* Removed Expert AI Strategy, Smart Automation, Proven ROI */}
            {/* ... existing code ... */}
          </div>
        </motion.section>
        {/* Move Client Success Stories section here, immediately after Book Your Free AI Audit */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 py-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/5 backdrop-blur-sm rounded-2xl">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="relative inline-block">
                Client Success Stories
                <motion.span
                  className="absolute -inset-1 bg-primary/20 blur-sm"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  name: "Ahmed",
                  role: "Operations Manager",
                  company: "Tech Solutions Inc.",
                  quote: "We automated 80% of our manual workflows and saved over 50 hours a month.",
                  image: IMAGES.testimonials[0],
                  rating: 5
                },
                {
                  name: "Sara",
                  role: "Head of People",
                  company: "Innovation Labs",
                  quote: "Thanks to SparkAI, our HR processes are now fully streamlined.",
                  image: IMAGES.testimonials[1],
                  rating: 5
                },
                {
                  name: "Omar",
                  role: "Sales Director",
                  company: "Global Ventures",
                  quote: "One call showed us how to reduce our lead response time by 60%.",
                  image: IMAGES.testimonials[2],
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                >
                  {/* Testimonial Image with floating effect */}
                  <div className="relative h-48 flex items-center justify-center">
                    <motion.div
                      className="w-full h-full flex items-center justify-center bg-gray-900 rounded-t-xl shadow-md relative"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg className="w-16 h-16 text-white/80 absolute" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="32" fill="white" fillOpacity="0.12" />
                        <path d="M26 22L44 32L26 42V22Z" fill="white" />
                      </svg>
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <motion.p
                      className="text-gray-700 italic mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                    >{testimonial.quote}</motion.p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-semibold text-primary-dark">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <a 
                href="#book-call"
                className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
              >
                <span>Book Your Free AI Audit</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* AI Quote Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative py-24 bg-gradient-to-b from-white to-gray-50"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5" />
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                style={{
                  top: `${20 * i}%`,
                  left: '-100%',
                  right: '-100%'
                }}
                animate={{
                  x: ['0%', '100%']
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
            ))}
          </div>

          <div className="relative container mx-auto px-4">
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                className="text-7xl text-primary/20 mb-4"
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                "
              </motion.div>
              <motion.blockquote
                className="text-center max-w-5xl mx-auto"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
              >
                <div className="mb-10 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="text-gray-800">Artificial Intelligence is about</span>{' '}
                  <div className="mt-2">
                    <span className="relative inline-block">
                      <motion.span
                        className="relative z-10 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                        animate={{
                          opacity: [0.9, 1, 0.9]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        amplifying human potential
                      </motion.span>
                      <motion.span
                        className="absolute -inset-2 bg-primary/10 blur-xl rounded-lg -z-10"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </span>
                  </div>
                </div>
                <motion.div 
                  className="space-y-4 text-xl md:text-2xl font-medium text-gray-600/90"
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.p
                    whileHover={{ scale: 1.02 }}
                    className="relative inline-block px-6 py-2"
                  >
                    <span className="relative z-10">Transforming complex workflows into seamless experiences</span>
                    <motion.span
                      className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.p>
                  <motion.p
                    whileHover={{ scale: 1.02 }}
                    className="relative inline-block px-6 py-2"
                  >
                    <span className="relative z-10">Turning time-consuming tasks into moments of innovation</span>
                    <motion.span
                      className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.p>
                </motion.div>
              </motion.blockquote>
              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1 }
                }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center space-x-4"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                  <img
                    src={logo}
                    alt="SparkAI CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Sarah Anderson</div>
                  <div className="text-primary">CEO, SparkAI</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative py-24 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI Services That{' '}
                <span className="text-primary relative inline-block">
                  Transform
                  <motion.span
                    className="absolute -inset-2 bg-primary/20 blur-lg rounded-lg -z-10"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
                {' '}Your Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our interactive tech demos and see how AI can revolutionize your operations
              </p>
            </motion.div>

            <TechServices />
          </div>
        </motion.section>

        {/* CTA Button above Footer */}
        <div className="w-full flex justify-center py-12 bg-gradient-to-b from-gray-50 to-white">
          <motion.a
            href="#book-call"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-10 py-5 text-2xl font-bold text-white bg-primary rounded-xl shadow-xl hover:bg-primary-dark transition-colors duration-300 group"
          >
            <span>Book Your Free AI Audit</span>
            <motion.svg
              className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </div>

        {/* Footer */}
        <Footer />
      </motion.div>
    </>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <div className="relative group">
              <img src={logo} alt="SparkAI Logo" className="h-10 w-auto relative z-10" />
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full opacity-75 blur-sm group-hover:opacity-100"
                initial={{ scale: 0.95 }}
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="ml-2">
              <span className="text-xl font-semibold text-white">
                Spark<span className="text-primary">AI</span>
              </span>
              <motion.div
                className="h-0.5 bg-gradient-to-r from-primary to-blue-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </div>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {item.href.startsWith('/') ? (
                  <Link 
                    to={item.href}
                    className="text-white hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a 
                    href={item.href}
                    className="text-white hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-blue-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-48 bg-black/90 rounded-lg opacity-0 scale-95 pointer-events-none z-50 group-hover:opacity-100 group-hover:scale-100"
                  initial={{ opacity: 0, y: -5, scale: 0.95 }}
                  animate={{ opacity: 0, y: -5, scale: 0.95 }}
                  whileHover={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black/90 rotate-45" />
                    <div className="px-4 py-2 text-sm text-primary/90 relative z-10">
                      {item.preview}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative group"
            >
              <motion.a
                href="#book-call"
                className="relative inline-flex group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"
                  animate={{
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
                <span className="relative px-6 py-2 bg-black rounded-lg text-white border border-primary/50 group-hover:border-primary transition-colors duration-200">
                  Book Call
                </span>
              </motion.a>
            </motion.div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/90 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl font-semibold">
              Spark<span className="text-primary">AI</span>
              <span className="text-gray-400"> | AI Strategy & Automation Experts</span>
            </span>
          </div>
          <div className="flex items-center justify-center space-x-6">
            <motion.span 
              className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              📧 <span className="ml-2">contact@sparkai.co</span>
            </motion.span>
            <span className="text-primary">|</span>
            <motion.span 
              className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              📍 <span className="ml-2">Dubai, UAE</span>
            </motion.span>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© 2025 SparkAI. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <span className="text-gray-600">•</span>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ServicesPage() {
  // SVG icons for each service
  const icons = {
    ai: (
      <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 32 32"><rect x="8" y="12" width="16" height="8" rx="4" stroke="currentColor" strokeWidth="2" fill="#e0e7ff"/><circle cx="12" cy="16" r="2" fill="#6366f1"/><circle cx="20" cy="16" r="2" fill="#6366f1"/><rect x="14" y="20" width="4" height="2" fill="#6366f1"/></svg>
    ),
    data: (
      <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 32 32"><rect x="6" y="10" width="20" height="12" rx="6" stroke="currentColor" strokeWidth="2" fill="#ede9fe"/><rect x="14" y="14" width="4" height="4" fill="#a78bfa"/><rect x="10" y="18" width="12" height="2" fill="#a78bfa"/></svg>
    ),
    chat: (
      <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 32 32"><rect x="6" y="8" width="20" height="14" rx="5" stroke="currentColor" strokeWidth="2" fill="#d1fae5"/><rect x="10" y="14" width="12" height="2" fill="#34d399"/><rect x="10" y="10" width="8" height="2" fill="#34d399"/><polygon points="16,26 12,22 20,22" fill="#34d399"/></svg>
    ),
    shield: (
      <svg className="w-10 h-10 text-yellow-500" fill="none" viewBox="0 0 32 32"><path d="M16 4l12 6v6c0 7.732-5.373 14-12 14S4 23.732 4 16V10l12-6z" stroke="currentColor" strokeWidth="2" fill="#fef3c7"/><path d="M16 18v-4" stroke="#f59e42" strokeWidth="2"/><circle cx="16" cy="20" r="1.5" fill="#f59e42"/></svg>
    ),
    cart: (
      <svg className="w-10 h-10 text-pink-500" fill="none" viewBox="0 0 32 32"><rect x="6" y="10" width="20" height="10" rx="4" stroke="currentColor" strokeWidth="2" fill="#fce7f3"/><circle cx="12" cy="24" r="2" fill="#ec4899"/><circle cx="20" cy="24" r="2" fill="#ec4899"/><rect x="10" y="14" width="12" height="2" fill="#ec4899"/></svg>
    ),
    health: (
      <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" fill="#dbeafe"/><rect x="15" y="13" width="2" height="6" fill="#3b82f6"/><rect x="13" y="15" width="6" height="2" fill="#3b82f6"/></svg>
    ),
  };
  // SVG icons for benefits
  const benefitIcons = [
    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 32 32"><path d="M8 16h16" stroke="currentColor" strokeWidth="2"/><path d="M16 8v16" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/></svg>,
    <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 32 32"><rect x="8" y="14" width="16" height="8" rx="4" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="18" r="2" fill="currentColor"/></svg>,
    <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 32 32"><rect x="8" y="10" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M16 10v12" stroke="currentColor" strokeWidth="2"/></svg>,
    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M12 16h8" stroke="currentColor" strokeWidth="2"/><path d="M16 12v8" stroke="currentColor" strokeWidth="2"/></svg>
  ];
  // SVG icons for industries
  const industryIcons = [
    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" fill="#dbeafe"/><rect x="15" y="13" width="2" height="6" fill="#3b82f6"/><rect x="13" y="15" width="6" height="2" fill="#3b82f6"/></svg>,
    <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="#f3f4f6"/><path d="M12 20h8M12 16h8M12 12h8" stroke="#6366f1" strokeWidth="2"/></svg>,
    <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 32 32"><rect x="6" y="10" width="20" height="10" rx="4" stroke="currentColor" strokeWidth="2" fill="#fce7f3"/><circle cx="12" cy="24" r="2" fill="#ec4899"/><circle cx="20" cy="24" r="2" fill="#ec4899"/></svg>,
    <svg className="w-8 h-8 text-yellow-700" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="#fef9c3"/><rect x="12" y="16" width="8" height="2" fill="#facc15"/></svg>,
    <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="#fce7f3"/><rect x="14" y="14" width="4" height="4" fill="#ec4899"/></svg>,
    <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 32 32"><rect x="6" y="10" width="20" height="12" rx="6" stroke="currentColor" strokeWidth="2" fill="#d1fae5"/><rect x="14" y="14" width="4" height="4" fill="#34d399"/></svg>,
    <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 32 32"><rect x="8" y="10" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2" fill="#e0e7ff"/><path d="M16 10v12" stroke="#6366f1" strokeWidth="2"/></svg>,
    <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="#f3f4f6"/><path d="M12 20h8" stroke="#6b7280" strokeWidth="2"/></svg>
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-purple-100 flex flex-col relative overflow-hidden">
      <GradientBackground />
      <Header />
      <main className="flex-1 w-full relative z-10">
        {/* --- NEW HERO/INTRO SECTION WITH VIDEO --- */}
        <section className="relative py-28 flex flex-col items-center justify-center text-center overflow-hidden min-h-[520px] md:min-h-[680px]">
          {/* Animated light background */}
          <div className="absolute inset-0 -z-10">
            {/* Animated purple wave image background */}
            <motion.img
              src="/src/assets/purple-wave-bg.png"
              alt="Purple Wave Background"
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ scale: 1, opacity: 0.85 }}
              animate={{ scale: [1, 1.05, 1], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              style={{ zIndex: 0 }}
            />
            {/* Animated floating tech elements */}
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-primary/10 rounded-full blur-md"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 40 - 20],
                  y: [0, Math.random() * 40 - 20],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              />
            ))}
            {/* Tech-savvy animated SVG network background */}
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] opacity-30" viewBox="0 0 900 500" fill="none">
              {/* Animated network lines */}
              <motion.line x1="100" y1="100" x2="800" y2="100" stroke="#a78bfa" strokeWidth="2" initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.line x1="200" y1="200" x2="700" y2="400" stroke="#6366f1" strokeWidth="2" initial={{ opacity: 0.2 }} animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
              <motion.line x1="400" y1="50" x2="400" y2="450" stroke="#38bdf8" strokeWidth="2" initial={{ opacity: 0.2 }} animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
              {/* Animated network nodes */}
              <motion.circle cx="100" cy="100" r="10" fill="#a78bfa" animate={{ r: [10, 14, 10] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.circle cx="800" cy="100" r="8" fill="#6366f1" animate={{ r: [8, 12, 8] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
              <motion.circle cx="200" cy="200" r="7" fill="#38bdf8" animate={{ r: [7, 11, 7] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
              <motion.circle cx="700" cy="400" r="9" fill="#a78bfa" animate={{ r: [9, 13, 9] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }} />
              <motion.circle cx="400" cy="50" r="6" fill="#6366f1" animate={{ r: [6, 10, 6] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }} />
              <motion.circle cx="400" cy="450" r="8" fill="#38bdf8" animate={{ r: [8, 12, 8] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }} />
            </svg>
            {/* Optional: faint mesh SVG for extra depth */}
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] opacity-10" viewBox="0 0 900 500" fill="none">
              <ellipse cx="450" cy="250" rx="400" ry="180" fill="url(#meshGradient)" />
              <defs>
                <radialGradient id="meshGradient" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5" gradientTransform="matrix(1 0 0 0.5 0 0.25)">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          {/* Headline and subheadline with animated highlight */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold text-black mb-4 relative inline-block"
            style={{ textShadow: 'none' }}
          >
            <span className="relative z-10 text-black">Agentic AI Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold text-black max-w-2xl mx-auto mb-10 relative"
            style={{ textShadow: 'none' }}
          >
            <span className="relative z-10">Build your AI workforce. Automate, optimize, and scale with intelligent agents for every business function.</span>
          </motion.p>
          {/* Glassy CTA Button */}
          <motion.a
            href="#book-call"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center px-10 py-5 text-2xl font-bold text-white bg-gradient-to-r from-primary to-blue-500 rounded-xl shadow-xl hover:from-blue-500 hover:to-primary transition-colors duration-300 group z-10 backdrop-blur-2xl border-2 border-white/30"
            style={{ boxShadow: 'none' }}
          >
            <span>Request Demo</span>
            <motion.svg
              className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
          {/* Subtle video overlay or SVG illustration */}
          <div className="relative w-full max-w-4xl mx-auto mt-12 flex items-center justify-center min-h-[420px]">
            {/* Animated mesh/glow background for depth */}
            <motion.div
              className="absolute inset-0 z-0 flex items-center justify-center"
              initial={{ opacity: 0.7, scale: 1 }}
              animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.04, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="600" height="340" viewBox="0 0 600 340" fill="none" className="w-full h-full">
                <ellipse cx="300" cy="170" rx="270" ry="120" fill="url(#meshGradient2)" />
                <defs>
                  <radialGradient id="meshGradient2" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.08" />
                  </radialGradient>
                </defs>
              </svg>
            </motion.div>
            {/* Floating tech icons */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <FloatingIcons />
            </div>
            {/* Glassy card with animated gradient border */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative z-20 max-w-2xl w-full mx-auto px-8 py-10 rounded-3xl bg-white/70 backdrop-blur-2xl shadow-2xl border border-white/40 flex flex-col items-center"
              style={{ boxShadow: '0 8px 40px 0 rgba(99,102,241,0.10)' }}
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-1 rounded-3xl pointer-events-none z-0"
                style={{ background: 'linear-gradient(120deg, #a78bfa88, #6366f188, #38bdf888)' }}
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.03, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Large animated SVG icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-4 z-10"
              >
                <svg className="w-20 h-20 text-primary drop-shadow-xl" fill="none" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="30" stroke="#a78bfa" strokeWidth="3" fill="#f3f0fa" />
                  <ellipse cx="32" cy="32" rx="16" ry="16" fill="#6366f1" />
                  <circle cx="32" cy="32" r="6" fill="#fff" />
                  <circle cx="32" cy="32" r="3" fill="#a78bfa" />
                  <motion.circle cx="32" cy="32" r="24" stroke="#38bdf8" strokeWidth="2" fill="none" animate={{ r: [22, 24, 22] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
                </svg>
              </motion.div>
              {/* Animated heading */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-3xl font-extrabold text-primary mb-3 tracking-tight z-10 drop-shadow-lg"
              >
                What is Agentic AI?
              </motion.h3>
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-gray-700 text-lg font-medium text-center mb-4 z-10"
              >
                Agentic AI refers to intelligent, autonomous software agents that can independently perceive, decide, and act to accomplish business goals. These agents automate complex workflows, adapt to changing needs, and collaborate seamlessly with your team—freeing you to focus on innovation and growth, not repetitive tasks.
              </motion.p>
              {/* Animated bullet points */}
              <ul className="text-gray-700 text-base mt-2 space-y-3 text-left w-full max-w-md mx-auto z-10">
                {[
                  'Understands and automates multi-step business processes',
                  'Continuously learns and optimizes from data and feedback',
                  'Integrates with your existing tools and systems',
                  'Operates 24/7 with enterprise-grade security',
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#a78bfa" opacity="0.18"/><path d="M7 13l3 3 7-7" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span className="font-semibold text-gray-800">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
        {/* --- SERVICES GRID --- */}
        <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          {/* ...existing service cards, but add staggered animation and more hover effects... */}
          {/* ...existing code for mapping services... */}
        </section>
        {/* --- HOW IT WORKS / PROCESS SECTION --- */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10 text-center tracking-tight">How It Works</h2>
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Animated connector line for desktop */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 z-0">
              <div className="w-full h-full bg-gradient-to-r from-primary/30 via-blue-400/30 to-purple-400/30 rounded-full animate-pulse" />
            </div>
            {[
              { icon: icons.ai, title: '1. Discovery', desc: 'We analyze your workflows and identify automation opportunities.' },
              { icon: icons.data, title: '2. Agent Design', desc: 'We design and configure AI agents tailored to your needs.' },
              { icon: icons.chat, title: '3. Launch & Optimize', desc: 'Deploy, monitor, and continuously improve your AI workforce.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-8 border-2 border-primary/10 shadow-xl flex flex-col items-center text-center min-w-[220px] max-w-xs z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.2, duration: 0.6, type: 'spring' }}
                whileHover={{ scale: 1.07, boxShadow: '0 0 40px 10px #a78bfa33' }}
              >
                <div className="flex items-center justify-center mb-4 z-10 relative">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-white/80 to-primary/10 shadow-lg border border-primary/10 animate-pulse-slow">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2 z-10 relative">{step.title}</h3>
                <p className="text-gray-600 text-base z-10 relative">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* --- WHY CHOOSE AGENTIC AI (TECH-SAVVY GLASSY CARDS) --- */}
        <section className="relative py-20 bg-gradient-to-b from-white via-purple-50 to-purple-100 overflow-hidden">
          {/* Floating tech particles */}
          {Array.from({ length: 14 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full blur"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-12 text-center tracking-tight relative">
            Why Choose Agentic AI?
          </h2>
          <div className="flex gap-8 overflow-x-auto pb-4 snap-x px-4 md:px-12">
            {[
              {
                icon: benefitIcons[0],
                title: 'Faster Operations',
                desc: 'AI agents work 24/7, reducing delays and boosting productivity.',
                color: 'from-white/80 via-blue-100/60 to-blue-200/80 border-blue-200'
              },
              {
                icon: benefitIcons[1],
                title: 'Reliable & Secure',
                desc: 'Enterprise-grade security and compliance for all workflows.',
                color: 'from-white/80 via-purple-100/60 to-purple-200/80 border-purple-200'
              },
              {
                icon: benefitIcons[2],
                title: 'Continuous Learning',
                desc: 'Agents adapt and improve with every task, optimizing results.',
                color: 'from-white/80 via-indigo-100/60 to-blue-200/80 border-indigo-200'
              },
              {
                icon: benefitIcons[3],
                title: 'Seamless Integration',
                desc: 'Connect with your existing tools and systems effortlessly.',
                color: 'from-white/80 via-green-100/60 to-teal-200/80 border-green-200'
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className={`relative group bg-gradient-to-br ${benefit.color} backdrop-blur-2xl rounded-2xl p-8 border-2 shadow-xl flex flex-col items-center text-center min-w-[260px] max-w-xs snap-center overflow-hidden`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6, type: 'spring' }}
                whileHover={{
                  boxShadow: '0 0 100px 32px #a78bfa33',
                  scale: 1.08
                }}
              >
                {/* Animated glowing border */}
                <motion.div
                  className={`absolute -inset-2 rounded-2xl pointer-events-none z-0 blur-xl opacity-60 bg-gradient-to-br ${benefit.color}`}
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <div className="flex items-center justify-center mb-4 z-10 relative">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/90 shadow-lg border-2 border-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 z-10 relative tracking-wide drop-shadow-lg">{benefit.title}</h3>
                <p className="text-gray-700 text-base z-10 relative font-medium drop-shadow">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* --- INDUSTRIES WE SERVE (HORIZONTAL SCROLLABLE CARDS) --- */}
        <section className="relative max-w-7xl mx-auto px-4 py-16 overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-purple-100" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-12 text-center tracking-tight relative z-10">
            Industries We Serve
          </h2>
          <div className="flex gap-8 overflow-x-auto pb-4 snap-x relative z-10">
            {[
              { icon: industryIcons[0], name: 'Healthcare', desc: 'Patient onboarding, lab data, compliance.', color: 'from-white/80 via-blue-100/60 to-blue-200/80 border-blue-200' },
              { icon: industryIcons[1], name: 'Professional Services', desc: 'Workflow automation, onboarding, reporting.', color: 'from-white/80 via-purple-100/60 to-purple-200/80 border-purple-200' },
              { icon: industryIcons[2], name: 'E-commerce', desc: 'Order automation, chatbots, marketing.', color: 'from-white/80 via-pink-100/60 to-pink-200/80 border-pink-200' },
              { icon: industryIcons[3], name: 'Real Estate', desc: 'Lead management, document automation.', color: 'from-white/80 via-yellow-100/60 to-yellow-200/80 border-yellow-200' },
              { icon: industryIcons[4], name: 'Finance', desc: 'KYC, fraud detection, reporting.', color: 'from-white/80 via-green-100/60 to-green-200/80 border-green-200' },
              { icon: industryIcons[5], name: 'Logistics', desc: 'Route optimization, tracking, inventory.', color: 'from-white/80 via-indigo-100/60 to-indigo-200/80 border-indigo-200' },
              { icon: industryIcons[6], name: 'Education', desc: 'Admissions, grading, engagement.', color: 'from-white/80 via-purple-100/60 to-indigo-200/80 border-purple-200' },
              { icon: industryIcons[7], name: 'Manufacturing', desc: 'Supply chain, quality control.', color: 'from-white/80 via-gray-100/60 to-gray-200/80 border-gray-200' },
            ].map((industry, i) => (
              <motion.div
                key={i}
                className={`relative group bg-gradient-to-br ${industry.color} backdrop-blur-xl rounded-2xl p-6 border-2 shadow-xl flex flex-col items-center text-center overflow-hidden min-w-[220px] max-w-xs snap-center`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5, type: 'spring' }}
                whileHover={{
                  boxShadow: '0 0 80px 24px #a78bfa22',
                  scale: 1.06
                }}
              >
                <div className="flex items-center justify-center mb-3 z-10 relative">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/90 shadow-lg border-2 border-white">
                    {industry.icon}
                  </div>
                </div>
                <span className="text-lg font-bold text-gray-900 mb-1 z-10 relative drop-shadow-lg">{industry.name}</span>
                <span className="text-gray-700 text-sm z-10 relative font-medium drop-shadow">{industry.desc}</span>
              </motion.div>
            ))}
          </div>
        </section>
        {/* --- MODERN CTA --- */}
        <section className="w-full py-16 flex justify-center items-center bg-gradient-to-r from-primary/10 via-primary/10 to-blue-600/10 mt-8 border-t border-primary/10">
          <div className="bg-white/70 backdrop-blur-2xl rounded-2xl shadow-2xl px-10 py-8 flex flex-col items-center max-w-xl relative overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
              className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/20 via-blue-400/20 to-purple-400/20 blur-2xl opacity-60 -z-10"
              animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Floating tech elements */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full blur"
                style={{ left: `${10 + i * 10}%`, top: `${10 + (i % 4) * 20}%` }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center z-10">Ready to Build Your AI Workforce?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 text-center z-10">Request a demo or book a strategy call to see agentic AI in action for your business.</p>
            <motion.a
              href="#book-call"
              whileHover={{ scale: 1.07, boxShadow: '0 0 24px 6px #a78bfa55' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-10 py-5 text-2xl font-bold text-white bg-gradient-to-r from-primary to-blue-500 rounded-xl shadow-xl hover:from-blue-500 hover:to-primary transition-colors duration-300 group z-10"
              style={{ boxShadow: '0 0 16px 2px #a78bfa33' }}
            >
              <span>Request Demo</span>
              <motion.svg
                className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
