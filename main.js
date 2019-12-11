


var search=document.getElementById("search");
search.addEventListener("keyup",e=>{
    e.preventDefault()
    if(e.keyCode===13){
        getCityName=e.target.value;
        getwheather(getCityName);
    }
    
});
function getwheather(getCityName){
    const weatherapi=`http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=ec7f3bad02d93f00b27b4b7035390aa4`
window.fetch(weatherapi).then(data=>{
   
    
    data.json().then(weather=>{
    console.log(weather);
    var name=(weather.name);
    var wind=(weather.wind.speed);
    var temp=(weather.main.temp);
    var mintemp=(weather.main.temp_min);
    var maxtemp=(weather.main.temp_max);
    var wheatherdata=weather.weather;
    var name=(weather.name)
     var op=[];
     
    for (let x of wheatherdata){


op +=`<div class="col-md-4 offset-4 mt-4 card">
<div class="card-body">
<h1 style="color:white">${name}</h1>
<h6>Time:</h2>
<span class="icon"> <img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
<p><span style="color:maroon;font-size:20px">Temp:</span>
<span class="temp">${temp}&deg;c</span></p>
<span class="des float-left">${x.description}</span></p>
<span class="des float-right">${x.main}</span></p>
</div>
</div>`;

document.getElementById("template").innerHTML=op;
    }
   
    })
    .catch(err=>console.log(err));
}).catch(err=>console.log(err))
};
