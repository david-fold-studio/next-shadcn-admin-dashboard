interface PersonReference {
  name: string;
  role: string;
  initials: string;
}

export interface ProfileDocument {
  id: string;
  name: string;
  category: string;
  updatedAt: string;
  status: "Signed" | "Current";
  isRestricted: boolean;
}

export interface ProfileRecord {
  name: string;
  preferredName: string;
  legalName: string;
  pronouns: string;
  initials: string;
  avatar: string;
  engagementStatus: "Active";
  jobTitle: string;
  jobLevel: string;
  department: string;
  team: string;
  currentProject: string;
  workEmail: string;
  personalEmail: string;
  workPhone: string;
  workplace: string;
  timeZone: string;
  contractorId: string;
  startDate: string;
  engagementLength: string;
  employmentType: string;
  weeklyHours: string;
  schedule: string;
  contractingEntity: string;
  noticePeriod: string;
  dateOfBirth: string;
  address: string;
  emergencyContact: string;
  emergencyPhone: string;
  manager: PersonReference;
  bio: string;
  leavePolicy: string;
  annualLeaveAllowance: string;
  remainingLeave: string;
  carriedOverLeave: string;
  usedLeave: string;
  scheduledLeave: string;
  pendingLeaveRequests: string;
  leaveYear: string;
  nextLeave: string;
  lastWorkingDay: string;
  updatedBy: string;
  updatedAt: string;
  documents: ProfileDocument[];
}

export const profile: ProfileRecord = {
  name: "Alex Rivera",
  preferredName: "Alex",
  legalName: "Alex Rivera",
  pronouns: "They / them",
  initials: "AR",
  avatar: "",
  engagementStatus: "Active",
  jobTitle: "Operations Lead",
  jobLevel: "Lead",
  department: "Operations",
  team: "Field Ops",
  currentProject: "Swish route scheduling",
  workEmail: "alex@swish.clean",
  personalEmail: "alex.rivera@email.com",
  workPhone: "+1 (415) 555-0199",
  workplace: "San Francisco Bay Area",
  timeZone: "PDT (UTC-7)",
  contractorId: "SW-1001",
  startDate: "January 12, 2024",
  engagementLength: "2 years, 8 months",
  employmentType: "Full-time",
  weeklyHours: "40 hours",
  schedule: "Monday–Friday · 7:00 AM–4:00 PM",
  contractingEntity: "Swish Cleaning Co.",
  noticePeriod: "14 days",
  dateOfBirth: "April 4, 1994",
  address: "120 Clean Street, San Francisco, CA 94107",
  emergencyContact: "Sam Rivera · Sibling",
  emergencyPhone: "+1 (415) 555-0188",
  manager: {
    name: "Dana Ortiz",
    role: "Owner",
    initials: "DO",
  },
  bio: "Alex leads day-to-day operations at Swish, coordinating window washing and exterior cleaning crews, quotes, and customer follow-ups so jobs stay on schedule.",
  leavePolicy: "Company leave policy",
  annualLeaveAllowance: "20 days",
  remainingLeave: "14 days",
  carriedOverLeave: "0 days",
  usedLeave: "6 days",
  scheduledLeave: "2 days",
  pendingLeaveRequests: "0",
  leaveYear: "January 1–December 31, 2026",
  nextLeave: "October 12–13, 2026",
  lastWorkingDay: "—",
  updatedBy: "Alex Rivera",
  updatedAt: "September 12, 2026",
  documents: [
    {
      id: "doc-1",
      name: "Employment agreement",
      category: "Contract",
      updatedAt: "Jan 12, 2024",
      status: "Signed",
      isRestricted: false,
    },
    {
      id: "doc-2",
      name: "Confidentiality agreement",
      category: "Compliance",
      updatedAt: "Jan 12, 2024",
      status: "Signed",
      isRestricted: true,
    },
    {
      id: "doc-4",
      name: "Safety policy acknowledgement",
      category: "Policy",
      updatedAt: "Jan 8, 2026",
      status: "Current",
      isRestricted: false,
    },
  ],
};
