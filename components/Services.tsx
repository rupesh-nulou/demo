import Image from 'next/image';

const services = [
  {
    icon: '/service-icon-1.svg',
    title: 'Unlimited Brand Concepts',
    description: 'Explore various design directions',
  },
  {
    icon: '/service-icon-2.svg',
    title: 'One-on-One Design',
    description: 'Direct collaboration with designers',
  },
  {
    icon: '/service-icon-3.svg',
    title: 'Quick Turnaround',
    description: 'Fast delivery of your designs',
  },
  {
    icon: '/service-icon-4.svg',
    title: 'Dedicated Support',
    description: 'Assistance throughout the process',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-accent py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Get Better Results with Stunning Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
