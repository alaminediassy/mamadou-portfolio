import React from "react";
import Image from "next/image";
import Articles from "./Articles";
import Newsletter from "./Newsletter";



const Content = () => {
  return (
    <div className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 gap-2">
        <Articles/>
        <div className="space-y-10 lg:pl-16 xl:pl-18">
          <Newsletter/>
        </div>
      </div>
    </div>
  );
};

export default Content;
