import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../images/hero.jpg';
import VideoThumbnail from '../images/thumbnail.jpg';
import AIOCALogo from '../images/aioca.png';
import MBLogo from '../images/mb.png';
import WAOMBLogo from '../images/waomb.png';

const Index = () => {
  return (
    <Layout>
      <div
        style={{ backgroundImage: `url(${Hero})` }}
        className="w-full flex flex-col justify-center py-16 focus:outline-none focus:shadow-outline sm:py-24 px-6 bg-cover bg-no-repeat text-center bg-right-bottom"
      >
        <h3 className="text-fmLightBrown text-sm sm:text-base uppercase font-semibold tracking-wider opacity-75 text-shadow-lg">
          Welcome to Falls Monument
        </h3>
        <h2 className="font-merriweather text-white italic text-3xl sm:text-4xl mt-6 mb-10 text-shadow-lg leading-tight">
          Commemorating Every Life
        </h2>
        <h4 className="text-fmLightBrown uppercase font-medium tracking-wider opacity-75 text-shadow-lg">
          Store Hours
        </h4>
        <p className="mt-4 mb-12 font-merriweather text-white text-shadow-lgt tracking-wide">
          Monday-Friday: 9am-4pm
        </p>
        <div className="flex flex-col sm:flex-row justify-center">
          <Link
            to="/contact"
            className="w-full sm:w-64 py-3 mb-4 sm:mb-0 sm:mr-4 text-center bg-fmBlue hover:bg-fmLightBlue text-white rounded text-sm tracking-wide font-merriweather shadow-lg hover:shadow-xl focus:outline-none focus:shadow-outline"
          >
            Schedule an Appointment
          </Link>
          <Link
            to="/"
            className="hidden sm:block w-64 py-3 text-center bg-9e hover:bg-ab text-white rounded text-sm tracking-wide font-merriweather shadow-lg hover:shadow-xl focus:outline-none focus:shadow-outline"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center py-20 px-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 110.9 117.6"
          className="w-8 text-fmDarkGold fill-current"
        >
          <path d="M110 112c-9 1-15-6-17-18l-7-41h-2L66 92 51 59l-1-2h4c2 0 3 1 3 2v3h3V47h-3v2c0 2-1 3-3 3h-8c-3-3-9-7-16-5h-1v3h1c3-1 6 0 8 2H27V31h15c2 0 3 1 3 2v2h3V24l-2 1-9 1H14v3h2c2 0 4 2 4 3v44c0 2-2 3-4 3h-2v3h19v-3h-2c-2 0-4-1-4-3V57h16l2 4-5 36c0 3-2 4-3 4h-2v2h15v-2h-2l-2-1v-1l3-30 16 35h2l2-7 13-29 4 27c1 7 4 13 9 16 3 3 7 4 11 4h5v-3h-1z" />
          <path d="M43 9l9-1h4l9 1 3 1c16 7 27 10 32 11v73c0 2 2 4 4 4s4-2 4-4V18c0-2-1-4-3-4-1 0-12-2-34-11l-4-1-11-2h-4L42 2h-1l-4 1C15 12 4 14 4 14c-2 0-4 1-4 3v97c0 2 2 3 4 3 2 1 4-1 4-3V21c5-1 16-4 32-11l3-1z" />
        </svg>
        <h3 className="my-10 font-merriweather text-xl text-fmDarkestBrown italic leading-tight text-center">
          Our caring staff is here to be of assistance in selecting a lasting
          memorial.
        </h3>
        <p className="text-fmMediumBrown max-w-screen-sm px-5 mb-8 text-center mx-auto leading-relaxed">
          We offer attention to detail, creativity, and exceptional workmanship
          with thoughtful consideration for the families we serve.
        </p>
        <Link
          to="/contact"
          className="w-full sm:w-64 py-3 text-center bg-fmBlue hover:bg-fmLightBlue text-white rounded text-sm tracking-wide font-merriweather shadow-md focus:outline-none focus:shadow-outline"
        >
          See Our Services
        </Link>
      </div>

      <div className="w-full bg-f8 pt-16 lg:py-16 px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-screen-lg lg:px-3 mx-auto">
          <div className="max-w-lg text-center lg:text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-52 leading-tight">
              A memorial does more than mark an individuals final resting place.
            </h3>
            <p className="text-78 mt-6 mb-8 md:mt-4 md:mb-6 leading-relaxed">
              It reflects the love, warmth, and affection that inspires
              reverence, faith, and hope for the living. It’s a work of art that
              links the past and present with our future generations.
            </p>
            <Link
              to="/"
              className="block sm:w-64 py-3 mx-auto lg:mx-0 text-center bg-fmBlue hover:bg-fmLightBlue text-white rounded font-merriweather text-sm tracking-wider shadow-md focus:outline-none focus:shadow-outline"
            >
              See Our work
            </Link>
          </div>
          <a
            href="#"
            className="block transform translate-y-16 lg:tranform lg:translate-y-0 rounded-md outline-none focus:shadow-outline shadow-xl hover:shadow-2xl"
          >
            <img
              src={VideoThumbnail}
              alt="Video Link"
              className="w-full max-w-sm rounded-md"
            />
          </a>
        </div>
      </div>

      <div className="w-full max-w-screen-lg pt-40 pb-20 lg:py-20 lg:py-24 px-6 mx-auto">
        <h4 className="mb-16 text-center text-9e uppercase tracking-wider font-semibold">
          We are proud members of:
        </h4>
        <div className="flex flex-col">
          <div className="flex max-w-lg w-full mx-auto text-left pb-10 border-b-2 border-solid border-f8">
            <img
              src={MBLogo}
              alt="Monument Builders of North America"
              className="h-12 w-auto mx-auto mr-8"
            />
            <div className="flex flex-col">
              <h3 className="mb-3 uppercase tracking-wide text-52 font-bold leading-tight">
                Monument Builders of North America
              </h3>
              <p className="text-78">
                The largest international association of individuals and
                businesses in the memorial industry.
              </p>
            </div>
          </div>
          <div className="flex max-w-lg w-full mx-auto text-left py-10 border-b-2 border-solid border-f8">
            <img
              src={WAOMBLogo}
              alt="Monument Builders of North America"
              className="h-12 w-auto mx-auto mr-8"
            />
            <div className="flex flex-col">
              <h3 className="mb-3 uppercase tracking-wide text-52 font-bold leading-tight">
                WI Association of Monument Builders
              </h3>
              <p className="text-78">
                Industry professionals who have chosen to enhance their
                knowledge of and participation in the industry.
              </p>
            </div>
          </div>
          <div className="flex max-w-lg w-full mx-auto text-left pt-10">
            <img
              src={AIOCALogo}
              alt="Monument Builders of North America"
              className="h-12 w-auto mx-auto mr-8"
            />
            <div className="flex flex-col">
              <h3 className="mb-3 uppercase tracking-wide text-52 font-bold leading-tight">
                American Institute of Commemorative Art
              </h3>
              <p className="text-78">
                An association of monument companies that specialize in
                memorials with exceptionally creative design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
