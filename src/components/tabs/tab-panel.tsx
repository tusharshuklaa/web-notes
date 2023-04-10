import React, { FC } from "react";

type TabPanelProps = {
  children?: React.ReactNode;
  selected?: boolean;
  id: string;
};

export const TabPanel: FC<TabPanelProps> = ({
  children,
  id,
  selected,
}) => {

  return (
    <div
      className={ selected ? 'tab__panel tab__panel--active' : 'tab__panel'}
      role="tabpanel"
      id={`panel_${id}`}
      aria-labelledby={`tab_${id}`}
    >
      {selected ? children : null}
    </div>
  );
};
