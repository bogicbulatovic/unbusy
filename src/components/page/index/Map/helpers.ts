import { LatLngBoundsExpression, LatLngExpression } from "leaflet";

const PodgoricaLatLng: LatLngExpression = [
  42.43736898801881, 19.26391931207956
];

const zoom = 14;

const maxBounds: LatLngBoundsExpression = [
  [42.56825298997905, 19.077758789062504],
  [42.73324366276087, 19.51529565645615],
  [42.24412340853564, 19.04151025606552],
  [42.3862909866993, 19.529028566612396]
];

export { PodgoricaLatLng, zoom, maxBounds };
