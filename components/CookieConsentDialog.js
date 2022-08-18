import React, { useEffect, useState } from "react";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CookieIcon from "../icons/CookieIcon";
import localforage from "localforage";

const CookieConsentDialog = () => {
  const [showDialog, setShowDialog] = useState(false);
  useEffect(() => {
    localforage
      .getItem("cookieConcent")
      .then((value) => setShowDialog(value == null ? true : !value));
  }, []);
  return (
    <Transition.Root show={showDialog} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-10 overflow-y-auto"
        open={showDialog}
        onClose={() => {}}
      >
        <div className="items-end justify-center block min-h-screen p-0 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-black bg-opacity-75 " />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom=" translate-y-full "
            enterTo=" translate-y-0"
            leave="ease-in duration-300"
            leaveFrom=" translate-y-0"
            leaveTo="translate-y-full"
          >
            <div className="self-center inline-block w-full overflow-hidden text-left align-bottom transition-all transform bg-gray-700 rounded-t-lg shadow-xl group max-w-7xl">
              <div className="flex flex-col gap-4 p-4 md:flex-row">
                <CookieIcon className="self-center w-12 h-12 text-white" />
                <div className="flex-1 ">
                  <div className="text-lg font-bold text-white">
                    We Value Your Privacy
                  </div>
                  <div className="mt-2 text-base text-gray-100">
                    We Use Cookies To Enhance Your Browsing Experience, And
                    Analyze Our Traffic. By Clicking &quot;Accept All&quot;, You
                    Consent To Our Use Of Cookies.
                  </div>
                </div>
                <div
                  className="self-center px-4 py-2 text-white duration-500 border border-white rounded-full cursor-pointer select-none h-max hover:text-black hover:bg-white"
                  onClick={() => {
                    localforage.setItem("cookieConcent", true);
                    setShowDialog(false);
                  }}
                >
                  Accept All
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CookieConsentDialog;
