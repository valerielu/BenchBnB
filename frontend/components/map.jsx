import React from "react";
import MarkerManager from "../util/marker_manager.js";
import {withRouter} from "react-router";

const mapCenter = { lat: 37.7758, lng: -122.435 },
     //I made some lat/lng points for some good burrito spots
     benches = [
       { lat: 37.775785, lng: -122.445979, description: "Papalote" },
       { lat: 37.772045, lng: -122.437015, description: "The Little Chihuahua" },
       { lat: 37.781899, lng: -122.410426, description: "Cancun" }
     ];

class BenchMap extends React.Component{
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount(){
  // find the `<map>` node on the DOM
    const mapDOMNode = this.refs.map;

    // set the map to show SF

    const SF = new google.maps.LatLng(37.7758, -122.435);
    const mapOptions = {
      center: SF,
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    //adding idle event listener
      //we listen for the map to emit an 'idle' event, it does this when
      //the map stops moving
      //get the bounds as well and pass to the updateBounds method
    google.maps.event.addListener(this.map, 'idle', () => {
      const bounds = this.map.getBounds();
      // alert('map has moved, check console to see updated bounds');
      // console.log('center');
      // console.log(bounds.getCenter().lat(), bounds.getCenter().lng());
      // console.log("north east");
      // console.log(bounds.getNorthEast().lat(), bounds.getNorthEast().lng());
      // console.log("south west");
      // console.log(bounds.getSouthWest().lat(), bounds.getSouthWest().lng());
      let corners = {
        "northEast": {"lat": bounds.getNorthEast().lat(), "lng": bounds.getNorthEast().lng()},
        "southWest": {"lat": bounds.getSouthWest().lat(), "lng": bounds.getSouthWest().lng()}
      };
      this.props.updateBounds(corners);
      this.MarkerManager.updateMarkers(this.props.benches);
    });

    this.map.addListener('click', (e) => {
      const coords = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      this._handleClick(coords);
    });


    // add markers for the benches
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  _handleClick(coords){
    this.props.router.push({
      pathname: "benches/new",
      query: coords
    });
  }

  componentWillReceiveProps(nextProps) {
    this.MarkerManager.updateMarkers(nextProps.benches);
  }

  render() {
    return (
      <div id='map-container' ref='map'>

      </div>
    );
  }
}

export default withRouter(BenchMap);
