/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

export default function Example() {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}
