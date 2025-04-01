"use client";
import React, { memo, useEffect } from "react";

function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: {
    totalPages:number;
    currentPage: number;
  onPageChange: (currentPage:number) => void;
}) {
  useEffect(() => {
    onPageChange(currentPage);
  }, [
    currentPage,
  ]);

const PageButtons = React.useMemo(() => {
    return  (
        <>
        <button 
          className="flex items-center justify-center px-4 h-10 text-base font-medium cursor-pointer
           text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        >
          <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
          </svg>
          Prev
        </button>
        {currentPage < totalPages && (
          <button 
            className="flex items-center justify-center px-4 h-10 text-base 
            font-medium text-gray-800 cursor-pointer"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        )}
   </>
    )

}, [currentPage]);
  return (
    <div className="flex flex-col items-center">
  <span className="text-sm text-gray-700">
      Showing <span className="font-semibold text-gray-900 ">{currentPage}</span> Page of <span className="font-semibold text-gray-900 ">{totalPages}</span> Pages
  </span>
  <div className="inline-flex mt-2 xs:mt-0">

   {PageButtons}
  </div>
</div>
  );
}

export default memo(Pagination);
   // <div className="flex justify-center items-center">
    //   <nav className="bg-gray-200  rounded-full px-4 py-2">
    //     <ul className="flex text-gray-600 gap-4 font-medium py-2">
    //       <li className="cursor-pointer">
    //         <a
    //           onClick={() => currentPage > 1 && paginate(currentPage - 1)}
    //           className="rounded-full  py-2 text-gray-300 "
    //         >
    //           Prev
    //         </a>
    //       </li>
    //       {Array.from({ length: totalPages }, (_, index) => (
    //         <li key={index} className="cursor-pointer">
    //           <a
    //             onClick={() => paginate(index + 1)}
    //             className={`rounded-full px-4 py-2 ${
    //               index + 1 === currentPage ? "bg-red-500" : "bg-white"
    //             } text-gray-600`}
    //           >
    //             {index + 1}
    //           </a>
    //         </li>
    //       ))}
    //       <li className="cursor-pointer">
    //         <a
    //           onClick={() =>
    //             currentPage < totalPages && paginate(currentPage + 1)
    //           }
    //           className="rounded-full py-2 text-gray-300"
    //         >
    //           Next
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>