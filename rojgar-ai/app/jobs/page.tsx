'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Briefcase, MapPin, Calendar, DollarSign, GraduationCap, Clock, ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Job {
  id: number
  title: string
  organization: string
  location: string
  salary: string
  lastDate: string
  education: string
  experience: string
  category: string
  description: string
  eligibility: {
    minAge: number
    maxAge: number
    education: string[]
    experience: string
  }
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Staff Selection Commission (SSC) Combined Graduate Level',
    organization: 'SSC',
    location: 'All India',
    salary: '₹44,900 - ₹1,42,400',
    lastDate: '2024-12-30',
    education: 'Graduate',
    experience: 'Fresher',
    category: 'Central Government',
    description: 'SSC CGL exam for various Group B and C posts in ministries, departments and organizations.',
    eligibility: {
      minAge: 18,
      maxAge: 32,
      education: ['Graduate', 'Post Graduate'],
      experience: 'Fresher to 5 years'
    }
  },
  {
    id: 2,
    title: 'Railway Recruitment Board - NTPC',
    organization: 'RRB',
    location: 'Various Zones',
    salary: '₹35,400 - ₹1,12,400',
    lastDate: '2024-12-25',
    education: 'Graduate',
    experience: 'Fresher',
    category: 'Railways',
    description: 'Non-Technical Popular Categories recruitment for various technical and non-technical posts.',
    eligibility: {
      minAge: 18,
      maxAge: 33,
      education: ['Graduate', 'Diploma'],
      experience: 'Fresher'
    }
  },
  {
    id: 3,
    title: 'IBPS PO - Probationary Officer',
    organization: 'IBPS',
    location: 'Pan India',
    salary: '₹50,000 - ₹90,000',
    lastDate: '2024-12-20',
    education: 'Graduate',
    experience: 'Fresher',
    category: 'Banking',
    description: 'Recruitment for Probationary Officers in public sector banks across India.',
    eligibility: {
      minAge: 20,
      maxAge: 30,
      education: ['Graduate', 'Post Graduate'],
      experience: 'Fresher'
    }
  },
  {
    id: 4,
    title: 'UPSC Civil Services Examination',
    organization: 'UPSC',
    location: 'All India',
    salary: '₹56,100 - ₹2,50,000',
    lastDate: '2024-12-15',
    education: 'Graduate',
    experience: 'Fresher',
    category: 'Central Government',
    description: 'Premier examination for recruitment to IAS, IPS, IFS and other civil services.',
    eligibility: {
      minAge: 21,
      maxAge: 32,
      education: ['Graduate', 'Post Graduate'],
      experience: 'Fresher'
    }
  },
  {
    id: 5,
    title: 'State Bank of India - Clerk',
    organization: 'SBI',
    location: 'Multiple Cities',
    salary: '₹17,900 - ₹47,920',
    lastDate: '2024-12-28',
    education: 'Graduate',
    experience: 'Fresher',
    category: 'Banking',
    description: 'Junior Associate (Customer Support & Sales) in State Bank of India.',
    eligibility: {
      minAge: 20,
      maxAge: 28,
      education: ['Graduate'],
      experience: 'Fresher'
    }
  },
  {
    id: 6,
    title: 'Defence Research and Development Organisation - Scientist',
    organization: 'DRDO',
    location: 'Multiple Locations',
    salary: '₹56,100 - ₹1,77,500',
    lastDate: '2024-12-22',
    education: 'B.Tech/M.Tech',
    experience: '0-3 years',
    category: 'Defence',
    description: 'Scientist positions in various DRDO laboratories across India.',
    eligibility: {
      minAge: 21,
      maxAge: 35,
      education: ['B.Tech', 'M.Tech', 'PhD'],
      experience: 'Fresher to 3 years'
    }
  },
  {
    id: 7,
    title: 'Indian Air Force - Group X & Y Technical',
    organization: 'IAF',
    location: 'All India',
    salary: '₹30,000 - ₹92,000',
    lastDate: '2024-12-18',
    education: '12th/Diploma',
    experience: 'Fresher',
    category: 'Defence',
    description: 'Airmen recruitment for technical trades in Indian Air Force.',
    eligibility: {
      minAge: 17,
      maxAge: 21,
      education: ['12th', 'Diploma', 'ITI'],
      experience: 'Fresher'
    }
  },
  {
    id: 8,
    title: 'National Eligibility cum Entrance Test - PG',
    organization: 'NTA',
    location: 'All India',
    salary: 'Varies',
    lastDate: '2024-12-10',
    education: 'MBBS',
    experience: 'Internship',
    category: 'Medical',
    description: 'Entrance exam for admission to MD/MS/PG Diploma courses.',
    eligibility: {
      minAge: 21,
      maxAge: 45,
      education: ['MBBS'],
      experience: 'Internship completed'
    }
  }
]

const categories = ['All', 'Central Government', 'Railways', 'Banking', 'Defence', 'Medical']

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white shadow-lg sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Job Listings
            </h1>
            <Link href="/profile" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              My Profile
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs by title, organization, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-500 shadow-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 text-gray-600"
        >
          Showing <span className="font-semibold text-blue-600">{filteredJobs.length}</span> jobs
        </motion.div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => setSelectedJob(job)}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {job.title}
                    </h3>
                    <p className="text-blue-600 font-semibold">{job.organization}</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{job.education}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{job.experience}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-red-500" />
                    <span className="text-gray-600">Last Date: </span>
                    <span className="ml-1 font-semibold text-gray-900">
                      {new Date(job.lastDate).toLocaleDateString('en-IN')}
                    </span>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {job.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No jobs found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedJob(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-3xl">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="float-right text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  ✕
                </button>
                <h2 className="text-2xl font-bold mb-2 pr-8">{selectedJob.title}</h2>
                <p className="text-blue-100">{selectedJob.organization}</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <MapPin className="w-5 h-5 text-blue-600 mb-2" />
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold text-gray-900">{selectedJob.location}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <DollarSign className="w-5 h-5 text-green-600 mb-2" />
                    <p className="text-sm text-gray-600">Salary</p>
                    <p className="font-semibold text-gray-900">{selectedJob.salary}</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <GraduationCap className="w-5 h-5 text-purple-600 mb-2" />
                    <p className="text-sm text-gray-600">Education</p>
                    <p className="font-semibold text-gray-900">{selectedJob.education}</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4">
                    <Calendar className="w-5 h-5 text-orange-600 mb-2" />
                    <p className="text-sm text-gray-600">Last Date</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(selectedJob.lastDate).toLocaleDateString('en-IN')}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Eligibility Criteria</h3>
                  <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">Age Limit:</span> {selectedJob.eligibility.minAge} - {selectedJob.eligibility.maxAge} years
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Education:</span> {selectedJob.eligibility.education.join(', ')}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Experience:</span> {selectedJob.eligibility.experience}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href={`/apply/${selectedJob.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-center"
                  >
                    Apply Now
                  </Link>
                  <button className="px-6 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                    Save Job
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
