import Dashboard from "@/components/Dashboard";
import DashboardPlaceholder from "@/components/DashboardPlaceholder";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center">
      <Navbar />
      <div className="h-full w-full flex flex-col justify-start mt-8 items-center">
        <h1 className="text-white text-5xl font-bold mb-8">Dashboard</h1>
        <Suspense fallback={<DashboardPlaceholder />}>
          <Dashboard />
        </Suspense>
      </div>
    </div>
  );
}
