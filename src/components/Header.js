import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

const navLinks = [
  {
    id: 0,
    name: 'Home',
    link: '/',
  },
  {
    id: 1,
    name: 'Services',
    link: '/services',
  },
  {
    id: 2,
    name: 'About',
    link: '/about',
  },
  {
    id: 3,
    name: 'Staff',
    link: '/staff',
  },
  {
    id: 4,
    name: 'Contact',
    link: '/contact',
  },
];

const Header = () => {
  const activatorRef = useRef(null);
  const navigationRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleEscKeyUp = event => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      // when nav is open, don't allow page scrolling
      document.body.style.overflow = 'hidden';

      // focus trap to the open nav only
      const firstFocusableItem = activatorRef.current;
      const lastFocusableItem = navigationRef.current.querySelector(
        'a:last-of-type'
      );

      document.addEventListener('keydown', event => {
        // if any btn except for tab is presssed, do nothing
        if (event.key !== 'Tab') {
          return;
        }
        // when the shift key + tab are pressed...
        if (event.shiftKey) {
          if (document.activeElement === firstFocusableItem) {
            lastFocusableItem.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableItem) {
            firstFocusableItem.focus();
            event.preventDefault();
          }
        }
      });
    }
    // clean up allows scrolling again
    return () => (document.body.style.overflow = 'unset');
  }, [isOpen]);

  return (
    <header className="bg-fmDarkestBrown">
      <div
        className={`${
          isOpen ? 'h-screen' : ''
        } md:h-auto max-w-screen-lg w-full flex flex-col justify-start md:flex-row md:justify-between md:items-center px-5 md:px-3 mx-auto`}
      >
        <div className="flex flex-row justify-between items-center py-2 md:py-0 border-b-2 border-solid border-fmDarkBrown md:border-b-0">
          <Link
            to="/"
            className="block w-56 border border-solid border-fmDarkestBrown focus:outline-none focus:border-fmMediumBrown focus:bg-fmDarkBrown rounded-sm py-2 px-3"
          >
            <Logo />
          </Link>
          <button
            className="md:hidden flex flex-col justify-between h-8 border border-solid border-fmDarkestBrown outline-none focus:outline-none focus:border-fmPurple focus:bg-fmDarkPurpleTrans p-2 rounded-sm"
            aria-haspopup="true"
            aria-controls="navigation"
            ref={activatorRef}
            onClick={handleOnClick}
            onKeyUp={handleEscKeyUp}
          >
            <span className="w-6 h-px border-b-2 border-solid border-e2 bg-e2 rounded-full" />
            <span className="w-6 h-px border-b-2 border-solid border-e2 bg-e2 rounded-full" />
            <span className="w-6 h-px border-b-2 border-solid border-e2 bg-e2 rounded-full" />
          </button>
        </div>
        <div
          className={
            isOpen ? 'flex flex-col justify-between h-full' : 'hidden md:flex'
          }
        >
          <nav
            className="flex flex-col md:flex-row justify-start py-5 md:py-0"
            id="navigation"
            ref={navigationRef}
          >
            {navLinks.map(({ id, name, link }) => (
              <Link
                key={id}
                to={link}
                className="text-ab hover:text-white tracking-wider font-merriweather font-light py-3 md:py-3 px-5 md:px-6 my-1 md:my-2 rounded-sm border border-solid border-fmDarkestBrown focus:outline-none focus:border-fmMediumBrown focus:bg-fmDarkBrown focus:text-white"
                activeClassName="text-f8 bg-fmDarkPurpleTrans border border-solid border-fmDarkPurpleTrans focus:border-fmPurple focus:bg-fmDarkPurpleTrans"
                onKeyUp={handleEscKeyUp}
              >
                {name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden text-center border-t-2 border-solid border-fmDarkBrown py-6 mt-auto">
            <h3 className="text-fmLightGold uppercase tracking-wider font-medium mb-5">
              Store Hours
            </h3>
            <h3 className="font-merriweather tracking-wider font-light text-fmLightBrown mb-2">
              Monday-Friday: 9am-4pm
            </h3>
            <p className="text-sm text-fmMediumBrown">
              (After hour appointments available)
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
