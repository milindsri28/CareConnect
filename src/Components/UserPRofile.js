import React from 'react'
import { MapPin, Edit2, Users, BarChart2, Search, Bell, Mail, User, ChevronRight, Plus, ExternalLink } from 'lucide-react'
import image from '../Resources/image 4.png';
import { useNavigate } from 'react-router-dom';
export default function UserProfile() {
    const navigate=useNavigate();
    const handlecareconnect=()=>{
        navigate("/homepage")
    }
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-cyan-500"
              onClick={handlecareconnect}
              >Care Connect</h1>
              <div className="hidden md:flex items-center space-x-8 ml-10">
                <a href="#" className="text-gray-600 hover:text-gray-900">Settings & Privacy</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Help</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Posts & Activity</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Job Posting</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-400" />
              <Bell className="h-5 w-5 text-gray-400" />
              <Mail className="h-5 w-5 text-gray-400" />
              <User className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </nav>

      {/* Profile Header */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500">
          <img
            src="https://s3-alpha-sig.figma.com/img/2b9a/d56e/ab2bb7e5134c546e406501f00d6f24fc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k9IxuJ9Bt36Y8RkHwQBDrZOo-RphO1Rkj0usExTfTFfGpSUwQFj21KiaQgPMRqqRzHHOHsaFBPXfttTwMjbzGeJSexRU-NKOxvrKDX5WA-cGtE32BGI-cBv3fOZSVbCmbFsTcUap8F9VySGj4yD9F4u3wRR~e~Dm7Nmdt2fD-4GItz-lNEvBazxXr~e6Y77SoZBhWNg~JPLZwAdzfe-yqYu22e1keOtRcJnE2FXGT5-hBjxJAVf196EKzAxu3p~I0mSD3~vjmU8XY5QLtqS88wulcUHGNd6y6cuWv2R-AbUVNReszikhpDlVo1jmjzWB9Yz4EE1jyVjS3JF~Er3e0Q__"
            alt="Cover"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-24">
            <div className="absolute">
              <img
                src="https://s3-alpha-sig.figma.com/img/1a3c/ed2e/559c776f7db8c4e19efc6b1b9ef5dca5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eP5CG4aRwjLlQmTZPZFhZC6weLz3bbh-456jM6xeyf4HUgpjmZCRnRUMC4lsSgmaXGef2-Gm2FKuDfwFFir2J1dPE5v-HDDfv051YG-bjsEn-~3JOMua7EllbEYtnvJmZMl2-FJAdC1QTjBCMQlGg~8Ilt2Cq39Gxr9mLOWx2cg1TygZpqFkaGnRUcOfJ02mdbut6gfGYyPvDaw3gaHINstFMy8hTF4-qrPqVXHxUGBG8k5BRaJ4L~8vxMrni8HnhGgVg3~IYOxA8oY2S4gNAnPQ0gzudclZrFIMsRZc22ZVuwKseiWyEAwrPGDlkWHFSxtyB1b7x79X8mOAd1~eKg__"
                alt="Dr. Pooja K H"
                className="h-32 w-32 rounded-full border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">Dr. Pooja K H</h1>
              <p className="text-gray-600">MBBS, MD - Dermatology, FRGAH(S) | Aesthetic Dermatology</p>
              <div className="flex items-center text-gray-500 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Karnataka, Bangalore, India</span>
                <a href="#" className="text-blue-500 ml-2">Contact info</a>
              </div>
              <p className="text-gray-500 mt-1">420 connections</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-cyan-500 text-white rounded-full">
                Connect
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-full">
                Add Profile Section
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-full">
                More
              </button>
            </div>
          </div>

          {/* Current Position */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Medical Center for Skin, Hair and Plastic Surgery</h2>
              <Edit2 className="h-5 w-5 text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="font-semibold mb-4">Analytics</h2>
              <p className="text-gray-500 text-sm mb-4">Private to you</p>
              <div className="grid grid-cols-3 gap-8">
                <div className="flex items-center space-x-3">
                  <Users className="h-10 w-10 text-gray-400" />
                  <div>
                    <p className="font-semibold">210 profile views</p>
                    <p className="text-sm text-gray-500">Discover who's viewed your profile</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart2 className="h-10 w-10 text-gray-400" />
                  <div>
                    <p className="font-semibold">30 posts impressions</p>
                    <p className="text-sm text-gray-500">Check out who's engaging with your posts</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Search className="h-10 w-10 text-gray-400" />
                  <div>
                    <p className="font-semibold">30 search appearances</p>
                    <p className="text-sm text-gray-500">See how often you appear in search results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">About</h2>
              <Edit2 className="h-5 w-5 text-gray-400 cursor-pointer" />
            </div>
            <p className="text-gray-600">
              MBBS, MD - Dermatology, FRGAH(S) (Aesthetic Dermatology) | Krishna Institute of Medical Sciences, Karad | KMC, Mangaluru
            </p>
          </div>

          {/* Activity */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Activity</h2>
              <Edit2 className="h-5 w-5 text-gray-400 cursor-pointer" />
            </div>
            <div className="flex space-x-4 mb-4">
              <button className="px-4 py-2 bg-gray-100 rounded-full">Posts</button>
              <button className="px-4 py-2 bg-gray-100 rounded-full">Comments</button>
              <button className="px-4 py-2 bg-gray-100 rounded-full">Documents</button>
            </div>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <p className="mb-4">
                  Excited to share that I've successfully completed my internship at ITM Hospital, Gwalior (M.P). During the training I experienced...
                </p>
                <img
                  src={image}
                  alt="ITM Internship Certificate"
                  className="rounded-lg"
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">20 likes</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">6 comments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Experience</h2>
              <div className="flex space-x-2">
                <Plus className="h-5 w-5 text-gray-400 cursor-pointer" />
                <Edit2 className="h-5 w-5 text-gray-400 cursor-pointer" />
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img
                src="https://s3-alpha-sig.figma.com/img/38cf/7ee1/8d116db165c4101d40a3d1dde73d9fac?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aakwehGGPSblvrcDNg4MsNLVxo92BL8B2khlmm~eGI5ag4ZWb5wf6HR2lplH7mzTchNqLyNb3qqKT6cDC8NrcpqDj2fmT0uXidKM6brGjkc9Acn-7lImntNHaq7Ntqj-4ePIDf8NNvM21FfJ2eQTw-ekVFuWmW1LFhfQ7CUnVP51pjrFVOGcIeQJVDFojPMQ~caO2zEV0zwrXvfU-WkHfpFQmnOAH2pAcW8usHNc3hdHKyTxjXMzRJ0mtARaQVkO3OUR-cmLd69bkeIVfUJ-a8GigqwzYFweHoaTnRgKniljZHUBt8ROhQkmAlmaC2TZe6Lk7ES7NNmEazY-xKPZFw__"
                alt="ITM Hospital"
                className="w-14 h-14 rounded"
              />
              <div>
                <h3 className="font-semibold">Intern</h3>
                <p className="text-gray-600">ITM Govt Hospital • Internship</p>
                <p className="text-sm text-gray-500">Aug 2023 - Oct 2024 • 2 mo</p>
                <p className="text-sm text-gray-500">Gwalior</p>
                <p className="text-sm text-gray-600 mt-2">Dermatology/Transmitter Diseases Intern</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Education</h2>
              <div className="flex space-x-2">
                <Plus className="h-5 w-5 text-gray-400 cursor-pointer" />
                <Edit2 className="h-5 w-5 text-gray-400 cursor-pointer" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f67a/2c1e/aa26d6914711dc58295fd955d655c730?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V0UEPlo5ASGzgc97pkce~jERUiRTyAcAHfxCFWIxp6aq-a43REMUwuiWC8O1sIjNIOWzFEs6DdNfhv5-ZRF-YgrC5t0kpIP-X835wW273WV8SrMpbu8yfTlVjCfT-9FmYIv8ktzek37yWEKO~u0ry3gxEe0inJpDcO2LvXqGcR4DAAjOfu2t74WW4E-gmdzkzhehsC65mjADk~J3on7A437dr2BGckXFa0CG0bD1bKUdgw~8pfLVnZd-JKJuMxo4g0LGUG44iiGU-mgfOH9qcqeG59rQvV0xGgFKPOsqzCm4tnY0MHmMoNysXahFrLkJCWqWI6DIly1j7h5d-K9Fug__"
                  alt="Krishna Institute"
                  className="w-14 h-14 rounded"
                />
                <div>
                  <h3 className="font-semibold">Krishna Institute of Medical Sciences, Karad</h3>
                  <p className="text-gray-600">MD - Dermatology</p>
                  <p className="text-sm text-gray-500">2021 - 2024</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f1d1/b0d6/5fb953e1293355eb2fb404a5beaa7127?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jKvc9W1zRli0GIPUBiQ4eVU1tE5a7e3uYcxYxLoNNwIUCdFNcz1anPcGJH~nUJKG41Q6lLhINixjpFrk9CfcJ3rdVcMUthgkeu15EV5ERp5VuWnGK~2cY36UPw7ZepWmvk6mYwCl7ueHvACEDQT~Ql1yIacDnJg-j1~8yrHh1lRMXA2a3rOcsAAG2RAfCsexNpYAYYjbaRIb4iwIrUkwIYVh3MZYE7QzuXLN4~LJAlpGOtJTwCyjxyzHMQ3syxjOXrl8FpwEqCNBkfPRUE9JRzi4540Z3poQeX0-KJDpIwXeAB5bMGHE5OmWq29mFoGdVgpRIfUGpPHXLbY7Xb-5bg__"
                  alt="KMC"
                  className="w-14 h-14 rounded"
                />
                <div>
                  <h3 className="font-semibold">KMC, Mangaluru</h3>
                  <p className="text-gray-600">MBBS</p>
                  <p className="text-sm text-gray-500">2011 - 2016</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="font-semibold mb-4">Interests</h2>
            <div className="flex space-x-4 mb-4">
              <button className="px-4 py-2 bg-gray-100 rounded-full">Top Voices</button>
              <button className="px-4 py-2 bg-gray-100 rounded-full">Companies</button>
              <button className="px-4 py-2 bg-gray-100 rounded-full">Newsletter</button>
              <button className="px-4 py-2 bg-gray-100 rounded-full">Schools</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/c6f0/5942/43ef8686fb122f0a079b8a98a157f96b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b8Wqa7f51iL7JO0hbL9TRmUr~htnjCuf1wEiCOesWJ8VjP7-pp0aTQexvDT8MgHJ122FQOEmbifiVXMqt8v141xTautq54mgCteolf2PGjgRGLhOBAUSjq5GKBs83BscfBFfdL3hdJ10IxbJ0Rs6bgN~878JLmj7ifGqRk7pC9H-R1pNHU9pRnDAgAskFfBlSIPaH68f81ay~K9mGq57bYj6lJFYuXOc3l9Bklpx7ugjbkhB3e6KqZix9pd1CiQw--jYkszoIFcyS2V-klRE7gvh6wCPPM4CtOMg4H6IOoGDz-nDUtAj8mB-ijNlCMwG1vvIqM~AKebN~cvNmK8AWA__"
                  alt="Dr. Richa Sharma"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-medium">Dr. Richa Sharma</h4>
                  <p className="text-sm text-gray-500">Neurologist • Apollo Delhi</p>
                  <p className="text-sm text-gray-500">5,911,254 followers</p>
                  <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-full text-sm">
                    Following
                  </button>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <img
                  src="https://s3-alpha-sig.figma.com/img/d939/921c/eb10e2ac062a64640ff61c2b9f7b93a0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oUW0nATGasyLAQe0H7cTmQSomOxyu6NowRZAJ~muQdkunIyHYighHehBIIqhosflWBVFHDRFbbVUdRz1oOGQAnlGwEuyhy1IRr37To3W-9i22T~JatpI2did2gV-A9YB0~4JxiKNxex9Ch2vO96bKiVA3WiItTNKiPELmBmvYBlCUvGWCbILoMBQEjst9YAppfVK90JH09NEaiR20a2tNrGncWZ5IjbWLfRbLyuEv3pbUm~ScXGwU0Y~gZf--go5nEOSk2Bb-IqA70kCqf24nhyk5WfNcdAydlFyO0UcatJv-AeAQ5QqnsM8s0jXThP1wE8hlsNQEQrQy623jdsSOA__"
                  alt="Dr. P.C. Joseph"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-medium">Dr. P.C. Joseph</h4>
                  <p className="text-sm text-gray-500">General Medicine • Orchid Medicity</p>
                  <p className="text-sm text-gray-500">812,524 followers</p>
                  <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-full text-sm">
                    Following
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="hover:text-gray-900">Accessibility</a>
          <a href="#" className="hover:text-gray-900">User Agreement</a>
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900">Cookie Policy</a>
          <a href="#" className="hover:text-gray-900">Copyright Policy</a>
          <a href="#" className="hover:text-gray-900">Brand Policy</a>
          <a href="#" className="hover:text-gray-900">Guest Controls</a>
          <a href="#" className="hover:text-gray-900">Community Guidelines</a>
        </div>
      </footer>
    </div>
  )
}
