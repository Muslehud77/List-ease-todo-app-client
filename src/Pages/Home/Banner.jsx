import React from 'react';
import bannerImg from '../../Assets/images/banner-mini.png'

const Banner = () => {
    return (
      <div className=" overflow-hidden h-[100vh] relative">
        <div className="flex justify-end absolute w-full overflow-hidden">
          <img src={bannerImg} className="w-[70vw] md:w-[50vw] -mt-[14vh] -mr-[10vw]" />
        </div>
        <div className="flex flex-col justify-center items-center h-full w-[50vw] pl-10 relative text-left">
          <div className=''>
            <h1 className="text-5xl font-bold font-serif mb-5">
              Simplify Your Tasks, Organize Your Life.
            </h1>
            <button className='btn btn-outline'>Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;