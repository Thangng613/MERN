import React, { useState } from 'react';

function AddPost({ isOpen, children, onClose }) {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    console.log("🚀 ~ file: AddPost.jsx:5 ~ AddPost ~ isModalOpen:", isModalOpen)

    // xử lý sự kiện đóng modal
    const handleClose = () => {
        setIsModalOpen(false);
        onClose();
    };

    return (
        // <div>
        //     <div
        //         className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        //     >
        //         <div className="relative w-auto my-6 mx-auto max-w-3xl">
        //             {/*content*/}
        //             <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        //                 {/*header*/}
        //                 <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
        //                     <h3 className="text-3xl font-semibold">
        //                         Modal Title
        //                     </h3>
        //                     <button
        //                         className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        //                         onClick={handleClose}
        //                     >
        //                         <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
        //                             ×
        //                         </span>
        //                     </button>
        //                 </div>
        //                 {/*body*/}
        //                 <div className="relative p-6 flex-auto">
        //                     <p className="my-4 text-slate-500 text-lg leading-relaxed">
        //                         I always felt like I could do anything. That’s the main
        //                         thing people are controlled by! Thoughts- their perception
        //                         of themselves! They're slowed down by their perception of
        //                         themselves. If you're taught you can’t do anything, you
        //                         won’t do anything. I was taught I could do everything.
        //                     </p>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        //     <div className="opacity-25 fixed inset-0 z-40 bg-black">

        //     </div>
        // </div>
        <div className={`modal ${isModalOpen ? 'visible' : 'invisible'}`}>
            <div className="modal-overlay" onClick={handleClose}></div>
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">Modal Title</h2>
                    <button className="modal-close" onClick={handleClose}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
}
export default AddPost