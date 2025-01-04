import { Facebook, Instagram, Twitter, Linkedin, SendHorizontal } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <div className=" min-h-max w-full bg-gray-900 text-slate-100 box-border justify-items-center p-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-bold">Exclusive</span>
            <span className="text-md font-semibold">Subscribe</span>
            <div>
              <span>Get 10% off on your first order</span>
              <form className="flex mt-2">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="bg-gray-950 p-2 border-y border-slate-500 border-l rounded-l-lg outline-none"
                />
                <button className="bg-gray-950 text-gray-200 justify-center border-y border-r border-slate-500 items-center p-3 rounded-r-lg">
                  <SendHorizontal />
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-bold">Support</span>
            <div className="flex flex-col gap-3 w-[80%]">
              <span>
                300, 78B, GAUR CITY, Greater Noida, UttarPradesh, 201009
              </span>
              <span>digpalsingh18901@gmail.com</span>
              <span>1800 30000 123</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-bold">Account</span>
            <div className="flex flex-col gap-3">
              <Link to="#">
                <span>My Account</span>
              </Link>
              <Link to="#">
                <span>Order History</span>
              </Link>
              <Link to="#">
                <span>Wishlist</span>
              </Link>
              <Link to="#">
                <span>Track Order</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-bold">Quick Links</span>
            <div className="flex flex-col gap-3">
              <span>Privacy Policy</span>
              <span>Terms Of Use</span>
              <span>FAQs</span>
              <span>Contact us</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="text-slate-100 text-lg font-semibold">
              Connect with us on Social Media
            </span>
            <div className="flex mx-auto gap-2">
              <span className="p-2 m-2 text-xl rounded-md border border-solid cursor-pointer hover:bg-slate-500">
                <Facebook />
              </span>
              <span className="p-2 m-2 text-xl rounded-md border border-solid cursor-pointer hover:bg-slate-500">
                <Twitter />
              </span>
              <span className="p-2 m-2 text-xl rounded-md border border-solid cursor-pointer hover:bg-slate-500">
                <Linkedin />
              </span>
              <span className="p-2 m-2 text-xl rounded-md border border-solid cursor-pointer hover:bg-slate-500">
                <Instagram />
              </span>
            </div>
          </div>
        </div>
        <div className="gap-2 w-full p-2 mt-8">
          {/* <hr className="m-4 bg-slate-300" /> */}
          <div className="flex flex-col text-slate-300 justify-center items-center">
            <span>&copy; 2024 Exclusive. All Rights Reserved</span>
            <span>Powered by Shopley India</span>
          </div>
        </div>
      </div>
    </>
  );
}
