import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Modal, Paper, Typography } from '@mui/material';

const tabs = ['Breakfast', 'Lunch', 'Dinner'];

const url =
  'https://api.dineoncampus.com/v1/location/5b33ae291178e909d807593e/periods?platform=0&date=2023-1-15';

// Component that will only render if value === index (ie. tab is selected)
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export const Menu = (props) => {
  const { open, onClose } = props;

  const [tabSelected, setTabSelected] = useState(0);

  // State for fetching data directly
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleTabButtonPush = (event) => {
    setTabSelected(Number(event.target.id));
  };

  // Hook for fetching data directly
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((jsonData) => {
        const { menu } = jsonData;
        const { periods } = menu;
        const { categories } = periods;

        setData(categories);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  // breakfast menu array
  const menuItems = data.map((category) => {
    const { name, items } = category;

    return (
      <div key={name}>
        <div className="MenuCategory">
          <h3>{name}</h3>
        </div>
        {items.map((item) => {
          const { name } = item;

          return (
            <div key={name}>
              <Typography style={{ margin: '3px 1px 3px 25px' }}>{name}</Typography>
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <Modal style={{ margin: '20px 20px' }} open={open} onClose={onClose}>
      <Paper className="MenuPaper">
        <ul className="MenuTabs">
          {tabs.map((tab, index) => {
            return (
              <li
                className={tabSelected === index ? 'active' : ''}
                key={tab}
                id={index}
                onClick={handleTabButtonPush}
                style={{ width: '33.3%' }}>
                {tab}
              </li>
            );
          })}
        </ul>
        <div style={{ overflowY: 'scroll' }}>
          <TabPanel value={tabSelected} index={0}>
            {loading ? <CircularProgress /> : menuItems}
          </TabPanel>
          <TabPanel value={tabSelected} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={tabSelected} index={2}>
            Item Three
          </TabPanel>
        </div>
      </Paper>
    </Modal>
  );
};
