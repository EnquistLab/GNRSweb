import { useState } from "react";

import {
  Layout,
  SearchBox,
  ResolveTable,
} from "../components/";
import { requestResolveNames } from "../actions/";

export default function Index() {
  const [resolvedNames, setResolvedNames] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleResolveNames = async (names) => {
    // clear the table after submiting
    setResolvedNames([]);
    // show spinner
    setIsProcessing(true);

    // resolve the names
    let resolvedNames = await requestResolveNames(names);
    setResolvedNames(resolvedNames);

    // hide spinner
    setIsProcessing(false);
  };

  return (
    <Layout>
      <SearchBox onSubmit={handleResolveNames} isProcessing={isProcessing} />
      <ResolveTable tableData={resolvedNames} />
    </Layout>
  );
}
