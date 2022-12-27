import * as React from 'react';
import { styled } from '@mui/system';
import { TabContext, TabPanel } from '@mui/lab';
import { Tab, Tabs, Box, Paper, Stack, useScrollTrigger, Slide } from '@mui/material';
import JioCardList from '../jios/list/allJios';
import { useSearchParams } from 'react-router-dom';
import useAddToHomeScreen from 'src/hooks/useAddToHomeScreen';
import GymSearch from './search';
import GymCard from './list/GymCard';
import FloatingContainer from '../../../components/FloatingContainer';

export default function Gyms() {
  useAddToHomeScreen();

  const dummyGym = {
    name: 'BlocHead',
    logoUrl: 'dummy url',
    gymLocations: [
      {
        isClosed: false,
        gymId: 123,
        name: 'BlocHead Bedok',
        address: 'Bedok North Road',
      },
      {
        isClosed: false,
        gymId: 321,
        name: 'BlocHead Aljunied',
        address: 'Aljunied Address',
      },
    ],
  };

  return (
    <Box sx={{ pt: 2, pb: 20, minHeight: '100vh', maxWidth: 600, margin: '0 auto' }}>
      <FloatingContainer>
        <Paper
          elevation={1}
          sx={{
            zIndex: 1000,
            margin: '0 auto',
            width: '100vw',
            maxWidth: '600px',
            px: 2,
            borderRadius: 0,
          }}
        >
          <GymSearch />
        </Paper>
      </FloatingContainer>
      {/* Open Jios Tab */}
      <Box sx={{ height: 75 }} />
      {/* <JioCardList /> */}
      <GymCard data={dummyGym} />
    </Box>
  );
}
