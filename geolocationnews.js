

getWeather = () => {
    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "c0c1fb6318fb7853720db372fb06c4ad";
    var q = document.getElementById("mySearch").value
    var url = api + "?q=" + q + "&appid=" + apiKey
    fetch(url).then(res => res.json()).then(res => { document.getElementById("details").innerHTML = "The sky is :" + res.weather[0].main })


}

getNews = () => {
    var q = document.getElementById("mySearch").value 
    let api= "https://gnews.io/api/v4/search"
    let apikey = "b2e96ba5311542d6a4fafc8e118ba3a4"
    var url = api+"?q="+q+"&token="+apikey
    fetch(url).then(res=>res.json()).then(res=>{res.articles.forEach(element => {
        var table= document.getElementById('newsTable')
        var tr= document.createElement('tr')
        tr.setAttribute("id","newsTitle")
        document.getElementById("newsTitle")
        var td1 = document.createElement('td')
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')
       
       
        td1.innerHTML = element.title
        td2.innerHTML = element.content
        td3.innerHTML = "<img src="+element.image+">"
        
       tr.appendChild(td1)
       tr.appendChild(td2)
       tr.appendChild(td3)
       
       table.appendChild(tr)

        
        
    });})



}
console.log('i am clicked ')

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    let longitude = crd.longitude
    let latitude = crd.latitude





}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options)







