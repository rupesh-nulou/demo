import Image from 'next/image'

export default function Video() {
  return (
    <section id="video" className="bg-secondary py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Checkout the Logo Design Process</h2>
        <div className="relative w-full max-w-3xl mx-auto">
          <Image src="/video-thumbnail.jpg" alt="Video thumbnail" width={800} height={450} className="w-full rounded-lg" />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-secondary w-16 h-16 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}