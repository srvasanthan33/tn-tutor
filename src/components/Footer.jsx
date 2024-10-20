import React from "react";
import Section from "./Section";


const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex justify-center items-center  max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()} GeoGen Mavericks.
        </p>

        
      </div>
    </Section>
  );
};

export default Footer;