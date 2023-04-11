import React from 'react'
import Badge from '../../core/bagde/Badge'


const SinglePost = ({ post: posts }) => {
    const data = posts.map((post, index) => (
        <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-lg">
                <Badge status={post.status} id={post._id} />
                <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" alt="Image Size 720x400" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Host {post.user.username}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{post.title}</h2>
                <p className="leading-relaxed text-base">{post.description}</p>
                <p className="leading-relaxed text-base">{post.createAt}</p>
            </div>
        </div>
    ))
    return (
        <>
            {data}
        </>

    )
}

export default SinglePost