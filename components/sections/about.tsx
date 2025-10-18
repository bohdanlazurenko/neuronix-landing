import CtaButton from '@/components/ui/cta-button'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About Neuronix
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Neuronix is a pioneering autonomous IT company dedicated to revolutionizing how businesses leverage technology. Founded in 2020, we've helped over 500 companies transform their digital infrastructure.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of expert engineers and AI specialists work tirelessly to create self-managing systems that reduce operational overhead while increasing efficiency and reliability.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Engineers</div>
              </div>
            </div>
            <CtaButton href="#contact">
              Get in Touch
            </CtaButton>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center">
              <div className="text-white text-center p-8">
                <div className="text-6xl mb-4">🧠</div>
                <div className="text-2xl font-bold mb-2">Innovation</div>
                <div className="text-lg">Driven by AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}