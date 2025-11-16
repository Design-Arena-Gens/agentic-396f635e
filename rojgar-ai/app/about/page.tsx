'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Phone, Sparkles, Target, Users, Heart, Award } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              About Rojgar AI
            </h1>
            <Link href="/jobs" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
              Browse Jobs
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full mb-6">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Rojgar AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing government job search with artificial intelligence to help millions of aspirants find their dream career
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To democratize access to government job opportunities by leveraging AI technology,
              making it easier for every eligible candidate to discover, apply, and succeed in their
              dream government job without barriers.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become India's most trusted and comprehensive platform for government job seekers,
              empowering millions with intelligent job matching, personalized guidance, and seamless
              application processes.
            </p>
          </motion.div>
        </div>

        {/* Story */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 mb-16 text-white"
        >
          <h3 className="text-3xl font-bold mb-6">Our Story</h3>
          <div className="space-y-4 text-blue-50 leading-relaxed text-lg">
            <p>
              Rojgar AI was founded with a simple yet powerful vision: to bridge the gap between
              government job aspirants and opportunities using cutting-edge artificial intelligence.
            </p>
            <p>
              We understand the challenges faced by millions of job seekers who spend countless hours
              searching through multiple websites, missing deadlines, and applying for positions they're
              not eligible for. That's why we created an intelligent platform that does the heavy lifting for you.
            </p>
            <p>
              Our AI-powered matching algorithm analyzes your profile—age, education, experience, and
              preferences—to recommend the most suitable government jobs. We provide step-by-step guidance
              through the entire application process, ensuring you never miss an opportunity.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'User-Centric',
                description: 'Every feature is designed with our users\' success in mind',
                color: 'red',
              },
              {
                icon: Users,
                title: 'Accessibility',
                description: 'Making government jobs accessible to everyone, everywhere',
                color: 'green',
              },
              {
                icon: Sparkles,
                title: 'Innovation',
                description: 'Constantly evolving with the latest AI technology',
                color: 'yellow',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-${value.color}-100 rounded-xl mb-6`}>
                  <value.icon className={`w-7 h-7 text-${value.color}-600`} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16"
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-cyan-600 p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Ravi Kr. Singh</h4>
                <p className="text-blue-100 font-semibold">CEO & Founder</p>
              </div>
            </div>
            <div className="md:w-2/3 p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Our Founder</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ravi Kr. Singh is a visionary entrepreneur passionate about leveraging technology
                to solve real-world problems. With a deep understanding of the challenges faced by
                government job aspirants, Ravi founded Rojgar AI to create a platform that truly
                makes a difference in people's lives.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                His vision is to empower every eligible candidate with the tools and information
                they need to secure their dream government job, removing barriers and simplifying
                the entire process through intelligent automation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 mr-3 text-blue-600" />
                  <span className="font-semibold">+91-7255947629</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <span className="font-semibold">theutkrishti@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10,000+', label: 'Active Jobs' },
              { value: '50,000+', label: 'Registered Users' },
              { value: '98%', label: 'Success Rate' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of successful candidates who found their dream government jobs
          </p>
          <Link
            href="/jobs"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Explore Jobs Now
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

function User({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  )
}
