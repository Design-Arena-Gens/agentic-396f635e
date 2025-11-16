'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Phone, Calendar, GraduationCap, Briefcase, MapPin, Save, ArrowLeft, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ProfilePage() {
  const [saved, setSaved] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    age: '',
    education: '',
    experience: '',
    location: '',
    category: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
    // Store in localStorage for AI matching
    localStorage.setItem('userProfile', JSON.stringify(formData))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => {
      const updated = { ...prev, [name]: value }

      // Auto-calculate age from DOB
      if (name === 'dateOfBirth' && value) {
        const today = new Date()
        const birthDate = new Date(value)
        let age = today.getFullYear() - birthDate.getFullYear()
        const monthDiff = today.getMonth() - birthDate.getMonth()
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--
        }
        updated.age = age.toString()
      }

      return updated
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white shadow-lg"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              My Profile
            </h1>
            <Link href="/jobs" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              Browse Jobs
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <User className="w-12 h-12" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Create Your Profile</h2>
                <p className="text-blue-100">Help AI match you with the perfect government job</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Age
                    </label>
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      readOnly
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-700"
                      placeholder="Auto-calculated"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                        placeholder="City, State"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Educational Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                  </div>
                  Educational Background
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Highest Education *
                    </label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 appearance-none bg-white"
                      >
                        <option value="">Select education level</option>
                        <option value="10th">10th Pass</option>
                        <option value="12th">12th Pass</option>
                        <option value="Diploma">Diploma</option>
                        <option value="ITI">ITI</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Post Graduate">Post Graduate</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="MBBS">MBBS</option>
                        <option value="PhD">PhD</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Experience Level *
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 appearance-none bg-white"
                      >
                        <option value="">Select experience</option>
                        <option value="Fresher">Fresher</option>
                        <option value="0-2 years">0-2 years</option>
                        <option value="2-5 years">2-5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Preferences */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Briefcase className="w-5 h-5 text-green-600" />
                  </div>
                  Job Preferences
                </h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Job Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 appearance-none bg-white"
                  >
                    <option value="">Select preferred category</option>
                    <option value="Central Government">Central Government</option>
                    <option value="Railways">Railways</option>
                    <option value="Banking">Banking</option>
                    <option value="Defence">Defence</option>
                    <option value="Medical">Medical</option>
                    <option value="Teaching">Teaching</option>
                    <option value="Police">Police</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
            >
              {saved ? (
                <>
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Profile Saved Successfully!
                </>
              ) : (
                <>
                  <Save className="w-6 h-6 mr-2" />
                  Save Profile & Get Matched
                </>
              )}
            </motion.button>

            {saved && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-xl"
              >
                <p className="text-green-800 text-center font-semibold">
                  🎉 Your profile has been saved! You can now browse personalized job recommendations.
                </p>
                <Link
                  href="/jobs"
                  className="block mt-3 text-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  View Recommended Jobs →
                </Link>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* AI Matching Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-3">🤖 AI-Powered Job Matching</h3>
          <p className="text-blue-50 mb-4">
            Our intelligent algorithm analyzes your profile to match you with government jobs that fit your:
          </p>
          <ul className="space-y-2 text-blue-50">
            <li>✓ Age eligibility criteria</li>
            <li>✓ Educational qualifications</li>
            <li>✓ Work experience level</li>
            <li>✓ Location and job preferences</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
