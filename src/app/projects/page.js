import Image from "next/image";
import bg from "../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../data";
import RenderModal from "@/components/RenderModal";
import StaffModel from "@/components/modals/Staff";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        className="w-full h-full object-cover object-center opacity-20"
        fill
      />
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-20 left-0 h-screen">
        <RenderModal>
          <StaffModel />
        </RenderModal>
      </div>
    </main>
  );
}
