class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._benchesToAdd = this._benchesToAdd.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  _benchesToAdd(benches){

    const MarkerIds = this.markers.map(marker => marker.benchId);

    let newBenches = [];
    benches.forEach(bench => {
      if (!MarkerIds.includes(bench.id)) {
        newBenches.push(bench);
      }
    });

    return newBenches;
  }

  _createMarkerFromBench(bench) {
    const benchPos = new google.maps.LatLng(bench.lat, bench.lng);
    const benchMarker = new google.maps.Marker({
      position: benchPos,
      map: this.map,
      benchId: bench.id
    });
    benchMarker.setMap(this.map);
    this.markers.push(benchMarker);
  }

  _markersToRemove(benches) {
    const benchIds = benches.map(bench => bench.id);
    let markersToRemove = [];
    this.markers.forEach(marker => {
      if (!benchIds.includes(marker.benchId)) {
        markersToRemove.push(marker);
      }
    });
    return markersToRemove;
  }

  _removeMarker(marker) {
    marker.setMap(null);
    let idx = this.markers.indexOf(marker);
    this.markers.splice(idx, 1);
  }

  updateMarkers(benches){
    this._benchesToAdd(benches).forEach(bench => (
      this._createMarkerFromBench(bench)
    ));

    this._markersToRemove(benches).forEach(marker => (
      this._removeMarker(marker)
    ));

  }
}

export default MarkerManager;
