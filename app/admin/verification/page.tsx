import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminTable } from "@/components/admin/AdminTables";
import { verificationEvents as rows } from "@/lib/mock-data";

export default function ReviewPage() {
  return (
    <AdminLayout title="Review events">
      <AdminTable rows={rows} />
    </AdminLayout>
  );
}
