import HomeBtn from "@/components/HomeBtn";


export default function SubPages({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-32 lg:px-32">
      <HomeBtn />
      {children}
    </main>
  );
}
