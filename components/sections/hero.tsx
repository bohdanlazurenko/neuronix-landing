import CtaButton from '@/components/ui/cta-button'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">Neuronix</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your autonomous IT partner for innovative solutions, digital transformation, and cutting-edge technology services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton href="#contact" size="lg">
              Get Started
            </CtaButton>
            <CtaButton href="#features" variant="secondary" size="lg">
              Learn More
            </CtaButton>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
    </section>
  )
}