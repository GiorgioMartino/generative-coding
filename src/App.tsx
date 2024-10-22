import '@mantine/core/styles.css';

import React from 'react';
import { MantineProvider } from '@mantine/core';
import Bubbles from '@/sketches/bubbles/bubbles';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Bubbles />
    </MantineProvider>
  );
}
