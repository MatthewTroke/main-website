import React, { Component } from "react";
import { Gmaps, Marker, InfoWindow, Circle } from "react-gmaps";
import { GOOGLE_MAPS_API_KEY } from "../secret";

const coords = {
  lat: 34.5362,
  lng: -117.2928
};

const params = { v: "3.exp", key: GOOGLE_MAPS_API_KEY };

class GoogleMap extends Component {
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log("onDragEnd", e);
  }

  onCloseClick() {
    console.log("onCloseClick");
  }

  onClick(e) {
    console.log("onClick", e);
  }

  render() {
    return (
      <Gmaps
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={"Be happy"}
        params={params}
        onMapCreated={this.onMapCreated}
      >
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd}
        />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={"Where I live :)"}
          onCloseClick={this.onCloseClick}
        />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={1500}
          onClick={this.onClick}
        />
      </Gmaps>
    );
  }
}

export default GoogleMap;
