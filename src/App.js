import './App.css';
import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from './utils/redux/UserSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid , email , displayName} = user;
           dispatch(addUser({uid: uid, email:email , displayName:displayName} ));
           navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/login");
        }
      })
  
      //Unsubscribe when component unmounts 
      return ()=> unsubscribe;
    },[])
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
