import { useState } from 'react';
import { motion } from 'framer-motion';

// Available time slots
const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM',
  '03:00 PM', '04:00 PM', '05:00 PM'
];

// Demo: Hardcoded booked slots (date string -> array of times)
const BOOKED_SLOTS: Record<string, string[]> = {
  // Format: 'YYYY-MM-DD': ['09:00 AM', ...]
  [new Date().toISOString().slice(0, 10)]: ['10:00 AM', '01:00 PM'], // Today, 10am & 1pm booked
};

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { days, firstDay };
  };

  const { days, firstDay } = getDaysInMonth(currentMonth);

  // Generate calendar grid
  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= days; i++) {
    calendarDays.push(i);
  }

  // Navigation handlers
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Booking handler
  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setShowConfirmation(true);
    }
  };

  // Check if date is in the past
  const isDateInPast = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="relative overflow-hidden py-20">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-pink-600/20"
        animate={{
          backgroundImage: [
            'linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), rgba(37, 99, 235, 0.2), rgba(236, 72, 153, 0.2))',
            'linear-gradient(to bottom right, rgba(37, 99, 235, 0.2), rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))',
            'linear-gradient(to bottom right, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2), rgba(37, 99, 235, 0.2))',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          >
            <div className={`
              ${i % 3 === 0 ? 'w-20 h-20' : i % 3 === 1 ? 'w-16 h-16' : 'w-12 h-12'}
              ${i % 4 === 0 ? 'bg-purple-400/10' : i % 4 === 1 ? 'bg-blue-400/10' : i % 4 === 2 ? 'bg-pink-400/10' : 'bg-indigo-400/10'}
              rounded-full blur-xl
            `} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Attractive Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              Book Your Transformation
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Choose a convenient time for your personalized AI strategy session
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-purple-600" />
            <div className="w-2 h-2 rounded-full bg-purple-600" />
            <div className="w-3 h-3 rounded-full bg-blue-600" />
            <div className="w-2 h-2 rounded-full bg-pink-600" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-pink-600" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Transform Your Business
                </span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join thousands of businesses that have revolutionized their operations with AI. 
                Your journey to efficiency starts with a single conversation.
              </p>
            </div>

            <div className="relative overflow-hidden">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-pink-500/30 blur-xl"
                animate={{
                  backgroundImage: [
                    'linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(236, 72, 153, 0.3) 100%)',
                    'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(236, 72, 153, 0.3) 50%, rgba(147, 51, 234, 0.3) 100%)',
                    'linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(147, 51, 234, 0.3) 50%, rgba(59, 130, 246, 0.3) 100%)',
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              {/* Secondary animated layer */}
              <motion.div
                className="absolute inset-0 opacity-50"
                style={{
                  background: 'radial-gradient(circle at 30% 50%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)',
                }}
                animate={{
                  background: [
                    'radial-gradient(circle at 30% 50%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)',
                    'radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
                    'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <div className="relative bg-gradient-to-br from-purple-100/90 via-blue-100/90 to-pink-100/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/60">
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                
                <h4 className="relative text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3 text-3xl drop-shadow-lg">✨</span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">
                    What You'll Discover
                  </span>
                </h4>
                <ul className="relative space-y-4">
                  {[
                    { icon: "🎯", text: "Identify your biggest automation opportunities" },
                    { icon: "🚀", text: "Get a custom AI implementation roadmap" },
                    { icon: "💰", text: "Calculate your potential ROI and time savings" },
                    { icon: "🛡️", text: "Learn about security and compliance best practices" }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start space-x-3 group"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span 
                        className="text-2xl mt-1 drop-shadow-lg"
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-200">
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {selectedDate && selectedTime && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-6 shadow-xl"
              >
                <h4 className="text-xl font-semibold mb-2">Your Selected Time:</h4>
                <p className="text-2xl font-bold">
                  {selectedDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric'
                  })} at {selectedTime}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Enhanced Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50"
          >
            {!showConfirmation ? (
              <div className="space-y-8">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevMonth}
                    className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  <motion.h3 
                    className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                  >
                    {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                  </motion.h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextMonth}
                    className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>

                {/* Calendar Grid */}
                <div className="space-y-4">
                  {/* Weekday headers */}
                  <div className="grid grid-cols-7 gap-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className="text-center font-semibold text-purple-600 py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar days */}
                  <div className="grid grid-cols-7 gap-2">
                    {calendarDays.map((day, index) => {
                      const isSelected = selectedDate?.getDate() === day && 
                                       selectedDate?.getMonth() === currentMonth.getMonth();
                      const isPast = day && isDateInPast(day);
                      const dateKey = day ? new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().slice(0, 10) : '';
                      const isFullyBooked = day && BOOKED_SLOTS[dateKey]?.length === TIME_SLOTS.length;

                      return (
                        <motion.button
                          key={index}
                          whileHover={!isPast ? { scale: 1.1, y: -2 } : undefined}
                          whileTap={!isPast ? { scale: 0.95 } : undefined}
                          onClick={() => day && !isPast && setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
                          className={`
                            aspect-square rounded-xl flex items-center justify-center relative text-lg font-medium transition-all duration-200
                            ${!day ? 'invisible' : ''}
                            ${isPast ? 'text-gray-400 cursor-not-allowed bg-gray-100' : 'hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100'}
                            ${isSelected ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg' : 'text-gray-700 bg-gray-50'}
                            ${isFullyBooked && !isPast ? 'border-2 border-red-500 ring-2 ring-red-200' : ''}
                          `}
                          disabled={Boolean(!day || isPast)}
                        >
                          {day}
                          {isFullyBooked && !isPast && (
                            <span className="absolute top-1 right-1 text-xs text-red-500 font-bold">●</span>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <h4 className="text-2xl font-bold text-gray-900">
                      Available Times
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {TIME_SLOTS.map((time) => {
                        const dateKey = selectedDate.toISOString().slice(0, 10);
                        const isBooked = BOOKED_SLOTS[dateKey]?.includes(time);
                        return (
                          <motion.button
                            key={time}
                            whileHover={!isBooked ? { scale: 1.05, y: -2 } : undefined}
                            whileTap={!isBooked ? { scale: 0.95 } : undefined}
                            onClick={() => !isBooked && setSelectedTime(time)}
                            className={`
                              p-4 rounded-xl border-2 transition-all duration-200 relative font-medium
                              ${isBooked
                                ? 'border-red-300 bg-red-50 text-red-500 cursor-not-allowed'
                                : selectedTime === time
                                  ? 'border-transparent bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                                  : 'border-gray-200 hover:border-purple-400 text-gray-700 hover:bg-purple-50'}
                            `}
                            disabled={isBooked}
                          >
                            <span>{time}</span>
                            {isBooked && (
                              <span className="text-xs block mt-1">Unavailable</span>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Book Button */}
                {selectedDate && selectedTime && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleBooking}
                      className="w-full py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold rounded-2xl 
                                shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Book Your Strategy Call
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </motion.button>
                  </motion.div>
                )}
              </div>
            ) : (
              // Confirmation Screen
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-6xl text-white">✓</span>
                </motion.div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">You're All Set!</h3>
                <p className="text-xl text-gray-600 mb-8">
                  Your strategy call is confirmed for:
                </p>
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6 mb-8">
                  <p className="text-2xl font-bold text-gray-900">
                    {selectedDate?.toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mt-2">
                    {selectedTime}
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-xl">Next Steps:</h4>
                  <div className="space-y-3">
                    {[
                      "Check your email for meeting details",
                      "Add the event to your calendar",
                      "Prepare your questions about AI automation"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-center justify-center text-gray-700 text-lg"
                      >
                        <svg className="w-6 h-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </div>
  );
};

export default BookingCalendar; 