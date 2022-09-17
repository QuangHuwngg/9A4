var myVar=setInterval(function(){Clock()},1000);
function Clock() {
a=new Date();
w=Array("CN","T2","T3","T4","T5","T6","T7");
var a=w[a.getDay()],
w=new Date,
d=w.getDate();
m=w.getMonth()+1;
y=w.getFullYear();
h=w.getHours();
mi=w.getMinutes();
se=w.getSeconds();
if(10>d){d="0"+d}
if(10>m){m="0"+m}
if(10>h){h="0"+h}
if(10>mi){mi="0"+mi}
if(10>se){se="0"+se}
document.getElementById("clockDiv").innerHTML=""+d+"/"+m+"/"+y+" - "+h+":"+mi+":"+se+"";
}

async function getWeather(place, api_key) {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${api_key}&lang=vi`)
    return res.data
  }
  async function main() {
    const api_key = '62841c9fd78f4f0c1a6cc542345b7c5d'
    const place = 'Hanoi'
    const weather = await getWeather(place, api_key)
    document.getElementById('icon').src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather.weather[0].icon}.svg`
    document.getElementById('weather').innerHTML = `${weather.name} : ${weather.main.temp} ℃`
  }
  main()