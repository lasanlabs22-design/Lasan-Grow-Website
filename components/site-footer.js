import { Logo } from "./logo";
import { SITE } from "@/lib/site";

const COLUMNS = [
  ["Product", [["Features", "/#features"], ["How it works", "/#how-it-works"], ["Security", "/#security"], ["FAQ", "/#faq"]]],
  ["Company", [["Contact", "/#contact"], ["Sign in", SITE.signInUrl], ["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"]]],
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-3 text-sm leading-relaxed text-muted">
            The sales CRM for growing teams: pipeline, lead scoring, contacts, follow-ups and a live revenue dashboard in one
            workspace.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-14 text-sm">
          {COLUMNS.map(([heading, links]) => (
            <div key={heading} className="grid content-start gap-2">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-subtle">{heading}</p>
              {links.map(([label, href]) => (
                <a key={label} href={href} className="text-muted hover:text-fg">
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-subtle sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Lasan Labs. All rights reserved.</p>
          <p>
            Powered by <span className="lasan-signature font-semibold">Lasan Labs</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
