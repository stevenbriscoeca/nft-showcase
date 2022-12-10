import React, { useEffect, useState } from "react";

import NftItem from "../components/ntf-item";

import { fetchCollections } from "../services/opensea";

export default function Homepage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchCollections().then((json) => {
      const filteredCollections = json.collections.filter(hasImage);
      console.log(filteredCollections);
      setData(filteredCollections);
    });
  }, []);

  function buildURL(slug: string) {
    return `https://opensea.io/collection/${slug}`;
  }

  function hasImage(collection: any) {
    if (collection.image_url !== null) {
      return collection;
    }
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
