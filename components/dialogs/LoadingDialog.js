import React from "react";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Loader from "../Loader";
import CameraRollIcon from "../../icons/CameraRollIcon";
import CameraBodyIcon from "../../icons/CameraBodyIcon";

const LoadingDialog = ({ showDialog }) => {
  return (
    <Transition.Root show={showDialog} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-10 overflow-y-auto"
        open={showDialog}
        onClose={() => {}}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center pointer-events-none sm:block sm:p-0">
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
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
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
            <div className="inline-block p-8 overflow-hidden text-left align-bottom transition-all transform bg-black rounded-lg shadow-xl w-min sm:align-middle">
              <div className="w-max">
                {/* <Step /> */}
                <div>
                  <div className="flex">
                    <CameraRollIcon className="animate-rotate" />
                    <CameraRollIcon className="animate-rotate" />
                  </div>
                  <CameraBodyIcon />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LoadingDialog;
