const steps = [
  { number: 1, title: 'Share Your Vision', description: 'Tell us about your brand and ideas' },
  { number: 2, title: 'Get Your Design', description: 'Receive initial concepts and provide feedback' },
  { number: 3, title: 'Final Delivery', description: 'Get your perfected logo in all formats' },
]

export default function Process() {
  return (
    <section id="process" className="bg-secondary py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">How to Get Started?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="bg-primary text-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}