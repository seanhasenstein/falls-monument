import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-fmDarkestBrown px-8 pt-20 pb-6 text-center lg:text-left">
      <div className="max-w-screen-lg mx-auto px-3">
        <div className="max-w-md w-full mx-auto lg:mx-0">
          <div className="block w-56 border border-solid border-fmDarkestBrown focus:outline-none focus:border-fmMediumBrown focus:bg-fmDarkBrown rounded-sm py-2 px-3 lg:pl-0 lg:pr-6 mx-auto lg:mx-0">
            <Logo />
          </div>
          <p className="text-fmLightBrown mt-8 font-merriweather font-light tracking-wide leading-relaxed">
            Respectfully serving the Sheboygan Falls area and southeastern
            Wisconsin for over 70 years.
          </p>
        </div>
        <div className="md:max-w-xl lg:max-w-full md:flex md:justify-center md:flex-wrap my-24 mx-auto">
          <div className="md:w-1/2 lg:w-1/3 mb-20 lg:mb-0">
            <h3 className="font-merriweather text-fmMediumBrown tracking-wider mb-4 text-lg">
              Store Hours
            </h3>
            <p className="text-fmLightBrown opacity-75 leading-relaxed">
              Monday-Friday: 9am-4pm
            </p>
            <p className="text-sm text-fmLightBrown opacity-50">
              (after hour appointments available)
            </p>
          </div>
          <div className="mb-20 lg:mb-0 md:w-1/2 lg:w-1/3">
            <h3 className="font-merriweather text-fmMediumBrown tracking-wider mb-4 text-lg">
              Address
            </h3>
            <a
              href="#"
              className="inline-block rounded-sm focus:outline-none focus:shadow-outline"
            >
              <p className="text-fmLightBrown opacity-75">
                1098 Fond du Lac Avenue <br />
                Sheboygan Falls, WI 53085
              </p>
            </a>
          </div>
          <div className="md:w-1/2 lg:w-1/3">
            <h3 className="font-merriweather text-fmMediumBrown tracking-wider mb-4 text-lg">
              Contact
            </h3>
            <p className="text-fmLightBrown opacity-75 mb-2">
              <a
                href="tel:9204674939"
                className="rounded-sm focus:outline-none focus:shadow-outline"
              >
                <span className="font-inter font-normal opacity-50">
                  Phone:
                </span>{' '}
                (920) 467-4939
              </a>
            </p>
            <p className="text-fmLightBrown opacity-75">
              <span className="font-inter font-normal opacity-50">Fax:</span>{' '}
              (920) 467-4101
            </p>
          </div>
        </div>
        <div className="pt-6 border-t-2 border-solid border-fmDarkBrown text-fmMediumBrown font-merriweather text-sm tracking-wide opacity-75">
          Copyright 2020 - Falls Monument Company
        </div>
      </div>
    </footer>
  );
};

export default Footer;
