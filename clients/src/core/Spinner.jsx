import React from 'react'

const Spinner = () => {
    return (
        <div>
            {/* <div class='flex items-center justify-center min-h-screen'>
                <div style={{ borderTopColor: "transparent" }} class="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
                <p class="ml-2">Loading...</p>
            </div> */}
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            </div>
        </div >
    )
}

export default Spinner