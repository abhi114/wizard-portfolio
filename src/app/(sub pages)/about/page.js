import Image from "next/image";
import bg from "../../../../public/background/about-background.png";

import RenderModal from "@/components/RenderModal";
import StaffModel from "@/components/modals/Staff";
import { HatModel } from "@/components/modals/Hat";
import AboutDetails from "@/components/about";


export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="w-full h-full top-0 left-0 fixed object-cover object-center opacity-20"
      />

      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0 ">
        <RenderModal>
          <HatModel />
        </RenderModal>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center ">
        <div className="absolute flex flex-col items-center text-center top-[65%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-7xl text-accent p-3 text-nowrap">Abhishek Nigam</h1>
          <p className="font-light text-foreground text-ls">Meet the Wizard Behind this Portfolio</p>
        </div>
      </div>
      <AboutDetails/>
    </>
  );
}
