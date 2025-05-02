import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { RiToothFill } from 'react-icons/ri';
import { IoMdClose, IoMdPhonePortrait } from "react-icons/io";
import { fetchMyModels, datetime } from '../../../lib/call';
import { urlFor } from '../../../lib/imageBuilder';


function SpecialOffers({ closePopup }) {

  const [models, setModels] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMyModels();
      setModels(data);
    };

    const getdatetime = async () => {
      const data = await datetime();
      console.log(data);
      setDate(data);
    };

    getData();
    getdatetime();
    }, []);

  useEffect(() => {
    // Get the Lenis instance
    const lenis = window.lenis;

    if (lenis) {
      // Stop Lenis scrolling when popup is opened
      lenis.stop();
    }

    return () => {
      // Re-enable Lenis scrolling when popup is closed
      if (lenis) {
        lenis.start();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" data-lenis-prevent>
      {/* Overlay */}
      <div className="fixed inset-0 bg-[#FFA500]" />

      {/* Content Container */}
      <div className="relative min-h-screen">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="fixed right-6 top-6 z-50 text-white hover:text-white/80 p-2"
        >
          <span className='text-4xl bg-black rounded-full h-20 w-20 cursor-pointer flex items-center justify-center'><IoMdClose /></span>
        </button>

        <div className="px-40 mx-auto p-6">
          {/* Header Section */}
          <div className="pt-16 space-y-2 text-white mb-12 text-center md:text-left">
            <h1 className="text-6xl font-medium">Weekly Special Offers</h1>
            <p className="text-white/90 w-[50vw] text-sm sm:text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur. In quis enim sit tortor dignissim quis eget elementum. Urna at a ac facilisi. Quisque ut molestie facilisis id rutrum orci ipsum.
            </p>
          </div>

          {/* Date & Timings Section */}
          <div className="space-y-6 text-white mb-12">
            <h2 className="text-4xl font-medium">Date & Timings</h2>
            <div className="flex flex-wrap gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4 border border-white/30">
                <span className="text-2xl" >Start Date - {date.length > 0 && date[0].startdate.split("T")[0]}                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4 border border-white/30">
                <span className="text-2xl">End Date - {date.length > 0 && date[0].enddate.split("T")[0]}                </span>
              </div>
            </div>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
            {models.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden">
                <div className="h-64 p-5">
                  {item.image && (
            <img
              src={urlFor(item.image).url()}
              alt={item.title}
              className="object-cover w-full rounded-2xl h-full"
            />
          )}
                </div>
                <div className="px-6 pb-6">
                  <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
                  <div className="flex gap-2 mb-4">
                    {item.tags.length>0 && item.tags.map((tag, idx) => (
                      <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">{item.validDate}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <button className="w-full cursor-pointer bg-black text-white py-3 rounded-lg mt-6 hover:bg-black/90 transition-colors">
                    Book An Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


const Home = () => {
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Refs for horizontal scrolling
  const reviewsRef = useRef(null);
  const servicesRef = useRef(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? 'hidden' : 'unset';
  }, [isPopupOpen]);
  return (
    <div className="relative">
      {/* Full-page background video */}
      <video
        src="./video.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover fixed top-0 left-0 -z-10 opacity-10"
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen bg-transparent">
        {location.pathname === '/' && (
          <>
            {/* Hero Section */}
            <div className="relative bg-transparent h-[90vh] w-full">
              <div className="z-30 bg-transparent relative h-full w-full flex items-center">
                <div className="h-full bg-transparent flex flex-col justify-center w-1/2 px-20">
                  <h1 className="text-7xl tracking-tighter leading-none font-bold gilroy mb-6">
                    Comprehensive Dental Service
                  </h1>
                  <p className="text-gray-600 mb-8 text-xl">
                    Lorem ipsum dolor sit amet consectetur. Proin sed tristique felis cursus id. Mortem
                    felis eu ac ornare. Sed ac sed ornar
                  </p>
                  <div>
                    <button className="border-2 inline-block px-8 py-2 rounded-full cursor-pointer text-lg">
                      Book An Appointment
                    </button>
                  </div>
                </div>
                <div className="h-full w-1/2">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1606811856475-5e6fcdc6e509?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Special Offers Section */}
            <div className="bg-[#FF9500] py-16">
              <div className="container mx-auto px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="pl-4">
                    <h2 className="text-5xl font-bold text-white mb-4">Weekly Special Offers</h2>
                    <p className="text-white text-lg mb-8">
                      Get amazing discounts on our dental services every week. Don't miss out on these exclusive deals!
                    </p>
                    <button
                      className="bg-white text-black px-6 py-3 cursor-pointer rounded-full hover:bg-gray-100 text-lg font-medium"
                      onClick={openPopup}
                    >
                      Checkout Special Offers
                    </button>
                  </div>
                  <div className="flex justify-center items-center space-x-6">
                    <div className="w-48 h-48 flex items-center justify-center">
                      <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/016/326/827/small/3d-dental-teeth-isolated-on-transparent-background-free-png.png"
                        alt="Sad Tooth"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <div className="w-48 h-48 flex items-center justify-center">
                      <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/016/326/827/small/3d-dental-teeth-isolated-on-transparent-background-free-png.png"
                        alt="Happy Tooth"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Render the SpecialOffers popup when open */}
            {isPopupOpen && <SpecialOffers closePopup={closePopup} />}

            {/* Dr. Goodman Section */}
            <div className="container px-20 py-20">
              <div className="flex flex-col md:flex-row items-center gap-20">
                <div className="flex">
                  {/* Left Stats Section */}
                  <div className="flex flex-col justify-between gap-4 w-60">
                    <div className="bg-zinc-300 h-48 w-56 flex px-8 justify-center flex-col rounded-[2.5vw]">
                      <div className="text-7xl font-black tracking-tighter leading-tight">25</div>
                      <div className="text-xl text-black-800 tracking-tighter font-light leading-none opacity-90 w-20">
                        Years of Experience
                      </div>
                    </div>
                    <div className="bg-zinc-300 h-48 w-56 flex px-8 justify-center flex-col rounded-[2.5vw]">
                      <div className="text-6xl font-black tracking-tighter leading-tight">+50K</div>
                      <div className="text-xl text-black-800 tracking-tighter font-light leading-none mt-2 w-1 opacity-90">
                        Satisfied Patients
                      </div>
                    </div>
                  </div>

                  {/* Center Image Section */}
                  <div className="flex justify-center w-96">
                    <img
                      src="https://img.freepik.com/free-photo/smiling-young-man-sitting-dentist-chair-while-doctor-examining-his-teeth_158595-7733.jpg"
                      alt="Special Offer"
                      className="rounded-4xl w-full h-[400px] object-cover border border-gray-300"
                    />
                  </div>
                </div>

                {/* Right Content Section */}
                <div className="flex flex-col justify-center space-y-8 md:w-5/12">
                  <h1 className="text-7xl tracking-tighter font-bold">Dr. Goodman</h1>
                  <p className="text-xl text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ea quo autem, facere asperiores blanditiis
                    ex voluptates deleniti inventore temporibus molestiae veritatis soluta?
                  </p>
                  <div>
                    <button className="bg-black font-medium cursor-pointer text-white inline-block px-10 py-2 rounded-xl hover:bg-gray-800">
                      Book an Appointment
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. Integer in vitae volutpat est cursus pulvinar arcu id diam. Risus mus nullam eget vulputate congue mattis tortor turpis. Tellus sapien tempor in malesuada augue semper fermentum rhoncus tellus. Cursus convallis adipiscing sed a.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="container mx-auto px-20 py-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-6xl font-bold">What we are offering today</h2>
                <div className="flex space-x-2">
                  <button
                    className="p-4 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200"
                    onClick={() => scrollLeft(servicesRef)}
                  >
                    <MdChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="p-4 cursor-pointer rounded-full bg-black text-white hover:bg-gray-200"
                    onClick={() => scrollRight(servicesRef)}
                  >
                    <MdChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="flex overflow-x-auto gap-6 pb-6 hide-scroller" ref={servicesRef}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="flex-none w-80 bg-gray-100 p-6 rounded-xl aspect-square border border-gray-300 shadow-sm"
                  >
                    <div className="w-16 h-16 bg-white rounded-full mb-4"></div>
                    <h3 className="text-xl font-medium mb-2">Dental Service {item}</h3>
                    <p className="text-gray-600">
                    Quick oral health evaluation with expert advice.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why People Love Section */}
            <div className="container mx-auto px-20 py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <h1 className="text-6xl font-bold mb-8">Why People love Goodartho</h1>
                  <p className="text-gray-700 text-xl leading-relaxed mb-8">
                    Lorem ipsum dolor sit amet consectetur. Mauris ipsum felis ut at vulputate vel. Vitae rhoncus eget vel nisi suscipit. Tempor sed porttitor hendrerit non. Cras proin sit metus tincidunt ultricies.
                  </p>
                  <button className="bg-black text-white px-8 py-4 text-lg rounded-full hover:bg-gray-800 transition">
                    See more reviews
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-6 items-start">
                  {[1, 2].map((item) => (
                    <div
                      key={item}
                      className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg border border-gray-400"
                    >
                      <img
                        src="https://media.gettyimages.com/id/1728127780/video/home-care-healthcare-professional-hugging-senior-patient.jpg?s=640x640&k=20&c=dC93hvWEY5_a5czg1oBEl9HGuV4RgKBNAs99i1nO40Q="
                        alt={`Patient Testimonial ${item}`}
                        className="w-full h-[450px] object-cover"
                      />
                      <div className="absolute bottom-4 left-4 bg-white px-6 py-2 rounded-full shadow-md">
                        <span className="text-lg font-medium text-gray-800">Emily W.</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Comfortable Treatment Section */}
            <div className="container mx-auto px-20 py-16">
              <h1 className="text-6xl font-bold text-center mb-16">Comfortable treatment for you</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="bg-white p-8 rounded-3xl shadow-lg text-center border border-gray-400"
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <RiToothFill className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-medium mb-4">Dental Services</h3>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="container mx-auto px-20 py-16">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-6xl font-bold">1800+ Reviews</h1>
                <div className="flex space-x-2">
                  <button
                    className="p-4 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200"
                    onClick={() => scrollLeft(reviewsRef)}
                  >
                    <MdChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="p-4 cursor-pointer rounded-full bg-black text-white"
                    onClick={() => scrollRight(reviewsRef)}
                  >
                    <MdChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="flex overflow-x-auto hide-scroller gap-6 pb-6 scrollbar-hide" ref={reviewsRef}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="flex-none w-80 bg-[#F1FFE7] p-6 rounded-2xl border border-gray-300 shadow-md"
                  >
                    <div className="bg-[#FF9500] text-white text-sm px-4 py-1 rounded-full w-fit mb-4">
                      Delivery
                    </div>
                    <h3 className="font-medium mb-2">Lorem ipsum dolor sit amet consectetur.</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam.
                    </p>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who We Help Section */}
            <div className="bg-zinc-200 py-16">
              <div className="container mx-auto px-20">
                <h2 className="text-6xl font-bold text-center mb-16">Who we help?</h2>
                <div className="flex items-center justify-center gap-20">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="bg-white w-72 p-6 rounded-3xl border border-gray-300 flex flex-col items-center justify-center"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=500"
                        alt="Patient"
                        className="w-full h-48 object-cover rounded-2xl mb-4"
                      />
                      <h3 className="text-2xl font-medium mb-2">Kids</h3>
                      <p className="text-gray-600 text-center text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quisquam.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Services Section */}
            <div className="container mx-auto px-20 py-16">
              <h2 className="text-7xl font-bold mb-8">Our services</h2>
              <p className="text-gray-600 mb-12 max-w-3xl text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sed et dolor aliquid dolores dignissimos vitae vel aut dolorem. Voluptas ex vel magni fugiat dolores maxime labore a id officiis dolorem maxime.
              </p>
              <div className="space-y-1">
                {['Dental fillings', 'Teeth whitening', 'Oral surgery', 'Dental implants'].map((service) => (
                  <div key={service} className="border-b border-gray-200 py-8">
                    <h3 className="text-2xl font-medium">{service}</h3>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home
