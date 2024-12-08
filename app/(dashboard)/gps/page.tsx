import AuthGuard from "@/components/Authgaurd";
import GpsMainComponent from "@/components/section/Gps/GpsMainComponent";

export default function GpsPage() {
  return (
    <main>
      <AuthGuard>
        <GpsMainComponent />
      </AuthGuard>
    </main>
  );
}
