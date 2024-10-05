import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import EnquiriesPage from "@/components/EnquiriesPage";

export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <EnquiriesPage />
    </DefaultLayout>
  );
};

export default CalendarPage;
