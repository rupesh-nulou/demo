import Image from 'next/image'

export default function AboutMe() {
  return (
    <section id="about-me" className="bg-accent py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image src="/profile-picture.jpg" alt="John Doe profile picture" width={300} height={300} className="rounded-full" />
          </div>
          <div className="md:w-2/3 md:pl-10">
            <p className="text-lg mb-6">Hi, I'm John Doe, a passionate logo designer with over 10 years of experience. I specialize in creating unique and memorable logos that truly represent your brand's essence.</p>
            <button className="bg-transparent border border-primary text-primary px-6 py-2 rounded hover:bg-primary hover:text-secondary transition duration-300">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}