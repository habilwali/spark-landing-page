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
  // Add more dates/times as needed
};

const Calendar = () => {
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
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-primary/10">
      {!showConfirmation ? (
        <div className="space-y-8">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevMonth}
              className="p-3 hover:bg-primary/10 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.h2 
              className="text-3xl font-bold text-gray-900 relative"
              whileHover={{ scale: 1.05 }}
            >
              {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
              <motion.div
                className="absolute -inset-2 bg-primary/5 rounded-lg -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextMonth}
              className="p-3 hover:bg-primary/10 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Calendar Grid */}
          <div className="space-y-4">
            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-primary font-semibold py-2">
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
                // Highlight fully booked dates
                let isFullyBooked = false;
                if (day) {
                  const dateKey = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().slice(0, 10);
                  isFullyBooked =
                    BOOKED_SLOTS[dateKey]?.length === TIME_SLOTS.length;
                }
                return (
                  <motion.button
                    key={index}
                    whileHover={!isPast ? { scale: 1.1, y: -2 } : undefined}
                    whileTap={!isPast ? { scale: 0.95 } : undefined}
                    onClick={() => day && !isPast && setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
                    className={
                      `aspect-square rounded-lg flex items-center justify-center relative text-lg transition-colors duration-200 ` +
                      (!day ? 'invisible ' : '') +
                      (isPast ? 'text-gray-400 cursor-not-allowed ' : 'hover:bg-primary/10 ') +
                      (isSelected ? 'bg-primary text-white font-semibold ' : 'text-gray-700 ') +
                      (isFullyBooked && !isPast ? 'border-2 border-red-500 ring-2 ring-red-200 ' : '')
                    }
                    disabled={Boolean(!day || isPast)}
                  >
                    {day}
                    {isFullyBooked && !isPast && (
                      <span className="absolute top-1 right-1 text-xs text-red-500 font-bold">●</span>
                    )}
                    {isSelected && (
                      <motion.div
                        className="absolute inset-0 bg-primary rounded-lg -z-10"
                        layoutId="selectedDate"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
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
              className="mt-8 space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Available Times for{' '}
                <span className="text-primary">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {TIME_SLOTS.map((time) => {
                  const dateKey = selectedDate.toISOString().slice(0, 10);
                  const isBooked = BOOKED_SLOTS[dateKey]?.includes(time);
                  return (
                    <motion.button
                      key={time}
                      whileHover={!isBooked ? { scale: 1.05, y: -2 } : undefined}
                      whileTap={!isBooked ? { scale: 0.95 } : undefined}
                      onClick={() => !isBooked && setSelectedTime(time)}
                      className={
                        `p-4 rounded-lg border-2 transition-all duration-200 relative flex flex-col items-center justify-center ` +
                        (isBooked
                          ? 'border-red-400 bg-red-100 text-red-500 cursor-not-allowed opacity-80 font-semibold'
                          : selectedTime === time
                            ? 'border-primary bg-primary text-white font-semibold shadow-lg shadow-primary/20'
                            : 'border-gray-200 hover:border-primary text-gray-700 hover:bg-primary/5')
                      }
                      disabled={isBooked}
                    >
                      <span>{time}</span>
                      {isBooked && (
                        <span className="text-xs text-red-500 font-semibold mt-1">Booked</span>
                      )}
                      {selectedTime === time && !isBooked && (
                        <motion.div
                          className="absolute inset-0 bg-primary rounded-lg -z-10"
                          layoutId="selectedTime"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
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
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBooking}
                className="w-full py-4 bg-primary text-white text-lg font-semibold rounded-lg 
                          hover:bg-primary-dark transition-colors duration-200 shadow-lg shadow-primary/20
                          relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10">Book Strategy Call</span>
              </motion.button>
            </motion.div>
          )}
        </div>
      ) : (
        // Confirmation Screen
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <motion.div 
            className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-5xl">✨</span>
          </motion.div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">You're All Set!</h3>
          <p className="text-xl text-gray-600 mb-8">
            Your strategy call is scheduled for:<br />
            <span className="font-semibold text-primary block mt-2">
              {selectedDate?.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
              })} at {selectedTime}
            </span>
          </p>
          <motion.div 
            className="max-w-sm mx-auto bg-gray-50 p-6 rounded-xl border border-primary/10"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-bold text-gray-900 mb-4">What's Next:</h4>
            <ul className="space-y-4 text-left">
              {[
                "Check your email for confirmation",
                "Add to your calendar",
                "Prepare your questions"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center text-gray-600"
                >
                  <span className="text-primary mr-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Calendar; 