import {useState} from 'react';

import {Layout, SearchBox, ResolveTable } from '../components/'
import { requestResolveNames } from '../actions/'

export default function Index() {
  const [resolvedNames, setResolvedNames] = useState([])
  const [isProcessing, setIsProcessing] = useState(false)

  const handleResolveNames = async (names) => {
    setIsProcessing(true)
    let resolvedNames = await requestResolveNames(names)
    setResolvedNames(resolvedNames )
    setIsProcessing(false)
  }

  return (
    <Layout>
      <SearchBox onSubmit={handleResolveNames} isProcessing={isProcessing}/>
      <ResolveTable tableData={resolvedNames} />
    </Layout>
  );
}
