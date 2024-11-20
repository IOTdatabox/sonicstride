import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TermsAndConditions from "@/components/TermsAndConditions";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="bg-primaryColor">
        <Header />
      </div>
      <TermsAndConditions />
      <Footer />
    </div>
  );
};

export default Page;
