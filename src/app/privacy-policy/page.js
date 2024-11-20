import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="bg-primaryColor">
        <Header />
      </div>
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default Page;
