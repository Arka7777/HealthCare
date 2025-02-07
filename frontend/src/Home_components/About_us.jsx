import React, { useState } from "react"
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react"

export default function AboutUs() {
  const [dropdown, setDropdown] = useState(false)

  const handleMoreDropdown = () => {
    setDropdown(!dropdown)
  }

  return (
    <div className="bg-white text-blue-900">
      <section className="py-20 px-4 md:px-20 bg-gradient-to-r from-blue-100 to-blue-300">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">
              Welcome to India's leading digital Healthcare Platform
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-blue-900">
              We focus on Simplifying healthcare & Impacting lives!
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              className="w-full h-auto rounded-lg shadow-xl"
              src="https://c0.wallpaperflare.com/preview/360/533/202/health-medical-healthcare-health.jpg"
              alt="Healthcare"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-20">
        <div className="space-y-6">
          {[
            { title: "Search Doctors for your ailment in your location", link: "/find-doctors" },
            { title: "Find Medicines for your requirement", link: "/search-medicines" },
            { title: "Find Your Nearest Clinic", link: "/discover-clinics" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-center p-6 bg-blue-50 rounded-lg shadow-lg"
            >
              <p className="text-xl font-semibold mb-4 md:mb-0">{item.title}</p>
              <a
                href={item.link}
                className="px-6 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full hover:from-blue-500 hover:to-blue-700 transition duration-300 flex items-center gap-2"
              >
                Click Here <ChevronRight size={20} />
              </a>
            </div>
          ))}

          <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
            <div className="flex justify-between items-center cursor-pointer" onClick={handleMoreDropdown}>
              <p className="text-xl font-semibold">Authoritative and Trustworthy Content</p>
              {dropdown ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            {dropdown && (
              <p className="mt-4 text-blue-800">
                Our team members work hard to provide reliable, accurate and trusted information. Our objective is to
                make healthcare services accessible and well-curated healthcare content. All our medicine and healthcare
                content or information is strictly moderated by our team of medicare experts, qualified and trusted
                doctors, pharmacists.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-20 bg-white">
        <h2 className="text-4xl font-bold mb-8 text-blue-900">What is Medicare?</h2>
        <p className="text-xl font-semibold mb-6 text-black">Medicare is a consumer healthcare "Unique Website".</p>
        <ul className="space-y-4 text-lg text-black list-disc pl-6">
          <li>
            Our platform is built to make accessing medical services in your area effortless, ensuring you save time and
            focus on your health.
          </li>
          <li>
            Easily choose your location to search for highly trusted doctors and experienced specialists near you,
            tailored to meet your healthcare needs.
          </li>
          <li>
            Quickly search for medicines you need, with seamless browsing options and instant availability checks to
            ensure timely access to your prescriptions.
          </li>
          <li>Explore a detailed directory of medical shops for added convenience.</li>
          <li>
            Simplify your healthcare journey by booking doctor appointments effortlessly and locating nearby pharmacies
            in just a few easy steps.
          </li>
          <li>
            Our platform is designed with a simple and intuitive interface, making healthcare access smooth and
            efficient for all types of users.
          </li>
          <li>Your one-stop solution for all medical and healthcare needs.</li>
          <li>Your health, just a click away!</li>
        </ul>
        <p className="mt-8 text-2xl font-semibold text-blue-600">
          To Change the face of Medicare in India, One consumer at a time
        </p>
        <div className="text-center mt-10">
          <p className="text-5xl font-bold text-blue-600">4 Million</p>
          <p className="text-xl text-blue-500">Registered Users as of Feb 7, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-400 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our ultimate goal is to provide healthcare one and all.</h2>
        </div>
      </section>

      <section className="py-20 px-4 md:px-20">
        <h2 className="text-4xl font-bold mb-8 text-blue-900">A Sneak Peek behind the Success</h2>
        <p className="text-xl mb-10 text-black">
          We believe that great work culture is a vital ingredient to our Hackathon's success. Our team members are
          encouraged to take ownership and work as a unit. Every team member inspires and motivates other members to
          contribute to the team's success.
        </p>
        <img
          className="w-full h-auto rounded-lg shadow-2xl"
          src="https://thumbs.dreamstime.com/b/brainstorm-planing-creative-asian-teamwork-group-asia-mobile-phone-app-developer-team-meeting-share-ideas-screen-282499244.jpg"
          alt="Team Collaboration"
        />
      </section>
    </div>
  )
}
