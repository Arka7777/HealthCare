export default function HowItWorks() {
    return (
      <section className="bg-gray-100 py-12 sm:py-16" id="how-it-works">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">How It Works</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Getting healthcare services has never been easier. Follow these simple steps to get started!
            </p>
          </div>
  
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
           
            <div className="w-full">
              <div className="p-6 bg-white rounded-lg shadow-lg h-full">
                <div className="flex justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-12 h-12 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h2l1 10h10l1-10h2M5 5v14h14V5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Sign Up</h3>
                <p className="text-gray-600">
                  Create an account with us to access all features of the app, including appointments, services, and more.
                </p>
              </div>
            </div>
  
           
            <div className="w-full">
              <div className="p-6 bg-white rounded-lg shadow-lg h-full">
                <div className="flex justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-12 h-12 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 10l-2 2m0 0l-2-2m2 2V4M4 20v-6M5 10l7-7 7 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Browse Services</h3>
                <p className="text-gray-600">
                  Browse through available doctors, clinics, and services. Find the best option for your healthcare needs.
                </p>
              </div>
            </div>
  
           
            <div className="w-full">
              <div className="p-6 bg-white rounded-lg shadow-lg h-full">
                <div className="flex justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-12 h-12 text-red-500"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v14l7-7m0 0l7 7V3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Book Appointment</h3>
                <p className="text-gray-600">
                  Once you've selected your service or doctor, easily book an appointment that fits your schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }