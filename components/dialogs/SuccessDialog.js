import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PlayIcon from "../../icons/PlayIcon";
import DoneIcon from "../../icons/DoneIcon";
const SuccessDialog = ({
  showDialog,
  setShowDialog,
  success,
  title,
  description,
}) => {
  return (
    <Transition.Root show={showDialog} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        // initialFocus={cancelButtonRef}
        onClose={(value) => {
          setShowDialog(value);
          if (success) setTimeout(() => success(), 300);
        }}
      >
        <div className="items-end justify-center block min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-black bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle "
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block w-full p-4 overflow-hidden text-left align-middle transition-all transform bg-green-500 rounded-lg shadow-xl sm:my-8 sm:max-w-lg">
              <div className=" rounded-3xl">
                <div className="p-2 sm:flex sm:items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-green-700 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <DoneIcon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-green-900"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-justify text-green-900">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between h-10 gap-2 mt-2 duration-500">
                <div className="w-full h-1 duration-500 bg-green-900 rounded" />
                <div className="flex ">
                  <div
                    onClick={() => {
                      setShowDialog(false);
                      if (success) setTimeout(() => success(), 300);
                    }}
                    className="flex items-center overflow-hidden text-base text-green-900 duration-500 bg-transparent border-2 border-green-900 rounded-full cursor-pointer hover:text-green-500 hover:bg-green-900 button group "
                  >
                    <DoneIcon className="items-center w-10 h-10 p-2" />
                    <div className="mr-4 font-medium whitespace-nowrap ">
                      Okay
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SuccessDialog;
