import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigate, useNavigate } from "react-router";

function CertificatesSec() {
  const certificateImages = [
    "/docs/certificates/diesel_locoshed.jpg",
    "/docs/certificates/Fuel_Training.jpg",
    "/docs/certificates/hydralics.jpg",
    "/docs/certificates/Pnematics.jpg",
    "/docs/certificates/nptel.jpg",
    "/docs/certificates/icpc.jpg",
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  return (
    <section id="certificates" className="scroll-mt-12 py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">My Certificates</h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Custom navigation buttons */}
        <button
          ref={prevRef}
          className="absolute top-1/2 -left-5 z-10 text-3xl text-gray-700 hover:text-blue-600 transform -translate-y-1/2"
        >
          <img src="/icons/lessthan.png" alt="previous" className="w-12 h-12" />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 -right-5 z-10 text-3xl text-gray-700 hover:text-blue-600 transform -translate-y-1/2"
        >
          <img src="/icons/greaterthan.png" alt="next" className="w-12 h-12" />
        </button>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="relative rounded-lg pb-14"
        >
          {certificateImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  className="rounded-lg h-96 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* See All Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/certificates")}
            className="inline-flex items-center text-blue-600 text-lg font-medium hover:underline transition"
          >
            See All Projects
            <img
              src="/icons/diagonal-arrow.png"
              alt="Arrow Right"
              className="ml-2 w-4 h-4"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CertificatesSec;
