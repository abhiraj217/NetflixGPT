import bgNetflixImg from "../assets/images/netflixbgimage.jpg";
import { formvalidation } from "../utils/formvalidation";
import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/UserSlice";

const Login = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleLoginStatus = () => {
    setLoginStatus((prevStatus) => !prevStatus);
  };

  const handleformSubmit = () => {
    const formValue = formvalidation(
      email.current?.value,
      password.current?.value,
      name?.current?.value
    );

    setErrorMsg(formValue);

    if (formValue !== null) return;

    if (!loginStatus) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then(async (userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          setErrorMsg(error.code + " - " + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          console.log(userCredential.user);
        })
        .catch((error) => {
          setErrorMsg(error.code + " - " + error.message);
        });
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgNetflixImg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 w-[90%] sm:w-[420px] md:w-[450px] bg-black/75 px-6 py-8 sm:px-10 sm:py-10 md:p-12 rounded-md"
      >
        <div className="flex flex-col gap-5 sm:gap-6">
          <h1 className="text-white text-3xl sm:text-4xl font-bold">
            {loginStatus ? "Sign In" : "Sign Up"}
          </h1>

          {!loginStatus && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="w-full h-12 sm:h-14 px-4 bg-gray-700 text-white rounded-md outline-none text-sm sm:text-base"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="w-full h-12 sm:h-14 px-4 bg-gray-700 text-white rounded-md outline-none text-sm sm:text-base"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full h-12 sm:h-14 px-4 bg-gray-700 text-white rounded-md outline-none text-sm sm:text-base"
          />

          <p className="text-red-500 text-sm">{errorMsg}</p>

          <button
            onClick={handleformSubmit}
            className="w-full h-12 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
          >
            {loginStatus ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex justify-between items-center text-gray-400 text-xs sm:text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <button type="button">Need help?</button>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col gap-4">
          <div className="flex flex-wrap gap-2 text-gray-400 text-sm">
            <span>
              {loginStatus ? "New to Netflix?" : "Already a member?"}
            </span>

            <button
              type="button"
              onClick={handleLoginStatus}
              className="text-white font-medium"
            >
              {loginStatus ? "Sign Up Now" : "Sign In now"}
            </button>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 leading-5">
            This page is protected by Google reCAPTCHA to ensure that you're
            not a bot.
            <span className="text-blue-500 ml-1 cursor-pointer">
              Learn more.
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;