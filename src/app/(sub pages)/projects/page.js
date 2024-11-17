import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModal from "@/components/RenderModal";
import StaffModel from "@/components/modals/Staff";


export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="w-full h-full top-0 left-0 fixed object-cover object-center opacity-20"
        
      />
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModal>
          <StaffModel />
        </RenderModal>
      </div>
    </>
  );
}
