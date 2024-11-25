import React from "react";

const Page = () => {
  return (
    <div className="relative md:p-32 p-16 flex flex-col justify-center items-center bg-[url('/heroImage.webp')] bg-cover bg-center min-h-screen ">
      <div className="absolute inset-0 bg-white opacity-75"></div>
      <div className="relative z-50 flex flex-col gap-5 justify-center items-center mt-20">
        <h1 className="capitalize font-orbitron md:text-6xl text-5xl font-semibold z-10">
          about us
        </h1>
        <h3 className="font-orbitron md:text-5xl text-3xl text-center text-hilight">
          RoboPark: Where Imagination Meets Innovation
        </h3>
        <div className="md:text-3xl text-xl font-poppins text-center mt-12 flex flex-col gap-10 mb-20 md:w-3/4">
          <p>
            RoboPark is a pioneering ecosystem designed to bring people and
            technology closer than ever. Built on four interconnected
            pillars—RoboLand, Teknowledge Academy, Futuristech, and Inkubator.
            More than a tech park, RoboPark symbolizes a commitment to
            sustainable progress and inclusive growth, positioning Thrissur as a
            hub for tech tourism.
          </p>
          <p>
            This dynamic space acts as a bridge between technology and society,
            empowering individuals and industries to navigate and shape a
            brighter future. It invites people and businesses to explore, grow,
            and thrive in an ever-evolving world. Here, imagination meets
            opportunity, and ideas grow into solutions that shape the future.
            RoboPark isn’t just about what’s next – it’s about making the future
            happen today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
