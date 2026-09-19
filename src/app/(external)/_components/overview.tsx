import Link from "next/link";

const includedScreens = [
  { name: "Pipeline", href: "/dashboard/crm" },
  { name: "Customers", href: "/dashboard/default" },
  { name: "Job board", href: "/dashboard/kanban" },
  { name: "Tasks", href: "/dashboard/tasks" },
  { name: "Calendar", href: "/dashboard/calendar" },
  { name: "Invoices", href: "/dashboard/invoice" },
  { name: "Analytics", href: "/dashboard/analytics" },
];

const workspaceTools = [
  { name: "Email", href: "/dashboard/mail" },
  { name: "Messages", href: "/dashboard/chat" },
  { name: "Finance", href: "/dashboard/finance" },
  { name: "Users & roles", href: "/dashboard/users" },
];

export function Overview() {
  return (
    <section aria-labelledby="overview-title">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] md:gap-16">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col gap-4">
            <p className="font-medium text-muted-foreground text-xs">About</p>
            <h2 className="text-pretty text-xl leading-7 tracking-tight" id="overview-title">
              Swish is built for window washing and exterior cleaning crews who need clear quotes, jobs, and customer
              follow-ups.
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-medium text-muted-foreground text-xs">Make it yours</p>
            <p className="text-muted-foreground text-sm leading-6">
              Start with the pipeline, then tune themes and layout so the whole team can run the day from one place.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-muted-foreground text-xs">Key screens</h3>
            <ul className="flex flex-col gap-1 text-sm">
              {includedScreens.map((screen) => (
                <li key={screen.name}>
                  <Link
                    className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                    href={screen.href}
                    prefetch={false}
                  >
                    {screen.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4" id="variants">
            <h3 className="font-medium text-muted-foreground text-xs">Also included</h3>
            <ul className="flex flex-col gap-1 text-sm">
              {workspaceTools.map((tool) => (
                <li key={tool.name}>
                  <Link
                    className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                    href={tool.href}
                    prefetch={false}
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
