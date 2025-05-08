import React from 'react';
import { Vitessce } from 'vitessce';
import { myViewConfig } from './my-view-config.js';

export default function App() {
  return (
    <Vitessce
      config={myViewConfig}
      theme="light"
    />
  );
}
