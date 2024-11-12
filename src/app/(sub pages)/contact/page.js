import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";

import RenderModal from "@/components/RenderModal";
import StaffModel from "@/components/modals/Staff";
import { HatModel } from "@/components/modals/Hat";
import AboutDetails from "@/components/about";


export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="w-full h-full top-0 left-0 fixed object-cover object-center opacity-20"
      />
      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
            <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
            <h1 className="text-accent font-semibold text-center text-4xl capitalize">Summon The Wizard</h1>

            </div>
      </article>
    </>
  );
}
