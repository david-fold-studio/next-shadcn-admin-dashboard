import type { LucideIcon } from "lucide-react";
import { Clock3, Inbox, MessageCircle, Phone, Send, Star, User } from "lucide-react";

export type Conversation = {
  id: number;
  group: "Pinned" | "Today" | "Yesterday";
  name: string;
  subject: string;
  preview: string;
  time: string;
  isUnread: boolean;
  isOnline: boolean;
  unreadCount: number;
  contact: Contact;
  messages: Message[];
};

export type Message = {
  id: number;
  align: "start" | "end";
  text: string;
  time: string;
  reaction?: string;
};

export type Contact = {
  name: string;
  role: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  location: string;
  timezone: string;
  status: string;
  qualifiedAt: string;
  tags: string[];
};

export type NavItem = {
  id: string;
  title: string;
  label?: string;
  icon: LucideIcon;
  isActive: boolean;
};

export const navItems: NavItem[] = [
  { id: "inbox", title: "SMS inbox", label: "8", icon: Inbox, isActive: true },
  { id: "quotes", title: "Quote follow-ups", label: "3", icon: MessageCircle, isActive: false },
  { id: "jobs", title: "Jobs today", label: "2", icon: Clock3, isActive: false },
  { id: "sent", title: "Sent", icon: Send, isActive: false },
  { id: "all", title: "All messages", icon: MessageCircle, isActive: false },
  { id: "unassigned", title: "Needs reply", label: "4", icon: User, isActive: false },
];

export const channelItems: NavItem[] = [
  { id: "sms", title: "SMS (Twilio)", label: "8", icon: Phone, isActive: true },
  { id: "chat", title: "In-app chat", label: "0", icon: MessageCircle, isActive: false },
  { id: "phone", title: "Phone", label: "1", icon: Phone, isActive: false },
];

export const viewItems: NavItem[] = [
  { id: "vip", title: "Repeat customers", label: "5", icon: Star, isActive: false },
  { id: "commercial", title: "Commercial jobs", label: "3", icon: Inbox, isActive: false },
  { id: "residential", title: "Residential", label: "6", icon: MessageCircle, isActive: false },
];

