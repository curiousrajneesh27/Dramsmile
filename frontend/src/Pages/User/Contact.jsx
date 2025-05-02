import React, { useState } from 'react'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    issue: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <div className="grid md:grid-cols-2 min-h-screen">
      {/* Left Section */}
      <div
        className="relative bg-cover bg-center p-8 flex flex-col justify-between"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1482440308425-276ad0f28b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Social Media Section */}
        <div className="mt-auto flex flex-col items-start gap-2">
          {/* Paragraph JUST ABOVE Icons */}
          <p className="text-white text-lg">Follow us on</p>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <BsTwitter className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <BsLinkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <BsFacebook className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">GET IN TOUCH</h1>
          <p className="text-gray-600 mb-8">24/7 We will answer your questions and problems</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />

            <textarea
              placeholder="Describe your issue"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 resize-none"
              value={formData.issue}
              onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
