import React from 'react'


export default function Footer() {
  return (
    <>
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">
            &copy; 2025 BrandName. All rights reserved.
          </p>

          <div className="flex justify-center space-x-8 mb-4">
            <a href="https://docs.google.com/document/d/1FR0fW2Kq2qBrW-cRxB06wX9ls-UEMf0Cp2MiOcj_uiE/edit?usp=sharing" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="https://www.websitepolicies.com/blog/sample-terms-conditions-template" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="/contact_us" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.495v-9.294h-3.138v-3.622h3.138v-2.671c0-3.104 1.82-4.822 4.656-4.822 1.354 0 2.763.25 2.763.25v3.046h-1.562c-1.534 0-2.013.95-2.013 1.921v2.292h3.419l-.546 3.622h-2.874v9.294h5.625c.73 0 1.325-.595 1.325-1.325V1.325c0-.73-.595-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M23.944 4.832c-.883.391-1.833.654-2.828.772 1.02-.61 1.8-1.573 2.166-2.724-.951.56-2.006.97-3.126 1.193-.896-.956-2.174-1.55-3.594-1.55-3.017 0-5.455 2.438-5.455 5.455 0 .43.048.85.138 1.25-4.533-.227-8.53-2.397-11.209-5.698-.467.798-.734 1.722-.734 2.717 0 1.876.955 3.526 2.4 4.5-.883-.027-1.718-.271-2.448-.68-.062 2.516 1.779 4.89 4.396 5.411-1.646 1.29-3.712 2.065-5.98 2.065-.389 0-.771-.023-1.151-.068 2.134 1.368 4.671 2.168 7.388 2.168 8.857 0 13.73-7.333 13.73-13.73 0-.209-.004-.418-.014-.627.945-.683 1.762-1.51 2.4-2.475z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M19 0h-14c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-20c0-1.104-.896-2-2-2zm-10 18h-3v-9h3v9zm-1.5-10.25c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm10.5 10.25h-3v-4.5c0-1.5-1.5-1.5-1.5 0v4.5h-3v-9h3v1.5c.003 1.52 1.5 1.5 1.5 0v-1.5h3v9z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

    
    
    
    </>
  )
}