export const conversations: Conversation[] = [
  {
    id: 1,
    group: "Pinned",
    name: "Maria Lopez",
    subject: "Quote for Harborview Ave windows",
    preview: "Yes, Tuesday morning works. Can you text me when you're on the way?",
    time: "Just now",
    isUnread: true,
    isOnline: true,
    unreadCount: 2,
    contact: {
      name: "Maria Lopez",
      role: "Homeowner",
      company: "Residential",
      email: "maria.lopez@email.com",
      phone: "+1 (415) 555-0142",
      website: "",
      location: "214 Harborview Ave, SF",
      timezone: "PDT (UTC-7)",
      status: "Quoted",
      qualifiedAt: "Sep 18, 2026",
      tags: ["Residential", "Windows", "SMS"],
    },
    messages: [
      {
        id: 101,
        align: "start",
        text: "Hi! Can Swish give me a quote for interior and exterior windows at 214 Harborview?",
        time: "40 min ago",
      },
      {
        id: 102,
        align: "end",
        text: "Absolutely, Maria. For ~18 windows it's usually $220–$260. Want me to send a written estimate?",
        time: "35 min ago",
      },
      {
        id: 103,
        align: "start",
        text: "Yes please. Also do you do screens?",
        time: "30 min ago",
      },
      {
        id: 104,
        align: "end",
        text: "We do. I sent estimate EST-308 for $245 including screens. Does Tuesday work?",
        time: "12 min ago",
      },
      {
        id: 105,
        align: "start",
        text: "Yes, Tuesday morning works. Can you text me when you're on the way?",
        time: "Just now",
      },
    ],
  },
  {
    id: 2,
    group: "Today",
    name: "Cedar Ridge HOA",
    subject: "Storefront glass schedule confirmation",
    preview: "Confirmed for Thursday 8am. Gate code is 4412.",
    time: "25 min ago",
    isUnread: true,
    isOnline: false,
    unreadCount: 1,
    contact: {
      name: "Dana Ortiz",
      role: "Property Manager",
      company: "Cedar Ridge HOA",
      email: "board@cedarridgehoa.com",
      phone: "+1 (510) 555-0110",
      website: "",
      location: "12 Cedar Ridge Loop",
      timezone: "PDT (UTC-7)",
      status: "Accepted",
      qualifiedAt: "Sep 12, 2026",
      tags: ["Commercial", "HOA", "SMS"],
    },
    messages: [
      {
        id: 201,
        align: "end",
        text: "Hi Dana — estimate EST-307 for storefront glass is ready at $1,240. Can we schedule this week?",
        time: "2 hours ago",
      },
      {
        id: 202,
        align: "start",
        text: "Looks good. Let's do Thursday morning before tenants arrive.",
        time: "1 hour ago",
      },
      {
        id: 203,
        align: "end",
        text: "Perfect. We'll be there Thursday at 8am.",
        time: "50 min ago",
      },
      {
        id: 204,
        align: "start",
        text: "Confirmed for Thursday 8am. Gate code is 4412.",
        time: "25 min ago",
      },
    ],
  },
  {
    id: 3,
    group: "Today",
    name: "James Chen",
    subject: "Exterior wash follow-up",
    preview: "Is pressure washing included or separate?",
    time: "1 hour ago",
    isUnread: true,
    isOnline: false,
    unreadCount: 1,
    contact: {
      name: "James Chen",
      role: "Homeowner",
      company: "Residential",
      email: "james.chen@email.com",
      phone: "+1 (415) 555-0198",
      website: "",
      location: "88 Maple Street",
      timezone: "PDT (UTC-7)",
      status: "Contacted",
      qualifiedAt: "Sep 19, 2026",
      tags: ["Residential", "Exterior", "SMS"],
    },
    messages: [
      {
        id: 301,
        align: "end",
        text: "Hi James — thanks for requesting an exterior wash quote. We can soft-wash the house for about $480.",
        time: "3 hours ago",
      },
      {
        id: 302,
        align: "start",
        text: "Is pressure washing included or separate?",
        time: "1 hour ago",
      },
    ],
  },
  {
    id: 4,
    group: "Today",
    name: "Brightline Offices",
    subject: "Gutter + windows reminder",
    preview: "Please invoice facilities@brightline.co after the job.",
    time: "3 hours ago",
    isUnread: false,
    isOnline: true,
    unreadCount: 0,
    contact: {
      name: "Alex Rivera",
      role: "Facilities Lead",
      company: "Brightline Offices",
      email: "facilities@brightline.co",
      phone: "+1 (415) 555-0177",
      website: "brightline.co",
      location: "400 Market St, Suite 200",
      timezone: "PDT (UTC-7)",
      status: "Quoted",
      qualifiedAt: "Sep 10, 2026",
      tags: ["Commercial", "Windows", "SMS"],
    },
    messages: [
      {
        id: 401,
        align: "end",
        text: "Alex — reminder that Swish is scheduled Friday for gutters + windows ($890).",
        time: "4 hours ago",
      },
      {
        id: 402,
        align: "start",
        text: "Thanks. Please invoice facilities@brightline.co after the job.",
        time: "3 hours ago",
      },
      {
        id: 403,
        align: "end",
        text: "Will do. We'll text when the crew is finished.",
        time: "3 hours ago",
      },
    ],
  },
  {
    id: 5,
    group: "Yesterday",
    name: "Lakeside Cafe",
    subject: "Solar rinse reschedule",
    preview: "Can we move to Wednesday? Monday is too busy.",
    time: "Yesterday",
    isUnread: false,
    isOnline: false,
    unreadCount: 0,
    contact: {
      name: "Sam Okonkwo",
      role: "Owner",
      company: "Lakeside Cafe",
      email: "hello@lakesidecafe.com",
      phone: "+1 (415) 555-0160",
      website: "lakesidecafe.com",
      location: "5 Lakeside Drive",
      timezone: "PDT (UTC-7)",
      status: "Won",
      qualifiedAt: "Aug 28, 2026",
      tags: ["Commercial", "Solar", "SMS"],
    },
    messages: [
      {
        id: 501,
        align: "end",
        text: "Sam — we're set for Monday solar panel rinse + patio glass. Still good?",
        time: "Yesterday",
      },
      {
        id: 502,
        align: "start",
        text: "Can we move to Wednesday? Monday is too busy.",
        time: "Yesterday",
      },
      {
        id: 503,
        align: "end",
        text: "No problem — Wednesday 9am is open. Booked.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: 6,
    group: "Yesterday",
    name: "Priya Patel",
    subject: "Door hanger inquiry",
    preview: "How soon can you do a pressure wash?",
    time: "Yesterday",
    isUnread: true,
    isOnline: false,
    unreadCount: 1,
    contact: {
      name: "Priya Patel",
      role: "Homeowner",
      company: "Residential",
      email: "priya.patel@email.com",
      phone: "+1 (650) 555-0133",
      website: "",
      location: "19 Oakmont Court",
      timezone: "PDT (UTC-7)",
      status: "New",
      qualifiedAt: "Sep 19, 2026",
      tags: ["Residential", "Pressure wash", "SMS"],
    },
    messages: [
      {
        id: 601,
        align: "start",
        text: "Hi, I got your door hanger. How soon can you do a pressure wash?",
        time: "Yesterday",
      },
    ],
  },
  {
    id: 7,
    group: "Yesterday",
    name: "Riverfront Lofts",
    subject: "Full exterior package questions",
    preview: "Do you bring water or need a hose bib?",
    time: "Yesterday",
    isUnread: false,
    isOnline: false,
    unreadCount: 0,
    contact: {
      name: "Jordan Lee",
      role: "Building Manager",
      company: "Riverfront Lofts",
      email: "jordan@riverfrontlofts.com",
      phone: "+1 (510) 555-0144",
      website: "",
      location: "100 Riverfront Way",
      timezone: "PDT (UTC-7)",
      status: "Quoted",
      qualifiedAt: "Sep 14, 2026",
      tags: ["Commercial", "Exterior", "SMS"],
    },
    messages: [
      {
        id: 701,
        align: "end",
        text: "Jordan — estimate EST-302 for the full exterior package is $2,100. Any questions before you approve?",
        time: "Yesterday",
      },
      {
        id: 702,
        align: "start",
        text: "Do you bring water or need a hose bib?",
        time: "Yesterday",
      },
      {
        id: 703,
        align: "end",
        text: "We can work either way. Hose bib on site is fastest if available.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: 8,
    group: "Yesterday",
    name: "Elena Brooks",
    subject: "First-time residential quote",
    preview: "Great, send the estimate over.",
    time: "Yesterday",
    isUnread: false,
    isOnline: true,
    unreadCount: 0,
    contact: {
      name: "Elena Brooks",
      role: "Homeowner",
      company: "Residential",
      email: "elena.brooks@email.com",
      phone: "+1 (415) 555-0155",
      website: "",
      location: "441 Westbrook Lane",
      timezone: "PDT (UTC-7)",
      status: "New",
      qualifiedAt: "Sep 19, 2026",
      tags: ["Residential", "Windows", "SMS"],
    },
    messages: [
      {
        id: 801,
        align: "start",
        text: "Hi Swish — looking for a residential window washing quote for a 2-story home.",
        time: "Yesterday",
      },
      {
        id: 802,
        align: "end",
        text: "Happy to help, Elena. Rough range is $180–$220. I can send a formal estimate today.",
        time: "Yesterday",
      },
      {
        id: 803,
        align: "start",
        text: "Great, send the estimate over.",
        time: "Yesterday",
      },
    ],
  },
];

export const currentUser = {
  name: "Swish Dispatch",
  email: "dispatch@swish.clean",
};
