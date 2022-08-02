import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect } from "react";
import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";
import classNames from "../utils/classNames";

const navigation = [
  { id: "home", name: "Movie", href: "#", current: true },
  {
    id: "news_and_events",
    name: "News & Events",
    href: "/news_and_events",
    current: false,
  },
  { id: "", name: "Partners", href: "#", current: false },
  { id: "", name: "Impressum", href: "#", current: false },
  { id: "about_us", name: "About Us", href: "/about_us", current: false },
  { id: "contact_us", name: "Contact Us", href: "/contact_us", current: false },
];
const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const Header = ({ className, scrolled, page }) => {
  useEffect(() => {
    const pathname = window.location.pathname;
    // console.log(window.location.pathname);
    navigation.map((n) => {
      n.current = n.href == pathname;
    });
  }, [navigation]);
  return (
    <Disclosure
      as="nav"
      className={classNames(
        "fixed z-10 w-full   duration-1000 bg-black",
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
                          <div
                            className={classNames(
                              "h-[2px] mt-1 bg-white rounded-full group-hover:opacity-100 opacity-0 duration-500",
                              page == item.id ? "opacity-100" : ""
                            )}
                          />
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
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Header;
