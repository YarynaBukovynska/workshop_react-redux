import React, { useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MAP_STYLE from './styles.json';
import { useDispatch, useSelector } from 'react-redux';
import { INITIAL_VIEWPORT, TODAY, TOKEN } from './constants';
import { loadData } from '../../actions';
import MarkerItem from '../MarkerItem';

const Map = () => {
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
  const dispatch = useDispatch();
  const markers = useSelector(state => state.markers.markers);

  useEffect(() => {
    dispatch(loadData(TODAY()));
  }, [dispatch]);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      onViewportChange={setViewport}
      mapStyle={MAP_STYLE}
    > 
      {markers.map(marker => (
        <MarkerItem key={marker.id} marker={marker} />
      ))}
    </ReactMapGL>
  );
};

export default Map;
