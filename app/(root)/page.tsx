import React from "react";
import Hero from "./sections/hero";
import IntoductionSection from "./sections/intito";
import PillarSection from "./sections/pillars";
import CollaborationSection from "./sections/collaboration";

const page = () => {
  return (
    <>
      <Hero />
      <IntoductionSection />
      <PillarSection />
      <CollaborationSection />
    </>
  );
};

export default page;
