import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminTable } from "@/components/admin/AdminTables";
import { members } from "@/lib/mock-data";

export default function MemberRecordsPage() {
  return (
    <AdminLayout title="Member records">
      <AdminTable rows={members} />
    </AdminLayout>
  );
}
