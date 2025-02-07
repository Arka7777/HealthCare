import React from 'react'

export default function OurImpacts() {
  return (
    <section className="py-12 md:py-16 bg-blue-50 text-center" id="impact">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Impact</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
          <div className="w-full md:w-1/3">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-500">10K+</h3>
            <p className="text-base md:text-lg text-gray-600">Patients Served</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-500">100+</h3>
            <p className="text-base md:text-lg text-gray-600">Doctors Available</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-500">98%</h3>
            <p className="text-base md:text-lg text-gray-600">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
