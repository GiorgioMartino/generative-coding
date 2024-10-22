import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import React from "react";
import Bubbles from "@/sketches/bubbles/bubbles";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Bubbles/>
    </MantineProvider>
  );
}
