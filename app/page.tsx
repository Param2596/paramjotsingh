import { experience, projects, site } from "@/content/site";

function ExternalLink({
  href,
  children,
  label,
  className = "text-amber underline-offset-4 hover:underline",
}: {
  href: string;
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[40rem] px-6 py-12 sm:py-20">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:bg-background focus:px-2 focus:py-1 focus:text-amber"
      >
        Skip to work
      </a>

      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 text-sm">
        <p className="flex items-center gap-2.5 text-amber">
          <span>{site.mark}</span>
          <span className="size-1.5 rounded-full bg-status" aria-hidden="true" />
        </p>
        <nav aria-label="Site" className="flex gap-6">
          <ExternalLink href={site.github}>github</ExternalLink>
          <ExternalLink href={site.resume}>resume</ExternalLink>
        </nav>
      </header>

      <main>
        <h1 className="mt-16 text-[clamp(1.75rem,5vw,2.75rem)] leading-none tracking-tight text-amber sm:mt-24">
          {site.name}
        </h1>
        <p className="mt-4">{site.role}</p>
        <p className="mt-8 max-w-prose leading-7">{site.bio}</p>
        <ul className="mt-8 flex flex-wrap gap-x-2 gap-y-1 text-xs tracking-[0.16em] text-muted uppercase">
          {site.stack.map((item) => (
            <li key={item} className="after:ml-2 after:content-['·'] last:after:content-none">
              {item}
            </li>
          ))}
        </ul>

        <div id="work" className="mt-16 divide-y divide-rule border-y border-rule">
          <article className="py-8">
            <div className="flex items-baseline justify-between gap-6">
              <h2 className="text-base">{experience.org}</h2>
              <p className="text-sm text-muted">{experience.dates}</p>
            </div>
            <p className="mt-2 text-sm text-muted">{experience.title}</p>
            <p className="mt-3 max-w-prose leading-7">{experience.summary}</p>
          </article>

          {projects.map((project) => (
            <article key={project.name} className="py-8">
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="text-base">{project.name}</h3>
                <ExternalLink
                  href={project.href}
                  label={`${project.label} for ${project.name}`}
                >
                  {project.label}
                </ExternalLink>
              </div>
              <p className="mt-3 max-w-prose leading-7">{project.summary}</p>
            </article>
          ))}
        </div>
      </main>

      <footer className="mt-10 space-y-2 text-sm text-muted">
        <p>{site.education}</p>
        <p>
          <a
            href={`mailto:${site.email}`}
            className="underline-offset-4 hover:text-amber hover:underline"
          >
            {site.email}
          </a>
          <span aria-hidden="true"> · </span>
          <a
            href={site.phoneHref}
            className="underline-offset-4 hover:text-amber hover:underline"
          >
            {site.phone}
          </a>
        </p>
        <p>
          {site.place}
          <span aria-hidden="true"> · </span>
          {site.availability}
        </p>
      </footer>
    </div>
  );
}
