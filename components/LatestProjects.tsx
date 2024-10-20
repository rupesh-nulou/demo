import Image from 'next/image'

const projects = [
  { image: '/project-1.png', title: 'Thunderbolt', description: 'Energy Drink Company' },
  { image: '/project-2.png', title: 'Cubix', description: 'Software Development' },
  { image: '/project-3.png', title: 'Wavey', description: 'Music Streaming Platform' },
  { image: '/project-4.png', title: 'Fusion', description: 'Restaurant Chain' },
]

export default function LatestProjects() {
  return (
    <section id="latest-projects" className="bg-secondary py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-accent rounded-lg overflow-hidden">
              <Image src={project.image} alt={project.title} width={300} height={200} className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-transparent border border-primary text-primary px-6 py-2 rounded hover:bg-primary hover:text-secondary transition duration-300">View All</button>
        </div>
      </div>
    </section>
  )
}