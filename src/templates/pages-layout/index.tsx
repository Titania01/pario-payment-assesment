import React, { Children, ReactNode } from "react";
import TopBackground from "../../vectors/top-page-background";
import { BackgroundWrapper, LayoutWrapper } from "./page-layout";

const PageLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <LayoutWrapper>
      <BackgroundWrapper>
        <TopBackground />
      </BackgroundWrapper>
      <main>
        <div className="children">{children}</div>
      </main>
    </LayoutWrapper>
  );
};

export default PageLayout;
