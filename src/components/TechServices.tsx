import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ServiceId = 'automation' | 'training' | 'consulting' | 'development';

interface Feature {
  title: string;
  value: string;
  description: string;
}

interface Demo {
  title: string;
  steps: string[];
}

interface Service {
  id: ServiceId;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: Feature[];
  demo: Demo;
}

const codeSnippets: Record<ServiceId, string> = {
  automation: `// AI Automation Example
async function automateWorkflow() {
  const tasks = await AI.analyze(workflow);
  const optimizedFlow = await AI.optimize(tasks);
  return AI.deploy(optimizedFlow);
}`,
  training: `// AI Training Module
class AITraining {
  async startWorkshop() {
    const modules = loadModules();
    await this.simulate(modules);
    return this.evaluate();
  }
}`,
  consulting: `// AI Strategy Planning
function developStrategy(business) {
  const opportunities = AI.findOpportunities();
  return AI.createRoadmap(opportunities);
}`,
  development: `// Custom AI Development
class CustomAI {
  train(data) {
    this.model.fit(data);
    return this.optimize();
  }
}`
};

const TechServices = () => {
  const [activeService, setActiveService] = useState<ServiceId | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const services: Service[] = [
    {
      id: 'automation',
      title: 'AI Automation',
      description: 'Automate tasks, streamline operations, and deploy AI agents',
      icon: '🤖',
      color: 'from-blue-500 to-purple-600',
      features: [
        { title: 'Workflow Analysis', value: '85%', description: 'Automation potential' },
        { title: 'Process Optimization', value: '3x', description: 'Faster execution' },
        { title: 'Cost Reduction', value: '60%', description: 'Average savings' }
      ],
      demo: {
        title: 'Live Automation Demo',
        steps: ['Analyzing workflow...', 'Identifying bottlenecks...', 'Optimizing process...', 'Deploying AI agents...']
      }
    },
    {
      id: 'training',
      title: 'AI Training',
      description: 'Interactive AI workshops and hands-on bootcamps',
      icon: '🎓',
      color: 'from-green-500 to-teal-600',
      features: [
        { title: 'Learning Progress', value: '95%', description: 'Completion rate' },
        { title: 'Practical Skills', value: '50+', description: 'Real-world applications' },
        { title: 'Team Performance', value: '4x', description: 'Productivity boost' }
      ],
      demo: {
        title: 'Training Simulator',
        steps: ['Loading modules...', 'Preparing environment...', 'Running simulation...', 'Evaluating results...']
      }
    },
    {
      id: 'consulting',
      title: 'AI Consulting',
      description: 'Data-driven strategy and implementation roadmap',
      icon: '📊',
      color: 'from-purple-500 to-pink-600',
      features: [
        { title: 'ROI Projection', value: '250%', description: 'Average return' },
        { title: 'Implementation', value: '2x', description: 'Faster deployment' },
        { title: 'Success Rate', value: '94%', description: 'Project completion' }
      ],
      demo: {
        title: 'Strategy Analyzer',
        steps: ['Gathering data...', 'Analyzing market...', 'Identifying opportunities...', 'Generating roadmap...']
      }
    },
    {
      id: 'development',
      title: 'AI Development',
      description: 'Custom AI solutions and integration',
      icon: '⚡',
      color: 'from-red-500 to-orange-600',
      features: [
        { title: 'Code Quality', value: '99%', description: 'Test coverage' },
        { title: 'Performance', value: '5x', description: 'Speed improvement' },
        { title: 'Scalability', value: '∞', description: 'Auto-scaling' }
      ],
      demo: {
        title: 'Live Development',
        steps: ['Initializing model...', 'Training AI...', 'Optimizing performance...', 'Deploying solution...']
      }
    }
  ];

  const handleServiceClick = (serviceId: ServiceId) => {
    setActiveService(serviceId);
    setIsAnimating(true);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="relative group cursor-pointer"
              onClick={() => handleServiceClick(service.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Service Card */}
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-gray-200 shadow-xl">
                {/* Icon and Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`text-4xl bg-gradient-to-r ${service.color} text-transparent bg-clip-text`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>

                {/* Code Preview */}
                <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-hidden">
                  <pre className="text-sm text-gray-300">
                    <code>{codeSnippets[service.id]}</code>
                  </pre>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-600">{feature.title}</span>
                      <motion.div
                        className={`text-lg font-bold bg-gradient-to-r ${service.color} text-transparent bg-clip-text`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {feature.value}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Modal */}
        <AnimatePresence>
          {activeService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setActiveService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Demo Content */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">
                    {services.find(s => s.id === activeService)?.demo.title}
                  </h3>
                  <div className="space-y-4">
                    {services
                      .find(s => s.id === activeService)
                      ?.demo.steps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>{step}</span>
                        </motion.div>
                      ))}
                  </div>
                  
                  {/* Terminal-like Interface */}
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex space-x-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <pre className="text-sm text-gray-300">
                      <code>{codeSnippets[activeService]}</code>
                    </pre>
                  </div>

                  {/* Interactive Elements */}
                  <div className="flex justify-end space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-gray-200 rounded-lg text-gray-700"
                      onClick={() => setActiveService(null)}
                    >
                      Close
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-primary text-white rounded-lg"
                      onClick={() => setIsAnimating(!isAnimating)}
                    >
                      {isAnimating ? 'Stop Demo' : 'Start Demo'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TechServices; 