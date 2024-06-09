import React from 'react';
import { load } from '@2gis/mapgl';

const MapWrapper = React.memo(
  () => {
      return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
  },
  () => true,
);

export const Map = () => {
    React.useEffect(() => {
        let map;
        load().then((mapglAPI) => {
          map = new mapglAPI.Map('map-container', {
            center: [44.473865, 44.035175],
            zoom: 19,
            key: 'cb20c5bf-34d3-4f0e-9b2b-33e9b8edb57f',
          });
          const marker = new mapglAPI.Marker(map, {
            coordinates: [44.473865, 44.035175],
          });
        });

        // Удаляем карту при размонтировании компонента
        return () => map && map.destroy(); 
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
};