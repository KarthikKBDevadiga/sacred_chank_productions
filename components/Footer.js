import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import classNames from "../utils/classNames";

const Footer = ({ className }) => {
  return (
    <footer className={classNames("px-4 pb-8 mx-auto max-w-7xl", className)}>
      <div className=" bg-white h-[2px] self-center rounded-full" />
      <div className="flex justify-center gap-8 mt-4 text-sm text-white sm:text-base">
        <div>About</div>
        <div>Blog</div>
        <div>Jobs</div>
        <div>Press</div>
      </div>
      <div className="flex justify-center gap-8 py-4 ">
        <FacebookIcon className="w-5 h-5 text-gray-400 duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
        <InstagramIcon className="w-5 h-5 text-gray-400 duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
        <TwitterIcon className="w-5 h-5 text-gray-400 duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
      </div>
      <div className="text-sm text-center text-gray-400 sm:text-base">
        &copy; 2022 Sacred Chank Productions. All Rights Reserved
      </div>
    </footer>
  );
};
export default Footer;
