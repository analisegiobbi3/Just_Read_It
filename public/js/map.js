let map;
let coord1;
let coord2;
let coordArray =[]

navigator.geolocation.getCurrentPosition((position) => {
    let coords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    }
    map = L.map('map').setView([coords.lat, coords.lon], 13);

    let tile = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    getBookStoreLocations(coords.lat, coords.lon)

})

//public Key = prj_live_pk_ece2ead1642bdee58eb54b66ca96c5c3a2c2f3bf

let getBookStoreLocations = (lat, lon) => {
    let url = `https://api.radar.io/v1/search/autocomplete?query=books&near=${lat}%2C${lon}&radius=5`
    fetch(url, {
        method: 'GET',
        headers:{
            'Authorization': 'prj_test_pk_249fc40790f5bc22f5b3d967a327039ac0276360',
        },
    }).then((response) =>{
        response.json().then((data)=>{
            console.log(data)
            var locationArray = data.addresses
            for(let i=0; i<locationArray.length; i++){
                coord1 = data.addresses[i].latitude;
                coord2 = data.addresses[i].longitude;
                coord1 = JSON.stringify(coord1);
                coord2 = JSON.stringify(coord2);
                console.log(coord1)
                console.log(coord2)
                var marker = L.marker([coord1, coord2]).addTo(map)
                console.log(marker)
            }

        })
    })
}

