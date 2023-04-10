import React, { FC } from "react";

type TabListProps = {
  children?: React.ReactNode;
};

export const TabList: FC<TabListProps> = ({ children }) => (
  <ul className="tab__nav" role="tablist">
    {children}
  </ul>
);
