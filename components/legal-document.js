// Shared layout for the legal pages: a title block, a table of contents and numbered sections.
// Each section is { id, title, body: [paragraph | { list: [...] }] }.
export function LegalDocument({ title, updated, intro, sections }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Legal</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-subtle">Last updated: {updated}</p>
      <div className="mt-6 space-y-3 text-[15px] leading-relaxed text-muted">
        {intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <nav className="mt-8 rounded-xl border border-line bg-soft p-5" aria-label="Contents">
        <p className="text-sm font-semibold">Contents</p>
        <ol className="mt-3 grid list-decimal gap-x-8 gap-y-1.5 pl-5 text-sm sm:grid-cols-2">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-brand-600 hover:underline">
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-10 space-y-10">
        {sections.map((s, n) => (
          <section key={s.id} id={s.id}>
            <h2 className="text-xl font-semibold">
              {n + 1}. {s.title}
            </h2>
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted">
              {s.body.map((b, i) =>
                typeof b === "string" ? (
                  <p key={i}>{b}</p>
                ) : (
                  <ul key={i} className="list-disc space-y-1.5 pl-5">
                    {b.list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )
              )}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
