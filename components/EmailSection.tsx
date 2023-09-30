import React from "react";
import Navbar from "./Navbar";
import SocialLink from "./SocialLink";
import Footer from "./Footer";

const EmailSection = () => {
  return (
     <div className="max-w-contentContainer mx-auto gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
       <section className="grid md:grid-cols-2 md:my:12 py-24 gap-14 pl-4 pr-4 relative">
{/*       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full h-80  w-80 z-0 blur-lg opacity-20 absolute  left-20 top-3/4 transform -translate-x-1/2 -translate-1/2"></div>
 */}        <div className="z-10">
            <h5 className="text-xl font-bold text-white">Let&apos;s connect</h5>
            <p className="pb-4">
              {" "}
              I&apos;m currenttly looking for new opportunities in web development, my inbox is always
              open. Whether you have a question or just want to say hi, I&apos;ll try
              my best to get back to you!
            </p>
            <SocialLink/>
        </div>
        <div>
          <form action="" className="flex flex-col">
                  <div className="mb-6">
                    <label htmlFor="email" typeof="email" className="text-white block text-sm font-medium">Your email *</label>
                    <input
                    type="email"
                    id="email"
                    required
                    className="bg-white/5 border w-full mt-2  border-white/10 focus:outline-none focus:border-textOrange focus:ring-1/2 focus:ring-textOrange rounded-xl pl-6 text-sm pt-2.5 pb-2.5"
                    placeholder="mamadou@google.com" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" typeof="subject" className="text-white block text-sm font-medium">Your subject</label>
                    <input
                    type="text"
                    id="subject"
                    required
                    className="bg-white/5 border w-full mt-2 border-white/10 rounded-xl pl-6 text-sm pt-2.5 pb-2.5 focus:outline-none focus:border-textOrange focus:ring-1/2 focus:ring-textOrange"
                    placeholder="Just saying hi" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium">Message</label>
                    <textarea name="message" id="message"
                    placeholder="Lets telk about"
                    className="bg-white/5 border h-[200px] w-full mt-2 border-white/10 rounded-xl pl-6 text-sm pt-2.5 pb-2.5 focus:outline-none focus:border-textOrange focus:ring-1/2 focus:ring-textOrange"></textarea>
                  </div>
                  <button className="bg-textOrange/90 px-5 text-white w-full rounded-xl p-2.5 hover:bg-textOrange">Send message</button>
          </form>
        </div>
        </section>
        <Footer/>
     </div>
         
  );
};

export default EmailSection;
