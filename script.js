let apiKey='168e4d92ee51bb859d3f4f6a00c9b636';
let apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
let ima=document.querySelector('#wa');

async function checkWeather(city){
    let response= await fetch(apiUrl+city+`&appid=${apiKey}`);

 

    let data = await response.json();
    console.log(data);

    //   if city not found
   if (data.cod=='404')
    {
    document.querySelector('.weather').style.display='none';
    document.querySelector('.error').style.display='block';
   }
   else
   { document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=data.main.temp+'°C';
     document.querySelector('.hp').innerHTML=data.main.humidity+'%';
     
     document.querySelector('.sp').innerHTML=data.wind.speed+' km/h';
      if (data.weather[0].main == 'Clouds') {
    ima.src = './images/clouds.png';
  } else if (data.weather[0].main == 'Rain') {
    ima.src = './images/rain.png';
  } else if (data.weather[0].main == 'Clear') {
    ima.src = './images/clear.png';
  } else if (data.weather[0].main == 'Drizzle') {
    ima.src = './images/drizzle.png';
  } else if (data.weather[0].main == 'Mist') {
    ima.src = './images/mist.png';
  }
  document.querySelector('.weather').style.display='block';
    document.querySelector('.error').style.display='none';
   }
}
 

  let cityName=document.querySelector('#inn');

//    //  take input  from search btn
//    function takeInput(){
//     let cityName=document.querySelector('#inn');

//  cityName.addEventListener('input',function(evt){
//     console.log(evt.target.value);
//     if(evt.target.value.trim()==='')
//         checkWeather('udaipurwati');
//     else
//     checkWeather(evt.target.value);
// })
// }
let searchBth=document.querySelector('button');

    searchBth.addEventListener('click',function(){
        checkWeather(cityName.value);
    })

let inpu = document.querySelector('#inn');

    inpu.addEventListener('keydown',(e)=>{
      if(e.keyCode == 13)
        checkWeather(cityName.value);
    })