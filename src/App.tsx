import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from './assets/PHOTO-2025-05-27-15-45-14.jpg'
import AIAnimations from './components/AIAnimations'
import TechAnimations from './components/TechAnimations'
import FloatingIcons from './components/FloatingIcons'
import WaveBackground from './components/WaveBackground'
import PageLoader from './components/PageLoader'
import TechServices from './components/TechServices'
import BookingCalendar from './components/BookingCalendar'
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
        
        <Header />

        <main className="relative">
        {/* Enhanced Hero Section */}
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

        {/* Calendar Booking Section - Right after video */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative bg-gradient-to-b from-white to-gray-50 py-16"
          id="book-call"
        >
          <BookingCalendar />
        </motion.section>

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

        {/* AI Quote Section - Redesigned */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50"
        >
          {/* Subtle animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5" />
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                background: [
                  "radial-gradient(circle at 0% 0%, transparent 0%, transparent 100%)",
                  "radial-gradient(circle at 100% 100%, rgba(167, 139, 250, 0.1) 0%, transparent 100%)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>

          <div className="relative container mx-auto px-4">
            <motion.div
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 }
              }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {/* Quote Content */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <motion.span
                      className="absolute -left-6 -top-4 text-6xl text-primary/20"
                      animate={{ opacity: [0.2, 0.3, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      "
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      Artificial Intelligence is about{' '}
                      <span className="relative inline-block">
                        <motion.span
                          className="relative z-10 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                          animate={{ opacity: [0.9, 1, 0.9] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          amplifying human potential
                        </motion.span>
                        <motion.span
                          className="absolute -inset-1 bg-primary/10 blur-lg rounded-lg -z-10"
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </span>
                    </h2>
                    <div className="space-y-2 text-lg text-gray-600">
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-primary">→</span>
                        Transforming complex workflows into seamless experiences
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-primary">→</span>
                        Turning time-consuming tasks into moments of innovation
                      </motion.p>
                    </div>
                  </motion.div>
                </div>

                {/* Profile Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center md:items-start gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-primary/10"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                      <img
                        src={logo}
                        alt="Sarah Anderson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-full blur"
                      animate={{ opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Anderson</div>
                    <div className="text-primary text-sm">CEO, SparkAI</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Client Success Stories section */}
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

        {/* CTA Button above Footer */}
        <div className="w-full flex justify-center py-12 bg-gradient-to-b from-gray-50 to-white">
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
          </div>

        <Footer />
      </main>
      </motion.div>
    </>
  );
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
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 relative">
      {/* Animated gradient overlay */}
            <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5"
                animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
          duration: 10,
                  repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-3xl font-bold">
                Spark<span className="text-primary">AI</span>
                    </span>
                  </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses with intelligent automation solutions. Transform your operations with enterprise-grade AI technology.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              {[
                { icon: "linkedin", href: "#" },
                { icon: "twitter", href: "#" },
                { icon: "github", href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-primary">{social.icon === 'linkedin' ? '🔗' : social.icon === 'twitter' ? '🐦' : '💻'}</span>
                </motion.a>
              ))}
                </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Solutions</h3>
            <ul className="space-y-3">
              {[
                'AI Automation',
                'Process Optimization',
                'Workflow Design',
                'Integration Services',
                'Custom Development'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <a href="#" className="block">{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {[
                'About Us',
                'Careers',
                'Case Studies',
                'Blog',
                'Contact'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <a href="#" className="block">{item}</a>
                </motion.li>
              ))}
            </ul>
                </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <span className="text-primary mt-1">📍</span>
                <span>
                  Dubai Internet City<br />
                  Dubai, UAE
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <span className="text-primary">📧</span>
                <a href="mailto:contact@sparkai.co" className="hover:text-primary transition-colors duration-300">
                  contact@sparkai.co
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <span className="text-primary">📱</span>
                <a href="tel:+971500000000" className="hover:text-primary transition-colors duration-300">
                  +971 50 000 0000
                </a>
              </li>
            </ul>
                </div>
          </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 SparkAI. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'Sitemap'
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-primary text-sm transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-purple-100 flex flex-col relative overflow-hidden">
      <GradientBackground />
      <Header />
      <main className="flex-1 w-full relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
          <motion.h1
              initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
          >
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                Services Designed to Accelerate AI Adoption
              </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
              Empowering professionals, businesses, and startups through cutting-edge AI education, 
              hands-on automation solutions, and niche software development.
          </motion.p>
          </div>
        </section>

        {/* Three Core Service Streams */}
        <section className="max-w-7xl mx-auto px-4 py-16">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Three Core Service Streams
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accelerating AI adoption through accessible training, applied tools, and expert guidance
            </p>
            </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Stream 1: Training & Consulting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                    <span className="text-4xl">🎓</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Training & Consulting</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Empowering individuals and teams through knowledge transfer and upskilling
                </p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Offerings:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                      <span className="text-gray-700 text-sm">AI Bootcamps & Intensive Workshops (online + in-person)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Custom Corporate Training</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Long-term Retainer-Based Consulting for AI Strategy</span>
                    </li>
                  </ul>
                  <h4 className="font-semibold text-gray-800 mt-4">Target Audience:</h4>
                  <p className="text-gray-600 text-sm">
                    Corporate teams, SMEs, solopreneurs, and individuals seeking to leverage AI in their workflows
                  </p>
                </div>
              </div>
              </motion.div>

            {/* Stream 2: AI Automation Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600">
                    <span className="text-4xl">🤖</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">AI Automation Services</h3>
                <p className="text-gray-600 mb-6 text-center">
                  End-to-end AI agent systems and process automation to solve real business challenges
                </p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Key Deliverables:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Custom AI Agent Development (Sales, HR, Admin, Customer Support)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Automation Pipelines</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Integration into existing tools (CRMs, ERPs, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Training AI Agents on internal data</span>
                    </li>
              </ul>
                  <h4 className="font-semibold text-gray-800 mt-4">Value:</h4>
                  <p className="text-gray-600 text-sm">
                    Save time, reduce operational costs, and increase productivity for clients using intelligent agents
                  </p>
              </div>
            </div>
            </motion.div>

            {/* Stream 3: Niche AI Software Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="group relative"
              >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-green-500 to-teal-600">
                    <span className="text-4xl">💡</span>
          </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Niche AI Software Solutions</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Specialized software using AI for industry-specific needs
                </p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Product Lines:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">
                        <strong>Healthcare AI:</strong> Intelligent diagnostic and patient engagement tools
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">
                        <strong>Strique Marketing Suite:</strong> AI content, ad copywriting, campaign analysis
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">
                        <strong>Hospitality AI Suite:</strong> Personalized guest engagement, service bots
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
      </motion.div>
          </div>
      </section>

        {/* Why Choose AI Section */}
        <section className="relative py-14 bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Why Choose AI for Your Business?
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how AI transforms operations, reduces costs, and accelerates growth
              </p>
            </motion.div>

            {/* Carousel/Horizontal Scroll on mobile, grid on desktop */}
            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-100 scrollbar-track-transparent md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
              {[
                {
                  icon: '⚡',
                  title: 'Lightning-Fast Processing',
                  description: 'AI processes data 1000x faster than manual methods, delivering instant insights and decisions',
                  benefit: '99% faster processing',
                  gradient: 'from-yellow-100 via-orange-100 to-orange-200'
                },
                {
                  icon: '🎯',
                  title: 'Unmatched Accuracy',
                  description: 'Eliminate human errors with AI precision, achieving up to 99.9% accuracy in data processing',
                  benefit: '99.9% accuracy rate',
                  gradient: 'from-green-100 via-emerald-100 to-emerald-200'
                },
                {
                  icon: '📈',
                  title: 'Scalable Growth',
                  description: 'Scale operations infinitely without proportional cost increases or quality compromises',
                  benefit: 'Unlimited scalability',
                  gradient: 'from-blue-100 via-indigo-100 to-indigo-200'
                },
                {
                  icon: '💰',
                  title: 'Cost Reduction',
                  description: 'Cut operational costs by 60-80% through intelligent automation and resource optimization',
                  benefit: '80% cost savings',
                  gradient: 'from-purple-100 via-pink-100 to-pink-200'
                },
                {
                  icon: '🔒',
                  title: 'Enhanced Security',
                  description: 'AI-powered security systems detect and prevent threats 24/7 with advanced pattern recognition',
                  benefit: '24/7 protection',
                  gradient: 'from-red-100 via-rose-100 to-rose-200'
                },
                {
                  icon: '🚀',
                  title: 'Competitive Edge',
                  description: 'Stay ahead of competitors with cutting-edge AI capabilities and continuous innovation',
                  benefit: '10x faster innovation',
                  gradient: 'from-teal-100 via-cyan-100 to-cyan-200'
                }
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="snap-center min-w-[240px] max-w-xs md:min-w-0 md:max-w-none rounded-2xl shadow-md flex flex-col items-center justify-center relative group transition-transform duration-300 overflow-hidden bg-white/70 backdrop-blur border border-gray-100"
                  style={{ height: '260px' }}
                >
                  {/* Subtle Gradient Border */}
                  <motion.div
                    className={`absolute -inset-1 rounded-2xl z-0 bg-gradient-to-br ${reason.gradient} blur opacity-30 group-hover:opacity-40 transition-opacity duration-300`}
                    animate={{ opacity: [0.2, 0.3, 0.2], scale: [1, 1.01, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 z-10" />
                  {/* Content */}
                  <div className="relative z-20 flex flex-col items-center justify-center p-3 h-full text-center">
                    <div className="text-2xl mb-1 drop-shadow-sm">{reason.icon}</div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1 tracking-wide drop-shadow-sm">{reason.title}</h3>
                    <p className="text-gray-700 text-xs font-medium drop-shadow max-w-xs mb-1">{reason.description}</p>
                    <div className="text-primary text-xs font-bold mt-2">{reason.benefit}</div>
                  </div>
                  {/* Glass border effect */}
                  <div className="absolute inset-0 rounded-2xl border border-gray-100 pointer-events-none z-30" style={{ boxShadow: '0 2px 8px 0 rgba(31,38,135,0.06)' }} />
                </motion.div>
              ))}
            </div>
            {/* CTA below cards */}
            <div className="text-center mt-10">
              <span className="text-gray-500 text-sm">Join thousands of businesses already transforming with AI</span>
              <br />
              <a
                href="#book-call"
                className="inline-flex items-center mt-4 px-7 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors duration-300 group shadow-md"
              >
                <span>Start Your AI Journey</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Success By The Numbers
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results delivered to real businesses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Professionals Trained', icon: '👥' },
                { number: '150+', label: 'AI Agents Deployed', icon: '🤖' },
                { number: '60%', label: 'Average Time Saved', icon: '⏱️' },
                { number: '3.5x', label: 'ROI Improvement', icon: '📈' }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">{metric.icon}</div>
                  <motion.h3 
                    className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  >
                    {metric.number}
                  </motion.h3>
                  <p className="text-gray-600 text-lg">{metric.label}</p>
                </motion.div>
              ))}
            </div>
        </div>
        </section>

        {/* Technology Stack */}
        <section className="relative py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Our Technology Stack
                </span>
          </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade tools and frameworks powering our AI solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: 'AI & Machine Learning',
                  tools: ['OpenAI GPT-4', 'Anthropic Claude', 'Google Gemini', 'Custom LLMs', 'Langchain', 'Vector Databases'],
                  icon: '🧠',
                  color: 'from-purple-500 to-pink-600'
                },
                {
                  category: 'Automation & Integration',
                  tools: ['Zapier', 'Make.com', 'n8n', 'API Integrations', 'Webhook Systems', 'Custom Pipelines'],
                  icon: '⚡',
                  color: 'from-blue-500 to-cyan-600'
                },
                {
                  category: 'Development & Deployment',
                  tools: ['Python', 'Node.js', 'React', 'Cloud Platforms', 'Docker', 'Kubernetes'],
                  icon: '🚀',
                  color: 'from-green-500 to-teal-600'
                }
              ].map((stack, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stack.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="text-5xl mb-4">{stack.icon}</div>
                    <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${stack.color} bg-clip-text text-transparent`}>
                      {stack.category}
                    </h3>
                    <ul className="space-y-2">
                      {stack.tools.map((tool, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{tool}</span>
                        </li>
                      ))}
                    </ul>
                </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What is Agentic AI? Section */}
        <section className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  What is Agentic AI?
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                Agentic AI refers to intelligent, autonomous software agents that can independently perceive, decide, and act to accomplish business goals. These agents automate complex workflows, adapt to changing needs, and collaborate seamlessly with your team—freeing you to focus on innovation and growth, not repetitive tasks.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: '🤖',
                  title: 'Understands and automates multi-step business processes',
                },
                {
                  icon: '📈',
                  title: 'Continuously learns and optimizes from data and feedback',
                },
                {
                  icon: '🔗',
                  title: 'Integrates with your existing tools and systems',
                },
                {
                  icon: '🛡️',
                  title: 'Operates 24/7 with enterprise-grade security',
                },
              ].map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 bg-white/80 rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl text-blue-600 shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
                <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Our Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology to deliver exceptional AI solutions
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 hidden lg:block" />
              
              <div className="grid lg:grid-cols-5 gap-8 relative">
                {[
                  { step: '01', title: 'Discovery', desc: 'Understand your challenges and goals', icon: '🔍' },
                  { step: '02', title: 'Strategy', desc: 'Design custom AI solutions', icon: '📋' },
                  { step: '03', title: 'Development', desc: 'Build and train AI agents', icon: '🛠️' },
                  { step: '04', title: 'Testing', desc: 'Ensure quality and accuracy', icon: '✅' },
                  { step: '05', title: 'Deployment', desc: 'Launch and monitor performance', icon: '🚀' }
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center relative z-10">
                      <div className="text-4xl mb-4">{process.icon}</div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">{process.step}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                      <p className="text-gray-600 text-sm">{process.desc}</p>
                    </div>
              </motion.div>
            ))}
              </div>
            </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our services
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  question: 'What is AI automation and how can it help my business?',
                  answer: 'AI automation uses intelligent software agents to handle repetitive tasks, analyze data, and make decisions. It can save your team 60+ hours monthly by automating workflows like customer service, data entry, report generation, and more.'
                },
                {
                  question: 'How long does it take to implement AI solutions?',
                  answer: 'Implementation timelines vary based on complexity. Simple automation can be deployed in 2-4 weeks, while comprehensive AI agent systems typically take 6-12 weeks. We provide detailed timelines during the discovery phase.'
                },
                {
                  question: 'Do I need technical expertise to use your AI solutions?',
                  answer: 'No technical expertise required! Our solutions are designed to be user-friendly. We provide comprehensive training and ongoing support to ensure your team can effectively use the AI tools.'
                },
                {
                  question: 'Is my data secure with AI automation?',
                  answer: 'Absolutely. We implement enterprise-grade security measures, including encryption, access controls, and compliance with data protection regulations. Your data never leaves your control.'
                },
                {
                  question: 'What ROI can I expect from AI automation?',
                  answer: 'Most clients see 3-5x ROI within the first year through time savings, error reduction, and increased productivity. We provide detailed ROI calculations during the consultation phase.'
                }
              ].map((faq, index) => (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="text-purple-600 mr-3">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-8">
                    <span className="text-blue-600 font-semibold">A:</span> {faq.answer}
                  </p>
              </motion.div>
            ))}
            </div>
            </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-200"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Ready to Transform Your Business with AI?
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Whether you need training, automation, or custom AI solutions, we're here to help you succeed
              </p>
            <motion.a
                href="/#book-call"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
                <span>Get Started Today</span>
                <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </motion.a>
            </motion.div>
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
