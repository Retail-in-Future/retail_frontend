import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';

const devTools = createDevTools(
  <DockMonitor toggleVisibilityKey="v" defaultIsVisible={false} changePositionKey="c">
    <LogMonitor />
  </DockMonitor>,
);
export default devTools;
