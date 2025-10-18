import Hero from '@/components/sections/hero'
import Features from '@/components/sections/features'
import About from '@/components/sections/about'
import ContactForm from '@/components/sections/contact-form'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <ContactForm />
    </main>
  )
}