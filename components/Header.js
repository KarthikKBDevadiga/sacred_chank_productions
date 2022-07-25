import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";
import Link from "next/link";
import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";
import classNames from "../utils/classNames";

const navigation = [
  { name: "Movie", href: "#", current: true },
  { name: "News & Events", href: "#", current: false },
  { name: "Partners", href: "#", current: false },
  { name: "Impressum", href: "#", current: false },
  { name: "About Us", href: "/about_us", current: false },
  { name: "Contact Us", href: "/contact_us", current: false },
];
const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const Header = ({ className, scrolled }) => {
  return (
    <Disclosure
      as="nav"
      className={classNames(
        "fixed z-20 w-full   duration-1000 bg-black",
        scrolled ? "bg-opacity-100" : " bg-opacity-25",
        className
      )}
    >
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 border-gray-200 border-b1">
              <div className="flex items-center">
                <Link href="./">
                  <a className="flex-shrink-0">
                    <img
                      className="w-auto h-8"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=violet&shade=500"
                      alt="Workflow"
                    />
                  </a>
                </Link>

                {/* Links section */}
                <div className="hidden lg:block lg:ml-10">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className={classNames(
                            item.current ? "bg-gray-1001" : "",
                            "px-3 py-2  text-sm  text-white duration-500 cursor-pointer group"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <div className="text-base">{item.name}</div>
                          <div className="h-[2px] mt-1 bg-white rounded-full group-hover:opacity-100 opacity-0 duration-500" />
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-white duration-500 rounded-full hover:bg-opacity-10 focus:outline-none hover:bg-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <CloseIcon className="block w-8 h-8" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-8 h-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Actions section */}
              <div className="hidden lg:block lg:ml-4">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="flex-shrink-0 p-1 text-gray-400 rounded-full bg-gray-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative flex-shrink-0 ml-3">
                    <div>
                      <Menu.Button className="flex text-sm text-white rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="w-8 h-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className=" lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? "bg-gray-900" : "hover:bg-gray-800",
                    "block px-3 py-2  text-white"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="flex-shrink-0 p-1 ml-auto text-gray-400 rounded-full bg-gray-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Header;
