import Image from "next/image";
import bg from '../../public/background/home-back-alt.png'
import RenderModal from "@/components/RenderModal";
//import WizardModel from "@/components/modals/Wizard";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";
const WizardModel = dynamic(() => import("@/components/modals/Wizard"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image priority sizes="100vw" src={bg} alt="background-image" className="w-full h-full object-cover object-center opacity-20" fill/>
      <div className="w-full h-screen ">
          {/* navigaiton and 3d modal */}
          <Navigation/>
          <RenderModal>
            <WizardModel/>
          </RenderModal>
      </div>
    </main>
  );
}
