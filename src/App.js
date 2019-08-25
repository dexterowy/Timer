import React from 'react';

import PageWrapper from './PageWrapper';
import Navbar from './Navigation/NavBar';
import Timer from './Timer/Timer';



function App() {
  return (
    <PageWrapper>
      <Navbar />
      <Timer />
    </PageWrapper>
  );
}

export default App;
