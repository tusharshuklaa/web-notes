import React, { FC } from "react";

type TabProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  id: string;
  onClick: () => void;
};

export const Tab: FC<TabProps> = ({
  children,
  disabled = false,
  id,
  selected = false,
  onClick
}) => {
  const liClasses = [
    'tab',
    selected ? 'tab--active': '',
    disabled ? 'tab--inactive': '',
  ].join(' ')

  return (
    <li
      className={liClasses}
      role="tab"
      id={`tab_${id}`}
      aria-selected={selected ? 'true' : 'false'}
      aria-disabled={disabled ? 'true' : 'false'}
      aria-controls={`panel_${id}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};
