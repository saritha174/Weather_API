//Accessing the elements
const locationele = document.querySelector('#location');
const submit = document.getElementById('btn');
const ico = document.getElementById('icon');
const temperature = document.getElementById('temp');
const weather_info = document.getElementById('weather-info');
const location_info = document.getElementById('location-info');

//storing the api key
const apikey = '65c4df351d82d20007bae1d78df68096'
// submit.addEventListener('click',function(){})
//fucntionality 
submit.onclick=function(){
    if(locationele.value==''){
        alert('please enter the location')
    }
    else{
        let loca = locationele.value
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loca}&appid=${apikey}`
        //fetching the dta afrom the url and convert it into json format
        fetch(url).then(res=>res.json())
        //this is resolve state
        .then(data=>{
            console.log(data)
            const{name}=data
            const{temp} = data.main
            const{description} = data.weather[0]
            const{icon} = data.weather[0]
            location_info.innerText = name
            temperature.innerText = Math.floor(temp-273)
            weather_info.innerText = description
            ico.src = ` https://openweathermap.org/img/wn/${icon}@2x.png`
           
        })
        //reject state
        //.catch(()=>{
            //alert('Invalid location')
       // })
        locationele.value == ''
    }
}