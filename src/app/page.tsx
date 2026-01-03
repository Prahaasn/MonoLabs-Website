import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Products } from '@/components/Products'
import { Training } from '@/components/Training'
import { Features } from '@/components/Features'
import { Process } from '@/components/Process'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Training />
      <Features />
      <Process />
      <Testimonials />
      <Contact />
    </>
  )
}
