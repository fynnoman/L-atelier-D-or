import FeedbackClient from "./FeedbackClient";

export const metadata = {
  title: "Feedback",
  description:
    "Un retour honnête sur la collection Roi. Ce que vous portez, ce qui pourrait être meilleur.",
  alternates: { canonical: "/feedback" },
};

export default function FeedbackPage() {
  return <FeedbackClient />;
}
