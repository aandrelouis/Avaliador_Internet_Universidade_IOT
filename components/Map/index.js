import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import "leaflet-defaulticon-compatibility";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { useState } from 'react';


export default function Map({ center, markers, localId ,setLocalId}){
  
    function handleMarkerClick(id){
        if(localId == id){
            setLocalId(0);
        }
        else{
            setLocalId(id);
        }
    }
    
    return (
        <MapContainer 
            center={center} 
            zoom={30} 
            style={{ width: '100%', height: '100%' }}
            
            >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {
                markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        position={[marker.lat, marker.lng]}
                        eventHandlers={{
                            click: () => {
                                handleMarkerClick(marker.id);
                            }
                        }}
                    >
                        <Popup>
                            <h3>{marker.name}</h3>
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <input 
                                    style={{
                                        minWidth: '20px',
                                        minHeight: '20px',
                                        margin: '0 10px'
                                    }}
                                    type="checkbox"
                                    readOnly
                                    checked={localId === marker.id}
                                    onClick={() => handleMarkerClick(marker.id)}
                                />
                            </div>
                        </Popup>
                    </Marker>
                ))
            }
      </MapContainer>
    )
}
