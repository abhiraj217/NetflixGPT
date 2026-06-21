import netflixLogo from "../../assets/images/Netflix_Logo.png";
import profileImage from "../../assets/images/profileImage.png";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../utils/redux/UserSlice";
import { changeGptSearchStatus } from "../../utils/redux/GptSearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.netflixUsers);

  const changeSearchBTnStatus = useSelector(
    (state) => state.gptSearch.searchBtnStatus
  );

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const HandleSearchBtn = () => {
    dispatch(changeGptSearchStatus());
  };

  return (
    <section className="absolute top-0 z-50 w-full px-4 sm:px-6 md:px-10 lg:px-16 py-4 flex flex-wrap items-center justify-between gap-4">
      
      {/* Logo */}
      <div>
        <img
          src={netflixLogo}
          alt="netflixLogo"
          className="h-8 sm:h-10 md:h-12"
        />
      </div>

      {/* Right Section */}
      {users && (
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-wrap justify-end">
          
          {/* Profile */}
          <img
            src={profileImage}
            alt="profileimage"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-md object-cover"
          />

          {/* GPT Button */}
          <button
            onClick={HandleSearchBtn}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 sm:px-4 rounded-md text-xs sm:text-sm md:text-base font-medium transition-colors"
          >
            {!changeSearchBTnStatus ? "GPT Search" : "Back to Movies"}
          </button>

          {/* Logout */}
          <button
            onClick={handleSignout}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 sm:px-4 rounded-md text-xs sm:text-sm md:text-base font-medium transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </section>
  );
};

export default Navbar;