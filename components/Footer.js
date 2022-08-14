import Link from "next/link";
import { useRouter } from "next/router";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import classNames from "../utils/classNames";

const Footer = ({ className }) => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  return (
    <footer className={classNames("px-4 pb-8 mx-auto max-w-7xl", className)}>
      <div className=" bg-white h-[2px] self-center rounded-full" />
      {/* <div className="flex justify-center gap-8 mt-4 text-sm text-white sm:text-base">
        <div className="bg-black">About</div>
        <div>Blog</div>
        <div>Jobs</div>
        <div>Press</div>
      </div> */}

      <div className="flex justify-center gap-8 py-4 ">
        <div
          onClick={() => {
            window.open(
              "https://www.facebook.com/NRI-Kannada-Balaga-111255714079808/?ti=as",
              "_blank"
            );
          }}
        >
          <FacebookIcon className="w-5 h-5 text-gray-400 duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
        </div>

        <div
          onClick={() => {
            window.open(
              "https://www.instagram.com/p/CKPin5UloX9/?igshid=1nh3ipb0rt6sa",
              "_blank"
            );
          }}
        >
          <InstagramIcon className="w-5 h-5 text-gray-400 duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
        </div>

        <div
          onClick={() => {
            window.open("https://twitter.com/BalagaNri", "_blank");
          }}
        >
          <TwitterIcon className="w-5 h-5 text-gray-400 duration-500 cursor-pointer sm:w-6 sm:h-6 hover:text-white" />
        </div>
      </div>
      <div className="grid justify-center grid-cols-2 mx-auto text-sm text-white sm:text-base w-max">
        <Link href={asPath} locale="en-US">
          <a
            className={classNames(
              "px-3 duration-500 rounded-l-full border border-white text-center  hover:bg-white hover:text-black",
              locale === "en-US" ? "text-black bg-white " : ""
            )}
          >
            English
          </a>
        </Link>
        <Link href={asPath} locale="kn-IN">
          <a
            className={classNames(
              " duration-500 rounded-r-full border border-white text-center  hover:bg-white hover:text-black px-3",
              locale === "kn-IN" ? "text-black bg-white " : ""
            )}
          >
            ಕನ್ನಡ
          </a>
        </Link>
      </div>
      <div className="mt-4 text-sm text-center text-gray-400 sm:text-base">
        &copy; 2022 Sacred Chank Productions. All Rights Reserved
      </div>
    </footer>
  );
};
export default Footer;
