import Image from 'next/image';

const testimonials = [
  {
    image: '/testimonial-1.jpg',
    quote:
      '"Logopify delivered beyond our expectations. The logo perfectly captures our brand essence."',
    name: 'John Smith',
    position: 'CEO, TechCorp',
  },
  {
    image: '/testimonial-2.jpg',
    quote:
      '"The team creativity and professionalism made the entire process smooth and enjoyable."',
    name: 'Sarah Johnson',
    position: 'Founder, Eco Solutions',
  },
  {
    image: '/testimonial-3.jpg',
    quote:
      '"Our new logo has significantly improved our brand recognition. Highly recommended!"',
    name: 'Mike Davis',
    position: 'Marketing Director, FoodCo',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-accent py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          You're in Good Company
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-6 text-center"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <p className="mb-4 italic">{testimonial.quote}</p>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-gray-400">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
