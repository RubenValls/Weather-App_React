import React from 'react';

const Map = (props) => {

    const mapLink = `https://maps.google.com/maps?q=${props.lat},${props.long}&output=embed`;

    return (
        <div class="container mt-5">
            <iframe title="GoogleMap" src={mapLink} height="400px" class="w-100"></iframe>
        </div>
    );
}

export default Map;
