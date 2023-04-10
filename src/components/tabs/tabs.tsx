import React, { FC } from "react";
import './tabs.scss';

const TabPages = {
  current: {
    id: '__currentWN',
    title: 'This Page'
  },
  all: {
    id: '__allNotesWN',
    title: 'All Notes'
  }
};

type TabsProps = {
  children: React.ReactNode;
};

export const Tabs: FC<TabsProps> = ({ children }) => (<div className="tab__container">{ children }</div>);
