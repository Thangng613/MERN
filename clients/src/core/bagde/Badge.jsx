import React, { useState } from 'react'

const Badge = ({ status, id }) => {

    const data = (
        status === 'TO LEARN' ? (<span className="text-xs p-2 font-bold bg-red-500 text-white rounded">
            {status}
        </span>) : status === 'LEARNING' ? <span className="text-xs p-2 font-bold bg-blue-500 text-white rounded " >
            {status}
        </span> : <span className="text-xs p-2  rounded font-bold bg-green-500 text-white ">
            {status}
        </span>
    )

    return (
        (
            <div className='mb-2 flex justify-between'>
                <div className='my-auto'>
                    {
                        data
                    }
                </div>
                <div className='flex gap-2 my-auto'>
                    <button className='text-blue-500 p-2 rounded hover:bg-blue-400 hover:text-white'>Edit</button>
                    <button className='text-red-500 p-2 rounded hover:bg-red-400 hover:text-white'>Delete</button>
                </div>

            </div>
        )
    )

}

export default Badge