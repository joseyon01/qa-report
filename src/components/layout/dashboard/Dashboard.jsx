import React from 'react';
import { Aside } from '../aside/Aside';
import { Header } from '../header/Header';
import '../aside/Aside.css'
import '../header/Header.css'

export const Dashboard = () => {
  return <div>
      <Header />
      <Aside />
  </div>
};
