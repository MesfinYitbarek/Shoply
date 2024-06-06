import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link, Search, SearchOff, SearchRounded } from "@mui/icons-material";
const Header = () => {
  return (
    <div className=" shadow-md ">
      <div className=" bg-blue-900 text-white rounded-t-lg p-2 px-20">
        <div className=" flex  justify-between items-center ">
          <div className=" flex  justify-between items-center gap-10">
            <h1>
              <PhoneIcon />
              +251 985 111 040
            </h1>
            <h1>
              <EmailIcon />
              shoply@gmail.com
            </h1>
          </div>

          <div className=" flex  justify-between items-center gap-7">
            <FacebookIcon />
            <InstagramIcon />
            <TelegramIcon />
            <XIcon />
          </div>
        </div>
      </div>
      <div className=" px-28 p-3 flex justify-between items-center">
        <h1 className=" font-bold text-2xl"> <LocalMallIcon sx={{ fontSize: 50 }} className=" text-blue-900 "/> SHOPLY</h1>
        <div className=" flex items-center">
          <input
            type="text"
            className=" border w-[300px] p-3 rounded-md px-3 border-black"
          />
          <button className=" p-3 text-white  bg-blue-900">
            <SearchRounded />
          </button>
        </div>
        <div className=" flex justify-between items-center gap-5">
          <h1>REGISTER</h1>
          <h1>LOGIN</h1>
          <h1>
            <ShoppingBagIcon />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
