import { Navbar } from "@/components/admin-panel/navbar";

interface ContentLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function ContentLayout({ title, description, children }: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} description={description} />
      <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>
  );
}
