"use client";

import { icError, icRefresh } from "@/constants/images";
import Image from "next/image";
import IconButton from "../ui/icon-btn";

 function ErrorFallback({
  error,
  onRetry,
}: {
  error: string;
  onRetry?: () => void;
}) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" id="my-modal">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
              <Image
                src={icError}
                className="h-10 w-10 text-red-600"
                alt="Error Icon"
                width={35}
                height={35}
              />
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                Error
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{error}</p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 w-full flex justify-center" >
            <IconButton icon={icRefresh} onClick={onRetry} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorFallback;