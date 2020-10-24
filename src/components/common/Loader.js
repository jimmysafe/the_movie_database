import React from "react";
import { IoMdPlayCircle } from "react-icons/io";
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import IconWrapper from './IconWrapper'

const Loader = () => {
  return (
        <div className="loader flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full z-50 bg-lightgrey">
            <IconWrapper color='#f4442e' className="w-10 h-10 animate-bounce" >
                <IoMdPlayCircle/>
            </IconWrapper> 
            <IconWrapper color='#f4442e'>
                <BiDotsHorizontalRounded />
            </IconWrapper>
        </div>
  );
};

export default Loader;
