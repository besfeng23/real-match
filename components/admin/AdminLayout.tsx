import Link from "next/link";

const adminLinks = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/applications", label: "Applications" },
  { href: "/admin/members", label: "Members" },
  { href: "/admin/verification", label: "Verification" },
  { href: "/admin/payments", label: "Payments" },
  { href: "/admin/complaints", label: "Complaints" },
  { href: "/admin/audit-logs", label: "Audit logs" }
];

export function AdminLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="admin-page">
      <aside className="admin-sidebar" aria-label="Admin navigation">
        <h2>Admin mock</h2>
        {adminLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </aside>
      <div className="admin-content">
        <p className="eyebrow">Static MVP only</p>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}
