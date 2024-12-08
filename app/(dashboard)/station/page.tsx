import AuthGuard from "@/components/Authgaurd";
import StationMainComponent from "@/components/section/station/StationMainComponent";

  export default function Station() {
    return (
      <main>
      <AuthGuard>
     <StationMainComponent/>
     </AuthGuard>
    </main>
    );
  }
  