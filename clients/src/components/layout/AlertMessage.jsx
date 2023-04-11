import React from 'react'

const AlertMessage = ({ info }) => {
    return (info == null ? null : (
        <div className='text-white text-sm mb-4 p-2 bg-red-500 rounded'>{info.message}</div>
    ))
}

export default AlertMessage