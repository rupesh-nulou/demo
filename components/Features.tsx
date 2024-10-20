import Image from 'next/image';

const features = [
  {
    icon: '/icon-1.svg',
    title: 'Custom Design',
    description: 'Tailored to your brand',
  },
  {
    icon: '/icon-2.svg',
    title: 'Quick Turnaround',
    description: 'Fast and efficient process',
  },
  {
    icon: '/icon-3.svg',
    title: 'Unlimited Revisions',
    description: 'Until you are satisfied',
  },
  {
    icon: '/icon-4.svg',
    title: '24/7 Support',
    description: 'Always here to help',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-accent py-20">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
