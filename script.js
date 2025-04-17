const apikey="7b5708a9a68d57537ffcb9b65398717e";
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchbtn=document.querySelector('.search button');
    const searchbox=document.querySelector('.search input');
    const weatherIcon=document.querySelector('.weather-icon')

    async function checkweather(city) {
        const response=await fetch(apiurl + city + `&appid=${apikey}`)

       if(response.status==404 || searchbox.value=='India'){
        document.querySelector('.weather').style.display='none';
        alert("Invalid City name");

       }else{         
        let data =await response.json();
        console.log(data);
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
        document.querySelector('.wind').innerHTML=data.wind.speed+'km/h';
         if(data.weather[0].main=='Clear'){
             weatherIcon.src='clear.png'
         }
        if(data.weather[0].main=='Mist'){
            weatherIcon.src='mist.png'
        }
        if(data.weather[0].main=='Snow'){
            weatherIcon.src='snow.png'
        }
        if(data.weather[0].main=='Rain'){
            weatherIcon.src='rain.png'
        }
        if(data.weather[0].main=='Clouds'){
            weatherIcon.src='cloud.png'
        }
        if(data.weather[0].main=='Drizzle'){
            weatherIcon.src='drizzle.png'
        }
        document.querySelector('.weather').style.display='block';

       }


    }

    searchbtn.addEventListener('click',()=>{
        checkweather(searchbox.value.trim());
    })
