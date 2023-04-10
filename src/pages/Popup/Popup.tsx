import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from '../../components/index';
import { PageNotes } from '../../components/page-notes/page-notes';
import { getData, saveData } from '../../utils';
import './Popup.scss';

const Popup = () => {
  const [activeTabId, setActiveTabId] = useState('__currentWN');
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    saveData('Hello').then((data) => {
      console.log(data);
      getData().then((data) => {
        console.log(data);
        if (data) {
          setAllNotes(JSON.parse(data as string));
        }
      });
    });
  }, []);

  const getSelectedTab = (id: string) => activeTabId === id;
  const onTabClick = (id: string) => {
    setActiveTabId(id);
  };
  const sections = [
    {
      name: 'On This Page',
      id: '__currentWN',
      component: <PageNotes notes={ allNotes } />
    },
    {
      name: 'All Notes',
      id: '__allPagesWN',
      component: null,
    }
  ];

  const tabs = sections.map(s => <Tab
    key={ s.id }
    id={ s.id }
    onClick={() => { onTabClick(s.id) }}
    selected={getSelectedTab(s.id)}
    >
      { s.name }
    </Tab>
  );

  const tabPanels = sections.map(s => <TabPanel key={s.id} id={s.id} selected={getSelectedTab(s.id)}>{ s.component }</TabPanel>);

  return (
    <div className="webnotes">
      <Tabs>
        { tabPanels }
        <TabList>{ tabs }</TabList>
      </Tabs>
    </div>
  );
};

export default Popup;
