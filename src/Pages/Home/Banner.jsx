
import { Link } from 'react-router-dom';
import bannerImg from '../../Assets/images/banner-mini.png'

const Banner = () => {
    return (
      <div className=" overflow-hidden h-[100vh] relative">
        <div className="flex justify-end absolute z-0 w-full overflow-hidden">
          <img
            src={bannerImg}
            className="w-[70vw] md:w-[50vw] -mt-[14vh] -mr-[10vw]"
          />
        </div>
        <div className="flex flex-col justify-center items-center relative h-full w-[50vw] pl-10 text-left font-serif ">
          <div className="space-y-3">
            <h1 className="text-5xl font-bold ">
              Simplify Your Tasks, Organize Your Life.
            </h1>
            <p>Empower Your Efficiency with ListEase Today!</p>
            <Link to={'/dashboard'} className="btn btn-outline font-sans">Let's Explore</Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;