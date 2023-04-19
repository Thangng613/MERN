import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../../contexts/PostContext";

function UpdatePost(post) {
  const {
    updatePost,
    setShowToast,
    isModalOpenUpdatePost,
    setIsModalOpenUpdatePost,
    // postState: { post },
  } = useContext(PostContext);

  const [disabled, setDisabled] = useState(true);
  const [newPost, setNewPost] = useState(post);
  const { title, url, description, status, _id } = newPost ?? {};
  const handleChangePost = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const submitPost = async () => {
    const { success, message } = await updatePost(newPost, _id);
    setIsModalOpenUpdatePost(false);
    if (success) {
      setShowToast({
        show: true,
        message: message,
        type: "success",
      });
    }
  };

  useEffect(() => {
    if ((title && url && description)) {
      setNewPost(post);
      setDisabled(false);
    } else setDisabled(true);
  }, [title, description, url]);

  // xử lý sự kiện đóng modal
  const handleClose = () => {
    setIsModalOpenUpdatePost(false);
    setNewPost(post);
  };

  return (
    <div className={`${isModalOpenUpdatePost ? "visible" : "invisible"}`}>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative  my-6 mx-auto w-[50%] md:min-w[20%]">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Create Post</h3>
              <button
                className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold hover:text-gray-500"
                onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto ">
              <form className="mt-4">
                <div className="mb-3">
                  <label className="mb-2 block text-lg font-semibold">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChangePost}
                    placeholder="Enter Title"
                    className=" rounded-md border border-gray-300 block w-full  py-1 px-1.5 text-gray-500"
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-lg font-semibold">
                    Url
                  </label>
                  <input
                    type="text"
                    name="url"
                    value={url}
                    onChange={handleChangePost}
                    placeholder="Youtube Tutorial Url"
                    className="block w-full rounded-md border border-gray-300  focus:ring-1  py-1 px-1.5 text-gray-500"
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-2 block text-lg font-semibold">
                    Status
                  </label>
                  <select
                    onChange={handleChangePost}
                    className="w-full py-1 px-1.5 rounded-md cursor-pointer border-gray-300 "
                    name="status"
                    id="">
                    <option name="TO LEARN" value={"TO LEARN"}>
                      To Learn
                    </option>
                    <option name="LEARNING" value={"LEARNING"}>
                      Learning
                    </option>
                    <option name="LEARNED" value={"LEARNED"}>
                      Learned
                    </option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-lg font-semibold">
                    Description
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleChangePost}
                    placeholder="Description"
                    className="block w-full rounded-md border border-gray-300  py-1 px-1.5 text-gray-500"
                  />
                </div>
              </form>
            </div>
            <div className="flex gap-2 justify-end p-2">
              <button
                disabled={disabled}
                className={`${
                  disabled
                    ? "disabled:bg-slate-500"
                    : " bg-blue-400  hover:bg-blue-500 "
                } rounded px-3 py-2 text-white`}
                onClick={submitPost}>
                Post
              </button>
              <button
                className="bg-red-400 px-3 py-2 hover:bg-red-500 rounded text-white cursor-pointer"
                onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}
export default UpdatePost;
