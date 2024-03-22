import { Suspense } from "react";
import Loading from "../loading";

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flex flex-col items-center justify-center`}>
      Form page
      {children}
    </div>
  );
}
