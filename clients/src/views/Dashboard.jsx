import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../contexts/PostContext";
import Spinner from "../core/Spinner";
import SinglePost from "../components/pages/posts/SinglePost";
import AddPost from "../components/pages/posts/AddPost";
import Toast from "../core/toast/Toast";
import SideBar from "../components/layout/SideBar";

const Dashboard = () => {
  //Context
  const {
    postState: { posts, postLoading },
    getPosts,
    setIsModalOpen,
  } = useContext(PostContext);

  //State: get all posts
  useEffect(() => {
    getPosts();
  }, []);

  let body = null;

  if (postLoading) {
    body = <Spinner />;
  } else if (posts?.length === 0) {
    body = <div>Post is empty!</div>;
  } else {
    body = <SinglePost />;
  }

  // xử lý sự kiện click mở modal
  const handleUploadClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="mx-auto h-auto min-h-screen scroll-auto">
      <section className="text-gray-600 body-font h-full">
        <div className="container mx-auto max-w-7x1">
          <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0 flex justify-between">
              <div className="w-3/4">
                <h1 className="sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-900">
                  News
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded" />
              </div>
              <div className="my-auto w-1/4 flex flex-row-reverse">
                <button
                  onClick={handleUploadClick}
                  className=" text-white bg-blue-400 focus:outline-none hover:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="button">
                  Create Post
                </button>
              </div>
              <AddPost />
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {body}
            <Toast />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
