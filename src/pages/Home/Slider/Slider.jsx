import React from "react";

const Slider = () => {
  return (
    <>
      <div className="my-container">
        <div className="w-full carousel">
          <div id="slide1" className="relative w-full carousel-item">
            <div className="w-full">
              <div className="absolute text-white hidden lg:block mx-auto left-[10%] top-[25%] z-10">
                <h1 className="w-2/5 text-5xl font-medium leading-normal">
                  Taking yoga Beyond The Limit Reach Your New Potential
                </h1>
                <p className="hidden w-2/5 mt-4 xl:block">
                  Yoga is actually exercise of body and mind. The benefits of
                  yoga not only help the body become fresher and fitter, but
                  also control stress.
                </p>
              </div>
              <div className="relative w-full">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-neutral-900 to-transparent"></div>
                <img
                  src="https://i.ibb.co/n8hZ0Lc/pexels-pixabay-37351.jpg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="arrow-btn">
                ❮
              </a>
              <a href="#slide2" className="arrow-btn">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="relative w-full carousel-item">
            <div className="w-full">
              <div className="absolute text-white hidden lg:block mx-auto left-[10%] top-[25%] z-10">
                <h1 className="w-2/5 text-5xl font-medium leading-normal">
                  Taking Yoga to the Next Level: Unlock Your Potential
                </h1>
                <p className="hidden w-2/5 mt-4 xl:block">
                  Elevate your yoga practice and discover new heights of
                  physical and mental well-being. Experience the transformative
                  benefits of yoga and unleash your true potential.
                </p>
              </div>
              <div className="relative w-full">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-neutral-900 to-transparent"></div>
                <img
                  src="https://i.ibb.co/d58qzbY/girl-g6cfac0fe3-1280.jpg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="arrow-btn">
                ❮
              </a>
              <a href="#slide3" className="arrow-btn">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="relative w-full carousel-item">
            <div className="w-full">
              <div className="absolute text-white hidden lg:block mx-auto left-[10%] top-[25%] z-10">
                <h1 className="w-2/5 text-5xl font-medium leading-normal">
                  Embrace the Power of Yoga: Harness Inner Strength
                </h1>
                <p className="hidden w-2/5 mt-4 xl:block">
                  Yoga is not just about physical exercise; it's a journey of
                  self-discovery and empowerment. Cultivate strength, balance,
                  and resilience both on and off the mat, and embrace your
                  innate power.
                </p>
              </div>
              <div className="relative w-full">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-neutral-900 to-transparent"></div>
                <img
                  src="https://i.ibb.co/ygv8WWr/yoga-g71b7217b2-1280.jpg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>

            <div className="absolute z-30 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="arrow-btn">
                ❮
              </a>
              <a href="#slide4" className="z-20 arrow-btn">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="relative w-full carousel-item">
            <div className="w-full">
              <div className="absolute text-white hidden lg:block mx-auto left-[10%] top-[25%] z-10">
                <h1 className="w-2/5 text-5xl font-medium leading-normal">
                  Yoga for Mind and Body Harmony: Find Inner Peace
                </h1>
                <p className="hidden w-2/5 mt-4 xl:block">
                  Discover the harmony between your mind and body through the
                  practice of yoga. Cultivate mindfulness, reduce stress, and
                  experience a deep sense of inner peace and tranquility.
                </p>
              </div>
              <div className="relative w-full">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-neutral-900 to-transparent"></div>
                <img
                  src="https://i.ibb.co/dQnxNxj/woman-gc6a4903ad-1280.jpg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
            <div className="absolute z-20 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="arrow-btn">
                ❮
              </a>
              <a href="#slide5" className="arrow-btn">
                ❯
              </a>
            </div>
          </div>

          <div id="slide5" className="relative w-full carousel-item">
            <div className="w-full">
              <div className="absolute text-white hidden lg:block mx-auto left-[10%] top-[25%] z-10">
                <h1 className="w-2/5 text-5xl font-medium leading-normal">
                  Elevate Your Yoga Journey: Embrace Transformation
                </h1>
                <p className="hidden w-2/5 mt-4 xl:block">
                  Embark on a transformative yoga journey that goes beyond
                  physical exercise. Explore the profound connection between
                  body, mind, and spirit, and embrace personal growth, healing,
                  and self-discovery.
                </p>
              </div>
              <div className="relative w-full">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-neutral-900 to-transparent"></div>
                <img
                  src="https://i.ibb.co/7r42BJD/yoga-g14c5a26b9-1280.jpg"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
            <div className="absolute z-20 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="arrow-btn">
                ❮
              </a>
              <a href="#slide1" className="arrow-btn">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
