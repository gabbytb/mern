import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";
const geoUrl = "/features.json";
const colorScale = scaleLinear().domain([ 0.29, 0.68 ]).range([ "#A9BDFF", "#3c50e0" ]);









const MapChart = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  
  return (
      <ComposableMap projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }}>
          
          <Sphere stroke="#FFFFFF" strokeWidth={0.5} />
          <Graticule stroke="#FFFFFF" strokeWidth={0.5} />
        
          {data.length > 0 && (
              <Geographies geography={geoUrl}>
                  {
                      ({ geographies }) => geographies.map((geo) => {
  
                          const d = data.find((s) => s.ISO3 === geo.id);
          
                          return (
                              <Geography key={geo.rsmKey} geography={geo} fill={d ? colorScale(d["2017"]) : "#3c50e0"} />
                          );
                      })
                  }
              </Geographies>
          )}
      </ComposableMap>
  );
};



export default MapChart;