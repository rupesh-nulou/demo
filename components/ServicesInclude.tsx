import Image from 'next/image'

const services = [
  { image: '/service-include-1.jpg', title: 'Custom Logo Design', description: 'Unique designs tailored to your brand' },
  { image: '/service-include-2.jpg', title: 'Brand Guidelines', description: 'Comprehensive guide for consistent branding' },
]

export default function ServicesInclude() {
  return (
    <section id="services-include" className="bg-accent py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Services Include</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary rounded-lg overflow-hidden">
              <Image src={service.image} alt={service.title} width={600} height={400} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}