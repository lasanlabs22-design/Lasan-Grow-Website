import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { LegalDocument } from "@/components/legal-document";
import { LEGAL } from "@/lib/legal";

export const metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

// Every item listed here matches what Lasan Grow actually stores (the Lasan-Grow repo's
// lib/db/schema.js) and what this website does. Update them together.
const L = LEGAL;

const SECTIONS = [
  {
    id: "who",
    title: "Who we are and our role",
    body: [
      `Lasan Grow is a sales CRM (customer relationship management) service provided by ${L.company} ("we", "us"), together with this website, lasangrow.com. A company that subscribes to Lasan Grow is our "Customer", and the people it gives access to are its "Users".`,
      "Under India's Digital Personal Data Protection Act, 2023 (the \"DPDP Act\"), the Customer decides why and how the personal data in its CRM workspace is processed and is the Data Fiduciary. We process that data on the Customer's behalf, as its Data Processor, and only on its instructions. For data about Users' accounts and the security of the service, and for enquiries sent to us through this website, we act as Data Fiduciary.",
    ],
  },
  {
    id: "collect",
    title: "Personal data we process",
    body: [
      "In the Lasan Grow service we process:",
      {
        list: [
          "User account details: name, work email address and role (owner, admin or member) within the Customer's workspace.",
          "Account security data: a securely hashed form of each password (never the password itself), the time of the last sign-in, failed sign-in counts used to lock out password guessing, and whether a temporary password still needs to be replaced.",
          "CRM records the Customer and its Users enter about their own customers and prospects, which may include people's names, email addresses, phone numbers, job titles, company names, cities and industries, lead sources, deal values and stages, and notes, calls, meetings and tasks.",
          "Workspace settings such as the company name, currency and sales pipeline stages.",
        ],
      },
      "On this website we do not use analytics, tracking or advertising tools, and we do not set cookies. The \"Request a free demo\" form does not send anything to our servers: it opens your own email app with a message addressed to us, and we receive only what you choose to send.",
      "We do not sell personal data, use it for advertising, or build profiles of people for any purpose of our own.",
    ],
  },
  {
    id: "purposes",
    title: "Why we process it",
    body: [
      {
        list: [
          "To provide the Lasan Grow service to the Customer: storing and showing its leads, deals, contacts, companies, activities and reports to its Users.",
          "To create and manage User accounts, sign Users in and keep the service secure, including locking accounts after repeated failed sign-ins.",
          "To set up, support and maintain the Customer's workspace.",
          "To reply to enquiries and demo requests sent to us.",
          "To meet our legal obligations.",
        ],
      },
      "The Customer is responsible for having a lawful basis to enter personal data about its own customers and prospects into Lasan Grow, and for giving those people any notices the law requires.",
    ],
  },
  {
    id: "access",
    title: "Who can see the data",
    body: [
      {
        list: [
          "Each Customer's data is kept in its own workspace. The database itself enforces this separation, so Users of one Customer can never see another Customer's records.",
          "Within a workspace, all Users can see the workspace's CRM records. Only owners and admins can change workspace settings, the sales pipeline and the team.",
          `Authorised ${L.company} staff may access a workspace only where needed to set up, secure or support the service, under confidentiality obligations.`,
          "Service providers that host and run our infrastructure, currently Vercel (website and application hosting) and Railway (database hosting), process data on our behalf under contract.",
          "Authorities, where we are required to disclose data by law.",
        ],
      },
    ],
  },
  {
    id: "location",
    title: "Where the data is stored",
    body: [
      "The Lasan Grow service and its database run on cloud servers in the United States. Data is encrypted in transit between your browser, our application and our database. By using the service, the Customer agrees to its data being stored and processed there, in line with the DPDP Act's rules on transfers outside India.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and local storage",
    body: [
      "The Lasan Grow app uses one cookie, which keeps a User signed in. It is marked secure, cannot be read by scripts on the page and expires after at most 30 days, or earlier when the User signs out or their password changes. Lasan staff using the platform console have a separate sign-in cookie that expires after 12 hours. A User's choice of white or black theme is stored in their own browser only.",
      "This website (lasangrow.com) sets no cookies. We do not use advertising or tracking cookies anywhere.",
    ],
  },
  {
    id: "security",
    title: "How we protect it",
    body: [
      {
        list: [
          "All connections are encrypted over HTTPS, including the connection to our database.",
          "Passwords are stored only as salted, one-way hashes.",
          "Each Customer's data is separated at the database level with row-level security, not only in the application.",
          "Five failed sign-ins lock an account for 15 minutes, and a password change or reset signs the User out of every other device.",
          "People given a temporary password must choose their own before they can use the service.",
          "Strict browser security policies are applied to every page.",
        ],
      },
      "No system is completely secure. If a personal data breach affects Customer data, we will inform the Customer without undue delay and the Data Protection Board of India as the DPDP Act requires.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: [
      `We keep a Customer's data for as long as its subscription is active. Users can delete individual records at any time, and a workspace owner can clear all of the workspace's CRM records from Settings. When a subscription ends, we delete the Customer's data within ${L.retentionAfterTermination}, unless the law requires us to keep some of it for longer. Demo requests and other emails sent to us are kept only as long as needed to respond and follow up.`,
    ],
  },
  {
    id: "rights",
    title: "Your rights",
    body: [
      "Under the DPDP Act you have the right to access a summary of your personal data, to have it corrected, completed or updated, to have it erased where it is no longer needed, to withdraw consent you have given, to nominate someone to exercise your rights if you cannot, and to have your grievances addressed.",
      "If your details are held in a Customer's CRM workspace, please contact that Customer first, as it controls that data; we will help it respond. For your Lasan Grow User account or anything you sent us through this website, contact us directly.",
    ],
  },
  {
    id: "grievance",
    title: "Contact and grievances",
    body: [
      `For privacy questions, requests or complaints, contact our Grievance Officer at ${L.email} or ${L.phone}. We will acknowledge your complaint and respond within the time limits set by law.`,
      "If you are not satisfied with our response, you may complain to the Data Protection Board of India.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: [
      "We may update this policy as the service or the law changes. The date at the top shows when it last changed, and we will tell Customers about significant changes before they take effect.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <LegalDocument
          title="Privacy Policy"
          updated={L.updated}
          intro={[
            "This policy explains what personal data Lasan Grow and this website process, why, who can see it, where it is kept and the rights you have.",
          ]}
          sections={SECTIONS}
        />
      </main>
      <SiteFooter />
    </>
  );
}
