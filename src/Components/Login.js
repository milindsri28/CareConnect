import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
const navigate=useNavigate()
const handlego=()=>{
    navigate("/homepage")
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Login Form */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-white mb-12">Care Connect</h1>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-white text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-white text-lg">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white pr-12"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="text-right">
                  <a href="#" className="text-white/80 hover:text-white text-sm">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg text-lg font-medium transition-colors"
                onClick={handlego}
              >
                GO!
              </button>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 border-2 border-white/20 rounded bg-transparent text-blue-600 focus:ring-0"
                />
                <label htmlFor="remember" className="ml-2 text-white">
                  Remember for 30 days
                </label>
              </div>
            </form>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-white/20"></div>
              <span className="text-white">or</span>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            <button className="w-full bg-white text-gray-600 rounded-full py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRB4kg1jgnqD5fEaCSHKMoUdFeTBj9CH_opA&s"
                alt="Google logo"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>

            <p className="text-center text-white">
              Haven't Registered yet?{" "}
              <a href="#" className="underline hover:text-white/80">
                Sign in
              </a>
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="hidden md:block">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <img
                src="https://s3-alpha-sig.figma.com/img/3c8e/829d/02635e2fa83c1fa6040f8ac7949210df?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d06GbaQDePG4hQH58h7cc1LqO9gQRRqocUvFFcBP7bv4LGERu-Q9LDu8U2eFjRioiMwlnJBW8XxefBtTgJN477n9uy7-JFYWqzUbjCP0x8y-h0p-soZH9CQKpv1Tyw2c0s4eoxz~-I-xW5CsDz-m7BW0s91oiK9429NOigl3xc0Dy2yfuTli0MKxG6sPRW~bAY2k1ssPzBFYbZTe0Y2r-hU--GzGOl4oE9VEuHethbOYIDp4zxlLX2CVK0JcAXdbmulRWfy96qWCsnv2~HGq3HPk~931njtOBuHHiPDR6-rganise5svMa709CP0bx7Oiw47voHA25OT0Q~mLgG3Og__"
                alt="Medical illustration"
                className="w-full h-auto"
              />
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

