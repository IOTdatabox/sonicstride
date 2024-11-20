import CookiePolicy from "@/components/CookiePolicy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="bg-primaryColor">
        <Header />
      </div>
      <CookiePolicy />
      <Footer />
    </div>
  );
};

export default Page;
