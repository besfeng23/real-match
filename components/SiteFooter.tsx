import Link from "next/link";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <LegalDisclaimer />
      <div className="footer-links">
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
