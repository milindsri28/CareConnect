import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/login")
  }
  const handleSignup=()=>{
    navigate("/signup")
  }
  const suggestedSearches = [
    "Biomedical Engineering",
    "Business Development",
    "Health Services Manager",
    "Retail Associate",
    "Customer Care",
    "Operations",
    "Marketing",
    "Information Technology"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-8">Care Connect</h1>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-md space-y-4">
              <h2 className="text-2xl text-white mb-6">
                Identify the Appropriate Medical Job or Internship for You
              </h2>

              <div className="bg-white rounded-full p-1 flex">
                <button
                  className="flex-1 rounded-full py-2 px-4 focus:outline-none bg-blue-500 text-white"
                  onClick={handlelogin}
                >
                  Login
                </button>

                <button className="flex-1 rounded-full py-2 px-4 focus:outline-none bg-transparent hover:bg-gray-100"
                onClick={handleSignup}
                >
                  Sign up
                </button>
              </div>

              <div className="text-center text-white my-2">or</div>

              <button className="w-full bg-white text-gray-600 rounded-full py-2 px-4 flex items-center justify-center gap-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRB4kg1jgnqD5fEaCSHKMoUdFeTBj9CH_opA&s" alt="Google logo" className="w-5 h-5" />
                Continue with Google
              </button>
            </div>
            <div className="hidden md:block">
              <img src="https://s3-alpha-sig.figma.com/img/3c8e/829d/02635e2fa83c1fa6040f8ac7949210df?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d06GbaQDePG4hQH58h7cc1LqO9gQRRqocUvFFcBP7bv4LGERu-Q9LDu8U2eFjRioiMwlnJBW8XxefBtTgJN477n9uy7-JFYWqzUbjCP0x8y-h0p-soZH9CQKpv1Tyw2c0s4eoxz~-I-xW5CsDz-m7BW0s91oiK9429NOigl3xc0Dy2yfuTli0MKxG6sPRW~bAY2k1ssPzBFYbZTe0Y2r-hU--GzGOl4oE9VEuHethbOYIDp4zxlLX2CVK0JcAXdbmulRWfy96qWCsnv2~HGq3HPk~931njtOBuHHiPDR6-rganise5svMa709CP0bx7Oiw47voHA25OT0Q~mLgG3Og__" alt="Medical Professional" className="w-full h-auto" />
            </div>
          </div>
        </header>

        {/* Suggested Searches */}
        <section className="mb-16">
          <h3 className="text-white mb-4">Suggested Searches</h3>
          <div className="flex flex-wrap gap-2">
            {suggestedSearches.map((search, index) => (
              <button
                key={index}
                className="bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-2 text-sm"
              >
                {search}
              </button>
            ))}
            <button className="bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-2 text-sm flex items-center">
              Show More <ChevronDown className="ml-1 w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Post a Job Section */}
        <section className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16 flex items-center justify-between">
          <div>
            <h2 className="text-2xl text-white mb-4">Post a job for millions of people to see</h2>
            <button className="bg-white text-blue-600 rounded-full px-6 py-2 hover:bg-gray-100">
              Post
            </button>
          </div>
          <img src="https://s3-alpha-sig.figma.com/img/1477/e194/043676ae15c247bf152c24147e289fac?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NSlKZXmN7pFvtqhfB7tp10qJawU8e6VpYrkVBtlvcgmc7ZE80nKLSzJITdogJIP8A5UTu89H2qubCJQ2JAJeFRo5jhGexFbicqLjR-PdpgTX0gGQHVFZXFY7IsDe7bI1Bq145IfYo8BH6I3uBYs1lO-9Ggu2YK7k1H2Pm1ETQNbofAGkSh3HaZgLHRpgIt1h-YXh8OlkXTOqbnh6yecHUMzVBVHCOudWdvqHsb9dbvwvvUgYUznBMmukS6Wpk1bhK2IcgX0hlX9wQ12-DjuRCworuYDI8aT7~CmhJhWdOOtfP12JYOWeNCoQ6aTVhvtAC8NOezdEctQCBR9WJhKehA__" alt="Job posting illustration" className="w-48 h-48" />
        </section>

        {/* Connect Section */}
        <section className="mb-16 flex items-center justify-between">
          <img src="https://s3-alpha-sig.figma.com/img/3c8e/829d/02635e2fa83c1fa6040f8ac7949210df?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d06GbaQDePG4hQH58h7cc1LqO9gQRRqocUvFFcBP7bv4LGERu-Q9LDu8U2eFjRioiMwlnJBW8XxefBtTgJN477n9uy7-JFYWqzUbjCP0x8y-h0p-soZH9CQKpv1Tyw2c0s4eoxz~-I-xW5CsDz-m7BW0s91oiK9429NOigl3xc0Dy2yfuTli0MKxG6sPRW~bAY2k1ssPzBFYbZTe0Y2r-hU--GzGOl4oE9VEuHethbOYIDp4zxlLX2CVK0JcAXdbmulRWfy96qWCsnv2~HGq3HPk~931njtOBuHHiPDR6-rganise5svMa709CP0bx7Oiw47voHA25OT0Q~mLgG3Og__" alt="Connection illustration" className="w-48 h-48" />
          <div className="text-right">
            <h2 className="text-2xl text-white mb-4">Connect with people who can help</h2>
            <button className="bg-white/20 hover:bg-white/30 text-white rounded-full px-6 py-2">
              Find people you know
            </button>
          </div>
        </section>

        {/* Open to Work Section */}
        <section className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16 flex items-center justify-between">
          <div>
            <h2 className="text-2xl text-white mb-4">Let the right people know you are open to work</h2>
            <p className="text-white/80 mb-4 max-w-md">
              With the Open To Work feature, you can privately tell hospitals or publicly share with the CareConnect
              community that you are looking for new job opportunities.
            </p>
          </div>
          <img src="https://s3-alpha-sig.figma.com/img/6cc5/52e6/c37c09dbb768d3e0e6f3fe47e57d6e1d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PDoyTjCYRs7d9Q7H9Q8J8~EwuQj0nnuoqUXvOvWKhSBVg28zu2ULwUc10gteCoXFTF7923a8AVbWSeJVodX-FRNUB5JPnNNzVrJ9ruLuHxoyK2pe8z0NbG-cvHcHrhHU9upTc1q1MyqwtY-nf56MWkLjmHxiHQIJDKM8kf5IQ5bHVahnqWNEZD82ZO8NEeCaIRfydFFc8do4zIBT2libg0wTyAaFvCEylQ-CZ5ohGSIYUqhzPFgO7dzWG8wK59sKwzDp87RSM1ZemcWSVDm3PO8jXvsvrdZzkUzEpdQyQO467jKYHiWziJ1Uy1egbWFGmgkuYDMJDgt5EYX5c9xu6g__" alt="Open to work illustration" className="w-48 h-48" />
        </section>

        {/* Get Started Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl text-white mb-4">
            Join your Colleagues, classmates and friends on CareConnect
          </h2>
          <button className="bg-white/20 hover:bg-white/30 text-white rounded-full px-8 py-3 text-lg">
            Get Started
          </button>
        </section>

        {/* Footer */}
        <footer className="text-white/60 text-sm">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Accessibility</a>
            <a href="#" className="hover:text-white">User Agreement</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
            <a href="#" className="hover:text-white">Copyright Policy</a>
            <a href="#" className="hover:text-white">Brand Policy</a>
            <a href="#" className="hover:text-white">Guest Controls</a>
            <a href="#" className="hover:text-white">Community Guidelines</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

