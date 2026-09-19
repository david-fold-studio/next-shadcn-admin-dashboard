import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Windows CRM",
  version: packageJson.version,
  copyright: `© ${currentYear}, Windows CRM.`,
  meta: {
    title: "Windows CRM — Customer relationships, simplified",
    description: "Windows CRM helps you track customers, deals, tasks, and follow-ups in one clear workspace.",
  },
};
