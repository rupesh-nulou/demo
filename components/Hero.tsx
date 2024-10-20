import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="bg-secondary py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">More than a Logo, It's Your Story</h1>
          <p className="text-xl mb-8">Crafting unique and memorable logos that represent your brand's essence and values.</p>
          <button className="bg-primary text-secondary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80">Get Started</button>
        </div>
        <div className="md:w-1/2">
          <Image src="/hero-image.png" alt="Abstract 3D shape" width={500} height={500} className="w-full" />
        </div>
      </div>
    </section>
  )
}