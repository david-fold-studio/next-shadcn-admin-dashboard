import {
  Banknote,
  Calendar,
  ChartBar,
  CheckSquare,
  ClipboardList,
  FileText,
  Gauge,
  Kanban,
  Lock,
  type LucideIcon,
  Mail,
  MessageSquare,
  ReceiptText,
  UserRound,
  Users,
} from "lucide-react";

export type NavBadge = "new" | "soon";

export interface NavSubItem {
  id: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

interface NavItemBase {
  id: string;
  title: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

export interface NavMainLinkItem extends NavItemBase {
  url: string;
  subItems?: never;
}

export interface NavMainParentItem extends NavItemBase {
  subItems: NavSubItem[];
}

export type NavMainItem = NavMainLinkItem | NavMainParentItem;

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Swish",
    items: [
      {
        id: "crm",
        title: "Pipeline",
        url: "/dashboard/crm",
        icon: ChartBar,
      },
      {
        id: "leads",
        title: "Leads",
        url: "/dashboard/crm/leads",
        icon: ClipboardList,
      },
      {
        id: "estimates",
        title: "Estimates",
        url: "/dashboard/crm/estimates",
        icon: FileText,
      },
      {
        id: "customers",
        title: "Customers",
        url: "/dashboard/default",
        icon: Users,
      },
      {
        id: "kanban",
        title: "Job board",
        url: "/dashboard/kanban",
        icon: Kanban,
      },
      {
        id: "tasks",
        title: "Tasks",
        url: "/dashboard/tasks",
        icon: CheckSquare,
      },
      {
        id: "calendar",
        title: "Calendar",
        url: "/dashboard/calendar",
        icon: Calendar,
      },
      {
        id: "invoice",
        title: "Invoices",
        url: "/dashboard/invoice",
        icon: ReceiptText,
      },
    ],
  },
  {
    id: 2,
    label: "Workspace",
    items: [
      {
        id: "email",
        title: "Email",
        url: "/dashboard/mail",
        icon: Mail,
      },
      {
        id: "chat",
        title: "Messages",
        url: "/dashboard/chat",
        icon: MessageSquare,
      },
      {
        id: "analytics",
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: Gauge,
      },
      {
        id: "finance",
        title: "Finance",
        url: "/dashboard/finance",
        icon: Banknote,
      },
    ],
  },
  {
    id: 3,
    label: "Team",
    items: [
      {
        id: "users",
        title: "Users",
        url: "/dashboard/users",
        icon: Users,
      },
      {
        id: "roles",
        title: "Roles",
        url: "/dashboard/roles",
        icon: Lock,
      },
      {
        id: "profile",
        title: "Profile",
        url: "/dashboard/profile",
        icon: UserRound,
      },
    ],
  },
];
