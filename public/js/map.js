//public Key = prj_live_pk_ece2ead1642bdee58eb54b66ca96c5c3a2c2f3bf

let getBookStoreLocations = (lat, lon) => {
    let url = `https://api.radar.io/v1/search/autocomplete?query=book+store&near=${lat}%2C${lon}&radius=10`
    fetch(url, {
        method: 'GET',
        headers:{
            'Authorization': 'prj_test_pk_249fc40790f5bc22f5b3d967a327039ac0276360',
        },
    }).then((response) =>{
        response.json().then((data)=>{
            console.log(data)
            var coord1 = data.addresses[0].latitude;
            var coord2 = data.addresses[0].longitude;
            coord1 = JSON.stringify(coord1);
            coord2 = JSON.stringify(coord2);
        })
    })
}

navigator.geolocation.getCurrentPosition((position) => {

    let coords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    }
    console.log(coords)
    let map = L.map('map').setView([coords.lat, coords.lon], 13);
    console.log(map)

    let tile = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    getBookStoreLocations(lat, lon)
    let marker1 = L.marker([lat, lon]).addTo(map);
    // let marker3 = L.marker([40.66993391211563, -73.97963762499475]).addTo(map);
    // let marker4 = L.marker([40.66544182272006, -73.98041010114427]).addTo(map);
    // let marker5 = L.marker([40.67390492755527, -73.97654772039665]).addTo(map);
    // let marker7 = L.marker([40.67429550646303, -73.99431467183574]).addTo(map);
})

