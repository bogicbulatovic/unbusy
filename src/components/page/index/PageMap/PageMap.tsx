import React from "react";
import * as s from "./styles";
import dynamic from "next/dynamic";
import { patchLeaflet } from "./patch";
import "leaflet/dist/leaflet.css";
import { initMocksService } from "../../../../mocks";

// react-leaflet does not support ssr
const Map = dynamic(
  async () => {
    await Promise.all([patchLeaflet(), initMocksService()]);

    return import("../Map/Map");
  },
  { ssr: false }
);

const PageMap: React.FC = () => {
  return (
    <s.Root>
      <Map />
    </s.Root>
  );
};

export { PageMap };
