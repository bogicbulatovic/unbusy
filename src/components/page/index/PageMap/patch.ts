const patchLeaflet = async () => {
  const L = (await import("leaflet")).default;
  // https://github.com/Leaflet/Leaflet/issues/4968#issuecomment-269750768
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/leaflet_images/marker-icon-2x.png",
    iconUrl: "/leaflet_images/marker-icon.png",
    shadowUrl: "/leaflet_images/marker-shadow.png"
  });
};

export { patchLeaflet };
