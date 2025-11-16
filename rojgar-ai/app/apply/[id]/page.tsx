'use client'

import { useState, use } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Upload, FileText, User, Mail, Phone, GraduationCap, Briefcase } from 'lucide-react'
import Link from 'next/link'

const steps = [
  { id: 1, name: 'Personal Details', icon: User },
  { id: 2, name: 'Education', icon: GraduationCap },
  { id: 3, name: 'Documents', icon: FileText },
  { id: 4, name: 'Review', icon: CheckCircle },
]

export default function ApplyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    category: '',
    education: '',
    university: '',
    percentage: '',
    yearOfPassing: '',
    photo: null as File | null,
    signature: null as File | null,
    resume: null as File | null,
    certificates: null as File | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, [field]: file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Application Submitted Successfully!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your application for Job ID #{id} has been received. You will receive updates via email and SMS.
          </p>
          <div className="bg-blue-50 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">What's Next?</h3>
            <ul className="space-y-3 text-left text-gray-700">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
                <span>Verify your email address by clicking the link sent to your email</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
                <span>Complete online payment of application fee (if applicable)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
                <span>Download and save your application form for future reference</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">4</span>
                <span>Check your dashboard regularly for admit card and exam updates</span>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 justify-center">
            <Link
              href="/jobs"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Browse More Jobs
            </Link>
            <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Download Application
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white shadow-lg"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/jobs" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Jobs</span>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Job Application
            </h1>
            <span className="text-gray-600 font-semibold">Job ID: #{id}</span>
          </div>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep >= step.id
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    <step.icon className="w-6 h-6" />
                  </motion.div>
                  <span
                    className={`mt-2 text-sm font-semibold ${
                      currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 transition-all duration-300 ${
                      currentStep > step.id ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6">
            <h2 className="text-2xl font-bold text-white">
              Step {currentStep}: {steps[currentStep - 1].name}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="As per official documents"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 bg-white"
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 bg-white"
                    >
                      <option value="">Select category</option>
                      <option value="General">General</option>
                      <option value="OBC">OBC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="EWS">EWS</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Education */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Highest Education *
                    </label>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 bg-white"
                    >
                      <option value="">Select education</option>
                      <option value="10th">10th Pass</option>
                      <option value="12th">12th Pass</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Post Graduate">Post Graduate</option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="M.Tech">M.Tech</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      University/Board *
                    </label>
                    <input
                      type="text"
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="Name of university/board"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Percentage/CGPA *
                    </label>
                    <input
                      type="text"
                      name="percentage"
                      value={formData.percentage}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="e.g., 75% or 8.5 CGPA"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Year of Passing *
                    </label>
                    <input
                      type="text"
                      name="yearOfPassing"
                      value={formData.yearOfPassing}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900"
                      placeholder="e.g., 2023"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Documents */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {[
                  { name: 'photo', label: 'Passport Size Photo', accept: 'image/*' },
                  { name: 'signature', label: 'Signature', accept: 'image/*' },
                  { name: 'resume', label: 'Resume/CV', accept: '.pdf,.doc,.docx' },
                  { name: 'certificates', label: 'Educational Certificates', accept: '.pdf' },
                ].map((field) => (
                  <div key={field.name} className="bg-gray-50 rounded-2xl p-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {field.label} *
                    </label>
                    <div className="flex items-center gap-4">
                      <label className="flex-1 flex items-center justify-center px-6 py-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition-colors bg-white">
                        <Upload className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-600">
                          {formData[field.name as keyof typeof formData]
                            ? (formData[field.name as keyof typeof formData] as File).name
                            : 'Click to upload'}
                        </span>
                        <input
                          type="file"
                          accept={field.accept}
                          onChange={(e) => handleFileChange(e, field.name)}
                          className="hidden"
                          required
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {field.accept.includes('image') ? 'JPG, PNG (Max 200KB)' : 'PDF, DOC (Max 2MB)'}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Review Your Application</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><span className="font-semibold">Name:</span> {formData.fullName || 'Not provided'}</p>
                    <p><span className="font-semibold">Email:</span> {formData.email || 'Not provided'}</p>
                    <p><span className="font-semibold">Phone:</span> {formData.phone || 'Not provided'}</p>
                    <p><span className="font-semibold">Date of Birth:</span> {formData.dob || 'Not provided'}</p>
                    <p><span className="font-semibold">Gender:</span> {formData.gender || 'Not provided'}</p>
                    <p><span className="font-semibold">Category:</span> {formData.category || 'Not provided'}</p>
                    <p><span className="font-semibold">Education:</span> {formData.education || 'Not provided'}</p>
                    <p><span className="font-semibold">University:</span> {formData.university || 'Not provided'}</p>
                    <p><span className="font-semibold">Percentage:</span> {formData.percentage || 'Not provided'}</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">⚠️ Important Notes</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Ensure all information is correct before submitting</li>
                    <li>• Application fee (if applicable) must be paid within 24 hours</li>
                    <li>• Keep your application number safe for future reference</li>
                    <li>• Admit card will be sent via email 7-10 days before exam</li>
                  </ul>
                </div>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" required className="w-5 h-5 text-blue-600 rounded" />
                  <span className="text-gray-700">
                    I declare that all information provided is true and correct to the best of my knowledge
                  </span>
                </label>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
              {currentStep > 1 && (
                <motion.button
                  type="button"
                  onClick={prevStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  Previous
                </motion.button>
              )}

              {currentStep < 4 ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-auto bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Next
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-auto bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Submit Application
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
