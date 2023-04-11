import React, { useContext, useEffect, useState } from 'react'
import { PostContext } from '../contexts/PostContext'
import Spinner from '../core/Spinner'
import SinglePost from '../components/posts/SinglePost'
import AddPost from '../components/posts/AddPost'

const Dashboard = () => {
    //Context
    const { postState: {
        posts,
        postLoading
    }, getPosts } = useContext(PostContext)

    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log("🚀 ~ file: Dashboard.jsx:15 ~ Dashboard ~ isModalOpen:", isModalOpen)

    //State: get all posts
    useEffect(() => {
        getPosts()
    }, [])

    let body = null;

    if (postLoading) {
        body = <Spinner />
    }
    else if (posts.length === 0) {
        body = (
            <div>
                Post is empty!
            </div>
        )
    }
    else {
        body = <SinglePost post={posts} />
    }

    // xử lý sự kiện click nút tải lên
    const handleUploadClick = () => {
        setIsModalOpen(true);
    };

    // xử lý sự kiện đóng modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='bg-[#f3f4f6] h-auto min-h-screen scroll-auto p-10'>
            <section className="text-gray-600 body-font h-full">
                <div className="container mx-auto max-w-7x1">
                    <div className="flex flex-wrap w-full mb-4 p-4">
                        <div className="w-full mb-6 lg:mb-0 flex justify-between">
                            <div className=''>
                                <h1 className="sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-900">News</h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded" />
                            </div>
                            <div className='my-auto'>
                                <button onClick={handleUploadClick} class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
                                    Toggle login modal
                                </button>
                            </div>
                            {isModalOpen &&
                                <AddPost isOpen={isModalOpen} onClose={handleCloseModal}>
                                    <div className="p-4">
                                        <h3 className="text-lg font-medium mb-2">Tải lên tệp của bạn</h3>
                                        <input type="file" className="mb-4" />
                                        <div className="flex justify-end">
                                            <button className="mr-2" onClick={handleCloseModal}>Hủy</button>
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={handleCloseModal}>Tải lên</button>
                                        </div>
                                    </div>
                                </AddPost>
                            }
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {body}
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Dashboard