import React, { useContext, useState } from "react";
import Badge from "../../../core/bagde/Badge";
import { PostContext } from "../../../contexts/PostContext";
import UpdatePost from "./UpdatePost";

const SinglePost = () => {
  const {
    setShowToast,
    setIsModalOpenUpdatePost,
    findPost,
    deletePost,
    postState: { posts },
  } = useContext(PostContext);
  const [currentPost, setCurrentPost] = useState({});
  const handleDelete = async (id) => {
    const { success, message } = await deletePost(id);
    if (success) {
      setShowToast({
        show: true,
        message: message,
        type: "success",
      });
    }
  };
  const handleUpdate = async (id) => {
    setIsModalOpenUpdatePost(true);
    const { success, post } = await findPost(id);
    if (success) {
      setCurrentPost(post);
    }
  };

  const data = posts.map((post, index) => (
    <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
      <div className="bg-white p-6 rounded-lg">
        <div className="mb-2 flex justify-between">
          <div className="my-auto">
            <Badge status={post.status} />
          </div>
          <div className="flex gap-2 my-auto">
            <button
              onClick={() => handleUpdate(post._id)}
              className="text-blue-500 p-2 rounded hover:bg-blue-400 hover:text-white">
              Edit
            </button>
            <button
              onClick={() => handleDelete(post._id)}
              className="text-red-500 p-2 rounded hover:bg-red-400 hover:text-white">
              Delete
            </button>
          </div>
        </div>
        <a href={`${post.url}`} target="_blank">
          <img
            src="https://realkm.com/wp-content/uploads/2020/02/teacher-cartoon-board-chalkboard-class-person-1449505-pxhere.com_.jpg"
            className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
          />
        </a>
        {/* <iframe className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src='https://www.youtube.com/watch?v=rgFd17fyM4A&t=15569s' target="_blank" ></iframe> */}
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          Host {post.user.username}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {post.title}
        </h2>
        <p className="leading-relaxed text-base">{post.description}</p>
        <p className="leading-relaxed text-base">{post.createAt}</p>
      </div>
    </div>
  ));
  return (
    <>
      {data}
      <UpdatePost post={currentPost} />
    </>
  );
};

export default SinglePost;
