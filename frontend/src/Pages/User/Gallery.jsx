import React, { useState } from 'react'

const Gallery = () => {
  const images = [
    { id: 1, category: "Procedure", src: "https://img.freepik.com/free-photo/young-female-patient-visiting-dentist-office_496169-930.jpg", title: "Advanced Dental Procedures", description: "State-of-the-art procedures with the latest technology." },
    { id: 2, category: "Procedure", src: "https://t4.ftcdn.net/jpg/02/64/39/59/360_F_264395936_2b6Xux9G1axkBix9qE6RlMaalbEuDXl6.jpg", title: "Cosmetic Dentistry", description: "Enhancing your smile with expert care." },
    { id: 3, category: "Procedure", src: "https://media.istockphoto.com/id/1431507620/photo/happy-senior-man-having-dental-treatment-at-dentists-office.jpg?s=612x612&w=0&k=20&c=M2s02hL399gXYEUuu7Vv9GnOTAuFvzY9FKk3mu_N7kA=", title: "Root Canal Treatment", description: "Pain-free solutions for infected teeth." },
    { id: 4, category: "Office", src: "https://t3.ftcdn.net/jpg/06/27/17/48/360_F_627174870_OHypE9s0QFswSpnjO7k52WEKAtsoowzp.jpg", title: "Our Modern Clinic", description: "A comfortable and hygienic environment." },
    { id: 5, category: "Office", src: "https://c1.wallpaperflare.com/preview/959/62/565/office-dentist.jpg", title: "Professional Team", description: "Dedicated experts for your dental needs." },
    { id: 6, category: "Office", src: "https://png.pngtree.com/background/20230516/original/pngtree-dental-office-with-chairs-and-equipment-picture-image_2610021.jpg", title: "Advanced Equipment", description: "State-of-the-art technology for better care." },
    { id: 7, category: "BeforeAfter", src: "https://dentakay.com/wp-content/uploads/2022/04/blogs-before-and-afters-02.jpg", title: "Smile Makeover", description: "Transforming smiles with expert treatment." },
    { id: 8, category: "BeforeAfter", src: "https://ladentist.com/wp-content/uploads/2024/01/benefits-of-dental-implants-1024x574.jpg", title: "Teeth Whitening", description: "Brighter smiles with our professional whitening service." },
    { id: 9, category: "BeforeAfter", src: "https://www.shutterstock.com/image-photo/young-woman-smiling-before-after-260nw-2307503479.jpg", title: "Orthodontic Treatment", description: "Straightening teeth for a perfect smile." },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredImages = selectedCategory === "All" ? images : images.filter(img => img.category === selectedCategory);
  return (
    <div className="p-6 px-20 bg-zinc-200">
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {["All", "Procedure", "Office", "BeforeAfter"].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 cursor-pointer py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category ? "bg-blue-400 shadow-lg text-white" : "bg-zinc-100 hover:bg-zinc-50"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map(image => (
          <div
            key={image.id}
            className="p-4 rounded-2xl bg-white overflow-hidden transition-transform transform"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-48 object-cover rounded-xl hover:opacity-80 transition-all duration-300 border border-gray-200"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-800 px-2">{image.title}</h3>
            <p className="text-gray-600 px-2">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
