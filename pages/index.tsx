import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import LatestProjects from '../components/LatestProjects'
import AboutMe from '../components/AboutMe'
import Process from '../components/Process'
import Services from '../components/Services'
import Video from '../components/Video'
import ServicesInclude from '../components/ServicesInclude'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-secondary text-white">
      <Head>
        <title>Logopify - More than a Logo, It's Your Story</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Features />
        <LatestProjects />
        <AboutMe />
        <Process />
        <Services />
        <Video />
        <ServicesInclude />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}