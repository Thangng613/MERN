import { AuthContext } from "../../contexts/AuthContext";
import { useState, useContext, Navigate } from "react";
import AlertMessage from "../layout/AlertMessage";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [alert, setAlert] = useState(null);

  const { username, password, confirmPassword } = registerForm;

  const onchangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });

  const register = async (event) => {
    event.preventDefault();
    try {
      const registerData = await registerUser(registerForm);

      if (!registerData.success) {
        setAlert({ message: registerData.message });
        setTimeout(() => setAlert(null), 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <!-- Container --> */}
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-6">
        {/* <!-- Login component --> */}
        <div className="flex shadow-md">
          {/* <!-- Login form --> */}
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[24rem] h-auto">
            <div className="w-72">
              {/* <!-- Heading --> */}
              <h1 className="text-xl font-semibold">Welcome back</h1>
              <small className="text-gray-400">
                Welcome back! Please enter your details
              </small>

              {/* <!-- Form --> */}
              <form method="post" className="mt-4" onSubmit={register}>
                <AlertMessage info={alert} />
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={onchangeRegisterForm}
                    placeholder="Enter your email"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onchangeRegisterForm}
                    placeholder="*****"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onchangeRegisterForm}
                    placeholder="*****"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>

                <div className="mb-3 flex flex-wrap content-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="mr-1 checked:bg-purple-700"
                  />{" "}
                  <label
                    htmlFor="remember"
                    className="mr-auto text-xs font-semibold">
                    Remember htmlFor 30 days
                  </label>
                  <a href="#" className="text-xs font-semibold text-purple-700">
                    Forgot password?
                  </a>
                </div>

                <div className="mb-3">
                  <button
                    className={`mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md `}>
                    Sign in
                  </button>
                  <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                    <img
                      className="w-5 mr-2"
                      src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    />
                    Sign in with Google
                  </button>
                </div>
              </form>

              {/* <!-- Footer --> */}
              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">
                  You have an account?
                </span>
                <a
                  href="/login"
                  className="text-xs font-semibold text-purple-700 ml-2">
                  Sign in
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Login banner --> */}
          <div className="flex flex-wrap content-center justify-center rounded-r-md w-[24rem] h-auto">
            <img
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
              src="https://i.imgur.com/9l1A4OS.jpeg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
