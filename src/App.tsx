import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NftItem from "./components/ntf-item";

import { fetchCollections } from "./services/opensea";

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchCollections().then((json) => {
      setData(json.collections);
    });
  }, []);

  function buildURL(slug: string) {
    return `https://opensea.io/collection/${slug}`;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item) => (
        <NftItem
          key={item.slug}
          name={item.name}
          image={item.image_url}
          url={buildURL(item.slug)}
        ></NftItem>
      ))}
    </div>
  );
}

export default App;
