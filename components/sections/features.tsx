import CtaButton from '@/components/ui/cta-button'

const features = [
  {
    title: 'Autonomous Solutions',
    description: 'Self-managing IT infrastructure that adapts to your needs without constant supervision.',
    icon: '🤖',
  },
  {
    title: 'Digital Transformation',
    description: 'Comprehensive modernization of your business processes and technology stack.',
    icon: '🚀',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock monitoring and support to ensure your systems always run smoothly.',
    icon: '🔌',
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless migration and optimization of your infrastructure to cloud platforms.',
    icon: '☁️',
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade security solutions to protect your data and infrastructure.',
    icon: '🔒',
  },
  {
    title: 'Scalable Architecture',
    description: 'Build systems that grow with your business without performance bottlenecks.',
    icon: '📈',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Neuronix?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide cutting-edge IT solutions that empower your business to thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <CtaButton href="#contact">
            Explore Our Solutions
          </CtaButton>
        </div>
      </div>
    </section>
  )
}