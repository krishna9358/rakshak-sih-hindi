import AuthGuard from "@/components/Authgaurd";
import DepartmentMain from "@/components/section/department/DepartmentMain";

export default function Department() {
  return (
    <main>
      <AuthGuard>
        <DepartmentMain />
      </AuthGuard>
    </main>
  );
}
