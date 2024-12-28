import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', ''])
  const inputRefs = [useRef(), useRef(), useRef(), useRef()]
  const email = "john.doe@gmail.com" // Sample email
const navigate=useNavigate();
  // Handle input change
  const handleChange = (index, value) => {
    if (isNaN(value)) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move to next input if value is entered
    if (value !== '' && index < 3) {
      inputRefs[index + 1].current.focus()
    }
  }
const handleverify=()=>{
    navigate("/login")
}
  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus()
    }
  }

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 4)
    if (!/^\d+$/.test(pastedData)) return

    const newOtp = [...otp]
    pastedData.split('').forEach((value, index) => {
      if (index < 4) newOtp[index] = value
    })
    setOtp(newOtp)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-xl">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-semibold text-gray-700">OTP Verification</h1>
          
          <div className="space-y-2">
            <p className="text-gray-600">
              Enter the code verification sent to
            </p>
            <p className="text-gray-900 font-medium">
              {email.replace(/(.{2})(.*)(?=@)/, (_, start, rest) => 
                start + '*'.repeat(rest.length)
              )}
            </p>
          </div>

          <form className="space-y-8">
            <div>
              <p className="text-sm text-gray-500 mb-4">
                Type 4 digit security code
              </p>
              <div className="flex gap-4 justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-14 h-14 text-center text-2xl font-semibold border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 inline">
                Didn't you receive the OTP?{' '}
                <button 
                  type="button"
                  className="text-emerald-400 hover:text-emerald-500 font-medium"
                  onClick={() => {/* Handle resend */}}
                >
                  Resend OTP
                </button>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-emerald-400 text-white rounded-lg text-lg font-medium hover:opacity-90 transition-opacity"
              onClick={handleverify}
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

