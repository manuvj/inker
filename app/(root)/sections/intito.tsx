import React from "react";
import SplitText from "@/components/ui/split-text";

const IntoductionSection = () => {
  return (
    <div className="md:p-32 p-8 max-sm:py-16 flex justify-center items-center relative ">
      <SplitText
        staggerAmount={0.6}
        text="India’s first immersive robotics ecosystem, dedicated to advancing
        education, innovation, and industry in Thrissur, Kerala.RoboPark serves as a catalyst for
        technological awareness, hands-on learning, cutting-edge research, and
        entrepreneurship."
      />
    </div>
  );
};

export default IntoductionSection;
