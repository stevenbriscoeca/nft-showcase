import React, { useEffect, useState } from "react";

import NftItem from "../components/ntf-item";

import { fetchCollections } from "../services/opensea";

export default function Homepage() {
  const [nftsCollection, setNtfsCollection] = useState<any[]>([]);

  useEffect(() => {
    fetchCollections().then((json) => {
      const filteredCollections = json.collections.filter(hasImage);
      setNtfsCollection(filteredCollections);
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
      {nftsCollection.map((nft) => (
        <NftItem
          key={nft.slug}
          name={nft.name}
          image={nft.image_url}
          url={buildURL(nft.slug)}
        ></NftItem>
      ))}
    </div>
  );
}
