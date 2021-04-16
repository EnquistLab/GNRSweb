import React from 'react';

import {Layout, SearchBox} from '../components/'
import {requestResolveNames} from '../actions/'

export default function Index() {
  return (
    <Layout>
      <SearchBox />
      
      Test layout
    </Layout>
  );
}
