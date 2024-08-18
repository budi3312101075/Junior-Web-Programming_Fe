import React from "react";
import Navbar from "../components/navbar";
import Marquee from "react-fast-marquee";
import Footer from "../components/footer";

const LandingPage = () => {
  const cards = [
    {
      id: 1,
      img: "./icons-1.png",
      size: "sm:w-32 w-20",
      title: "Expert Instructors",
      desc: " Learn from experienced instructors with real world knowledge.",
    },
    {
      id: 2,
      img: "./icons-2.png",
      size: "sm:w-24",
      title: "Web Development",
      desc: "Learn at your own pace and your own comfort",
    },
    {
      id: 3,
      img: "./icons-3.png",
      size: "sm:w-20",
      title: "Web Development",
      desc: "Gain practical skills through live project",
    },
  ];
  return (
    <div className="font-montserrat max-h-max overflow-x-hidden">
      <Navbar />
      <div className="relative bg-tertiary">
        <video
          autoPlay
          loop
          muted
          className="w-full h-auto -mt-6 -z-50 object-cover"
        >
          <source src="./sma.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-10 ">
          <h1 className="text-white text-center xl:text-5xl text-base font-semibold tracking-wide mt-10 sm:mt-0">
            HI, WE BELIEVES THAT
            <span className="bg-gradient-to-r  from-cyan-400 via-blue-600 to-purple-500 bg-clip-text text-transparent">
              #LEARNWELL
            </span>
          </h1>
          <p className="text-white text-center lg:text-2xl font-light tracking-wide max-w-5xl lg:mt-8 lg:mb-12 text-xs my-2">
            Solution provider in the education, research and development sector,
            and innovation through education
          </p>

          <div className="text-lg flex items-center bg-transparent rounded-lg font-semibold lg:w-52 lg:h-14 p-2 border border-blue-500 hover:bg-gradient-to-r from-blue-500 to-purple-500  mb-10 sm:mb-0">
            <span className="text-center bg-gradient-to-r  w-full from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:text-white text-sm lg:text-lg">
              Start Your Journey
            </span>
          </div>
        </div>
      </div>
      {/* section 2 ke bawah agar overlap vidionya */}
      <div className="absolute 2xl:top-[720px] z-20">
        <div className="grid sm:grid-cols-2 gap-28 py-12 bg-tertiary z-10 ">
          <img
            className="w-96 mx-auto mt-16 sm:w-full sm:ml-10"
            src="./team.png"
            alt="Hero screen"
          />
          <div className="">
            <div className="flex justify-center items-center mt-14 md:mt-0">
              <h1 className="text-white text-center text-4xl font-semibold tracking-wide  ">
                Why Choose Us ?
              </h1>
              <img
                className="z-20 absolute "
                src="./circle-blue.png"
                alt="circle"
              />
            </div>
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex sm:gap-6 gap-3 mt-16 items-center w-96 sm:mx-auto px-6 sm:px-0"
              >
                <img className={card.size} src={card.img} alt="" />
                <div className="">
                  <h1 className="text-xl font-semibold text-quaternary">
                    {card.title}
                  </h1>
                  <p className="text-gray-300 font-light tracking-wide sm:text-sm text-xs">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* section ke 3*/}
        <div>
          {/* section animation */}
          <div className="bg-quaternary max-h-max pb-8">
            <h1 className="lg:text-4xl text-2xl font-semibold text-center text-black tracking-wide py-5 ">
              Our Partnership
            </h1>
            <Marquee>
              <div className="flex gap-11 items-center">
                <img className="w-40 " src="./aws.png" alt="epic-games" />
                <img className="h-40" src="./epic-games.png" alt="epic-games" />
                <img className="w-56 " src="./ibm.png" alt="epic-games" />
                <img className="w-72 " src="./redHat.png" alt="epic-games" />
                <img className="h-40" src="./epic-games.png" alt="epic-games" />
                <img
                  className="w-56 mr-11"
                  src="./kamdek.png"
                  alt="epic-games"
                />
              </div>
            </Marquee>
          </div>
          <div className="flex flex-col max-h-max py-32 -mb-24 bg-tertiary items-center justify-center ">
            <div className="-mt-24">
              <h1 className="lg:text-4xl text-2xl font-semibold text-center mb-8 text-gray-300">
                What We Can Provide ?
              </h1>
              <div className="grid lg:grid-cols-5 lg:gap-10 gap-5">
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto">
                  <img src="./card-1.png" alt="" />
                  <h1 className="text-xl font-medium text-center text-gray-300">
                    Training
                  </h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto">
                  <img src="./card-2.png" alt="" />
                  <h1 className="text-xl font-medium text-center text-gray-300">
                    Seminar
                  </h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto">
                  <img src="./card-3.png" alt="" />
                  <h1 className="text-xl font-medium text-center text-gray-300">
                    Certification
                  </h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto">
                  <img src="./card-4.png" alt="" />
                  <h1 className="text-xl font-medium text-center text-gray-300">
                    Development
                  </h1>
                </div>
                <div className="w-56 flex flex-col p-5 rounded-xl border mx-auto">
                  <img src="./card-5.png" alt="" />
                  <h1 className="text-xl font-medium text-center text-gray-300">
                    Bootcamp
                  </h1>
                </div>
              </div>
            </div>
            <div className="mt-16 flex-none">
              <div className="flex justify-center items-center">
                <h1 className="text-white text-center lg:text-4xl font-semibold tracking-wide  text-2xl">
                  Frequently Asked Questions
                </h1>
                <img
                  className="absolute lg:w-36 lg:ml-5 w-24 ml-3"
                  src="./circle-blue.png"
                  alt="circle"
                />
              </div>
              <div className="mt-16 grid lg:grid-cols-2 gap-6 text-black px-12">
                <div className="collapse collapse-plus bg-quaternary rounded-lg p-6 ">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-medium">
                    What is Infinite Learning
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-quaternary rounded-lg p-6">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-medium">
                    How long does the bootcamp last?
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-quaternary rounded-lg p-6">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-medium">
                    Are there any prerequisites for attending the bootcamp?
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
                <div className="collapse collapse-plus bg-quaternary rounded-lg p-6">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-medium">
                    Can I work while undergoing training?
                  </div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
