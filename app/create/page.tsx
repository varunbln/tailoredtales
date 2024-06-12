import { CreateForm } from "@/components/CreateForm";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center">
      <Navbar />
      <div className="h-full w-full flex flex-col justify-start mt-16 items-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-8">
          Create Podcast
        </h1>
        <CreateForm />
      </div>
    </div>
  );
}
