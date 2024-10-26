import { ReactNode, useEffect } from "react";

interface PageWithTitleProps {
  title: string;
  children: ReactNode;
}

const PageWithTitle = ({ title, children }: PageWithTitleProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
};

export default PageWithTitle;
