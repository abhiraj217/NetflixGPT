import Navbar from "../components/navbar/Navbar";
import bgNetflixImg from "../assets/images/netflixbgimage.jpg";
import { formvalidation } from "../utils/formvalidation";
import { useState , useRef} from "react";

const Login = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);


  const handleLoginStatus = () => {
    console.log("status clicked !");
    setLoginStatus((prevStatus) => !prevStatus);
  };

  const handleformSubmit = () =>{
    console.log(email.current?.value);
    console.log(password.current?.value);
    console.log(name.current?.value);
   
    const formValue = formvalidation(email.current?.value,password.current?.value,name?.current?.value);;
    setErrorMsg(formValue);

  }

  return (
    <>
      <Navbar />
      <section
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${bgNetflixImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <form onSubmit={(e)=> e.preventDefault()} className="relative z-10 w-[450px] bg-black/75 p-12 rounded-md ">
          <div className="flex flex-col gap-6">
            <h1 className="text-white text-4xl font-bold">
              {loginStatus ? "Sign In" : "Sign Up"}
            </h1>
            {!loginStatus && (
              <input
               ref={name}
                type="text"
                placeholder="Name"
                className="w-full h-14 px-4 bg-gray-700 text-white rounded-md outline-none"
              />
            )}

            <input
              ref={email}
              type="text"
              placeholder="Email or phone number"
              className="w-full h-14 px-4 bg-gray-700 text-white rounded-md outline-none"
            />

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full h-14 px-4 bg-gray-700 text-white rounded-md outline-none"
            />

            <p className="text-red-500 ">{errorMsg}</p>

            <button onClick={handleformSubmit} className="w-full h-12 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition">
              {loginStatus ? "Sign In" : "Sign Up"}
            </button>

            <div className="flex justify-between items-center text-gray-400 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <button>Need help?</button>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4">
            <div className="flex gap-2 text-gray-400">
              <span>
                {loginStatus ? "New to Netflix ?" : "Already a member ?"}
              </span>
              <button onClick={handleLoginStatus}>
                {loginStatus ? "Sign Up Now" : "Sign In now"}
              </button>
            </div>

            <p className="text-sm text-gray-500">
              This page is protected by Google reCAPTCHA to ensure that you're
              not a bot.
              <span className="text-blue-500 ml-1 cursor-pointer">
                Learn more.
              </span>
            </p>
          </div>
          </form>
      </section>
    </>
  );
};

export default Login;
