import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Swish",
  version: packageJson.version,
  copyright: `© ${currentYear}, Swish.`,
  meta: {
    title: "Swish — Window washing & exterior cleaning CRM",
    description:
      "Swish helps window washing and exterior cleaning teams track customers, quotes, jobs, and follow-ups in one place.",
  },
};
