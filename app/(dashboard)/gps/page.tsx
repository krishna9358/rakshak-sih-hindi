import AuthGuard from "@/components/Authgaurd";
import GpsMainComponent from "@/components/section/Gps/GpsMainComponent";

export default function GpsPage() {
  return (
    // TODO: change color of main 
    <main className="">
      <AuthGuard>
        <GpsMainComponent />
      </AuthGuard>
    </main>
  );
}
