import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminTable } from "@/components/admin/AdminTables";
import { auditLogs } from "@/lib/mock-data";

export default function AuditLogsPage() {
  return (
    <AdminLayout title="Audit logs">
      <AdminTable rows={auditLogs} />
    </AdminLayout>
  );
}
