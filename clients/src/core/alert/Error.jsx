import React from 'react'

const Error = () => {
    return (
        <div>
            <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between rounded-sm shadow bg-white">
                {/* ::Main Container */}
                <div className="flex">
                    {/* :::icon */}
                    <div className="p-3 inline-flex justify-end items-center bg-red-500">
                        <svg className="flex-shrink-0 w-7 h-7 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z" />
                        </svg>
                    </div>
                    {/* :::content */}
                    <div className="px-5 flex-grow inline-flex items-center bg-red-500 sm:bg-transparent">
                        <p className="text-sm text-white sm:text-gray-700 font-semibold">Oh, well. There is always next time.</p>
                    </div>
                </div>
                {/* ::Actions Container */}
                <div className="flex-grow-0 p-3 pr-6 inline-flex justify-center sm:justify-start items-center space-x-4">
                    {/* :::details */}
                    <a href="#link" className="text-xs text-gray-700 font-semibold underline hover:text-red-600">Details</a>
                    {/* :::dismiss button */}
                    <button type="button" className="group inline-flex justify-center items-center">
                        <svg className="w-5 h-5 text-red-600 group-hover:text-black fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Error