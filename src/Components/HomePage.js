import React from 'react'
import { Search, Bell, Mail, User, Settings, Calendar, FileText, BarChart2, Share2, MessageCircle, Heart, ChevronRight, Mic } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
export default function Homepage() {
    const navigate=useNavigate();
    const handleusericon=()=>{
        navigate("/user-profile")
    }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-cyan-500">Care Connect</h1>
              <div className="hidden md:flex items-center space-x-8 ml-10">
                <a href="#" className="text-gray-600 hover:text-gray-900">Settings & Privacy</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Help</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Posts & Activity</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Job Posting</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="flex items-center bg-blue-50 rounded-full px-4 py-2">
                  <Search className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search any keywords"
                    className="ml-2 bg-transparent focus:outline-none"
                  />
                  <Mic className="h-5 w-5 text-gray-400 ml-2" />
                </div>
              </div>
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  1
                </span>
              </button>
              <Mail className="h-6 w-6 text-gray-600" />
              <User className="h-6 w-6 text-gray-600"
              onClick={handleusericon} />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/181d/ddcd/740191c932bb9004d3c3094d529319a0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KzGNeXyuZfAJLk4qYLJXOzRC4UQd2jHi-K0XQWbMV4Ek~8Y8m-vYz7fwvZioegnxP43oBoHRvDBlAqABRPlJe44LjETmQzAluXkRxpGx~mJB1ddM9vnAFaRwwgpxpd~iYCTRBNCIl2gc1EoXQ7q2~XnWpQ3y6~IiGEPP3xUlrzAoR6rU8qDzy5fQOgQm4BLySHfRr5zbwMaV4F2rvIUCmB~cdH5WC9tlhZXNTic~haC0tY0YpMhbWa~xY0wtuqvnApa4OadIFwWFtzu0gfWutv7uPVz630NHdXeLs0CvSy~aifOYBDj0Xj8XmWZMXvC3BHB0fVZaIBD-htfceAU-Cw__"
                  alt="User avatar"
                  className="rounded-full w-20 h-20 mb-4"
                />
                <h2 className="text-lg font-semibold">User's Name</h2>
                <p className="text-sm text-gray-500">User's Designation & Profile</p>
                <button className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600">
                  View Profile
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-50 rounded p-2">
                  <BarChart2 className="h-5 w-5" />
                  <span>Dashboard</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-50 rounded p-2">
                  <Calendar className="h-5 w-5" />
                  <span>Reminders</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-50 rounded p-2">
                  <FileText className="h-5 w-5" />
                  <span>Applications</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-50 rounded p-2">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-6">
            {/* Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-400 rounded-xl p-8 mb-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Discover your Dream Job with CareConnect</h2>
              <p className="mb-6">Don't let your career dreams remain dreams; turn them into reality with our product and discover your dream job today.</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50">
                Discover
              </button>
            </div>

            {/* Create Post */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-4">
                <div className="flex items-center space-x-4">
                <User className="h-6 w-6 text-gray-600" />
                  <button className="flex-1 text-left px-4 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200">
                    Share a Post
                  </button>
                </div>
                <div className="flex justify-between mt-4">
                  <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded">
                    <FileText className="h-5 w-5" />
                    <span>Write Article</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded">
                    <video className="h-5 w-5" />
                    <span>Video</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded">
                    <Share2 className="h-5 w-5" />
                    <span>Link</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded">
                    <img className="h-5 w-5" />
                    <span>Photo</span>
                  </button>
                  <button className="px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600">
                    Post
                  </button>
                </div>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow">
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/c6f0/5942/43ef8686fb122f0a079b8a98a157f96b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b8Wqa7f51iL7JO0hbL9TRmUr~htnjCuf1wEiCOesWJ8VjP7-pp0aTQexvDT8MgHJ122FQOEmbifiVXMqt8v141xTautq54mgCteolf2PGjgRGLhOBAUSjq5GKBs83BscfBFfdL3hdJ10IxbJ0Rs6bgN~878JLmj7ifGqRk7pC9H-R1pNHU9pRnDAgAskFfBlSIPaH68f81ay~K9mGq57bYj6lJFYuXOc3l9Bklpx7ugjbkhB3e6KqZix9pd1CiQw--jYkszoIFcyS2V-klRE7gvh6wCPPM4CtOMg4H6IOoGDz-nDUtAj8mB-ijNlCMwG1vvIqM~AKebN~cvNmK8AWA__"
                      alt="Dr. Richa Sharma"
                      className="rounded-full w-12 h-12"
                    />
                    <div>
                      <h3 className="font-semibold">Dr. Richa Sharma</h3>
                      <p className="text-sm text-gray-500">Neurologist - Apollo Delhi</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Embracing Digital Technologies in Healthcare: From Trials to Treatment
                  </p>
                  <p className="text-gray-600">
                    In today's rapidly evolving world, digital technologies are not just tools; they are game-changers. The potential they hold to revolutionize healthcare is immense, and nowhere is this more evident than in the journey from clinical trials to patient treatment.
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-600">
                        <Heart className="h-5 w-5" />
                        <span>Like</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-600">
                        <MessageCircle className="h-5 w-5" />
                        <span>Comment</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-600">
                        <Share2 className="h-5 w-5" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            {/* Profile Stats */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">210</h3>
                  <p className="text-sm text-gray-500">Profile Views</p>
                  <p className="text-xs text-gray-400">Past 10 days</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">90</h3>
                  <p className="text-sm text-gray-500">Post Impressions</p>
                  <p className="text-xs text-gray-400">Past 12 days</p>
                </div>
              </div>
            </div>

            {/* Jobs */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-semibold">Jobs</h3>
                <button className="text-cyan-500 hover:text-cyan-600">View all</button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-4">365 job recommendations for you</p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Consultant - Neuro Surgery",
                      location: "Faridabad - Amrita Hospital",
                      time: "13 min"
                    },
                    {
                      title: "Optomologist Surgeon - Ophthalmology",
                      location: "Chennai - Apollo Hospital",
                      time: "20 min"
                    },
                    {
                      title: "Radiologist - Interventional Radiology",
                      location: "Delhi - Fortis Hospital",
                      time: "40 min"
                    }
                  ].map((job, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/e386/4ceb/d276e1bb73a49b85b896b4242d574553?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GjIk2QIuXnZWe~tlBPqFUQeKqB1C7qcmzHaa~EN6548SNtAswz1Jt9B7O3-3Xz63WbsT4oL5gT9CnMhZgGcdFkCmHT2dkqdLRUFGT1yAUritz75ODlR0aXO5awpYJrjwZTdELH3ZUhbmd7ZB4ceS0ApzZrGuHjYAnKxzpjx1I0ojd7Qab6nYQrOLylP6YrQ-T9S3VlPT3qOSnI42-d8NHG8Bs5XkUNPYn4xG7XN63El8PqWQrMxuHtbnMcwz2jU3wO5ftMfJII5Oey8ezQyHgQFx5K3lmzjEOApa8RHQJRbAMizoNjW271Hm-e0Qwm9l72PI~TfzAgD8MF~9JEujNQ__"
                        alt={job.title}
                        className="w-12 h-12 rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{job.title}</h4>
                        <p className="text-sm text-gray-500">{job.location}</p>
                      </div>
                      <span className="text-sm text-gray-400">{job.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Events */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-semibold">Events</h3>
                <button className="text-cyan-500 hover:text-cyan-600">View all</button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-4">97 events this week</p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Pharma-SOS Indian Conference",
                      location: "IIT Grand Chain, Odisha",
                      time: "Tue, Sep 24 • 9:30 AM",
                      participants: "21 participants"
                    },
                    {
                      title: "Vaccines World Summit 2025",
                      location: "Ballroom Bn, Pune",
                      time: "Tue, Jan 21 • 9:00 AM",
                      participants: "7 participants"
                    }
                  ].map((event, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/a687/66a6/fa72e157f061e58983f82f708ac4707d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UWmR~JwVcLLHh1IcjoI98Ku3eaX2wV2VwYd320KJ1e5IZ~PurJQElbdEPtWUg4KWATAikx5htuFq2s0cyKJcE-LSko31dCPkFc47CsEI0ORyY3rq6zhLkwy~6tPvcvHVgTZE1-852I1nIeFxqBs7nr11u5qUDGAQgbb51RZlwaTWlh-2cS9~lbFFPWVqS7mmBW2KK6IOVanLcqTfDcrj044Nann0-Ld~gAFhsozuh1czIMTuwFZO3ux~RpNzNkOh9udHLZAqv4K6mz6LcAclK4-F2epkIHkjN0X03~7iTu7NEN2CM7aTqDXTRmUdJS~DMRDMkZ-b9a9K1YI~y5KqHA__"
                        alt={event.title}
                        className="w-12 h-12 rounded"
                      />
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-gray-500">{event.location}</p>
                        <p className="text-sm text-gray-400">{event.time}</p>
                        <p className="text-sm text-gray-400">{event.participants}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

