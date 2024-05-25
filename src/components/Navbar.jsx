import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import logo from "../assets/logo.png";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <nav
        className="flex items-center justify-between p-6 md:px-10"
        aria-label="Global"
      >
        <NavLink to="/" className="flex items-center">
          <img src={logo} className="rounded-full h-16 mr-4" />
          <h1 className="text-lg md:text-3xl font-semibold text-primary-dark">
            Sign Language Detector
          </h1>
        </NavLink>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden md:flex md:gap-x-12">
          <NavLink
            to={"/"}
            className="text-xl leading-6 text-primary-dark font-semibold"
          >
            Home
          </NavLink>

          <NavLink
            to={"/about"}
            className="text-xl leading-6 text-primary-dark font-semibold"
          >
            About us
          </NavLink>
          <NavLink
            to={"/tech-stack"}
            className="text-xl leading-6 text-primary-dark font-semibold"
          >
            Tech Stack
          </NavLink>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-60" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink className="-m-1.5 p-1.5">
              <img className="h-16 rounded-full" src={logo} alt="" />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to={"/"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About us
                </NavLink>
                <NavLink
                  to="/tech-stack"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Tech Stack
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
