import { Tab, Tabs } from '@mui/material';
import React from 'react';
import { useNetwork } from 'src/hooks/useNetwork';

import PolygonIcon from '../Icons/PolygonIcon';

const tabs = [
  { id: 'polygon', title: 'Polygon', icon: <PolygonIcon /> },
  // { id: 'rinkeby', title: 'Ethereum Rinkeby', icon: <PolygonIcon /> },
  { id: 'moonbeam', title: 'Moonbeam', icon: <PolygonIcon /> },
];

export default function NetworkTabs() {
  const { networkId, switchNetwork } = useNetwork();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    switchNetwork(newValue);
  };

  return (
    <Tabs sx={{ my: '44px' }} value={networkId} onChange={handleChange}>
      {tabs.map(({ id, title, icon }) => (
        <Tab
          key={id}
          value={id}
          icon={icon}
          iconPosition="start"
          label={title}
          sx={{ textTransform: 'none' }}
        />
      ))}
    </Tabs>
  );
}
