import React from 'react'

const About = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      title: "Lead Dentist",
      description:
        "With 15 years of experience, Dr. Johnson specializes in cosmetic dentistry and oral surgery.",
      image: "https://i.pinimg.com/736x/7e/91/b7/7e91b721691322422919eec7dc039618.jpg", // Replace with actual image URL
      titleColor: "text-blue-600",
    },
    {
      name: "Dr. Michael Chen",
      title: "Orthodontist",
      description:
        "Dr. Chen is an expert in traditional braces and Invisalign treatments.",
      image: "https://t4.ftcdn.net/jpg/03/20/74/45/360_F_320744517_TaGkT7aRlqqWdfGUuzRKDABtFEoN5CiO.jpg", // Replace with actual image URL
      titleColor: "text-blue-600",
    },
    {
      name: "Dr. Emily Martinez",
      title: "Pediatric Dentist",
      description:
        "Specialized in making dental visits comfortable and fun for our youngest patients.",
      image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg", // Replace with actual image URL
      titleColor: "text-blue-600",
    },
  ];
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-blue-50 flex items-center justify-center py-10 px-10">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-6xl md:text-5xl font-bold text-gray-900">
              Welcome to Dream Smile Dental
            </h1>
            <p className="text-2xl text-gray-600 mt-4">
              Providing exceptional dental care with a gentle touch for over 20
              years. Your smile is our priority.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://png.pngtree.com/png-vector/20241210/ourmid/pngtree-close-up-of-a-wide-smile-with-perfect-teeth-png-image_14654476.png"
              alt="Dental Teeth"
              className="w-80 md:w-96"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="w-full flex flex-col items-center text-center py-20 px-8">
        <h2 className="text-5xl font-bold text-gray-900">Our Mission</h2>
        <p className="text-2xl text-gray-600 mt-4 max-w-3xl">
          At Bright Smile Dental, we are committed to providing comprehensive
          dental care in a comfortable and welcoming environment. Our team of
          experienced professionals uses the latest technology to ensure the
          best possible care for your dental health.
        </p>
      </section>

      {/* Meet Our Team Section */}
      <div className="flex flex-col bg-zinc-200 items-center w-full py-16 px-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-zinc-100 rounded-4xl p-6 text-center"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-cover rounded-2xl"
              />
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                {doctor.name}
              </h3>
              <p className={`font-medium ${doctor.titleColor}`}>
                {doctor.title}
              </p>
              <p className="text-gray-600 mt-2">{doctor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
