const submitBtn=document.getElementById("submitBtn");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const temp_value=document.getElementById("temp_value");
const temp_status=document.getElementById("temp_status");
const datahide=document.querySelector(".middle_layer");
const getInfo= async (event)=>{
   event.preventDefault();
   let cityVal=cityName.value;
   
   if(cityVal===""){
       city_name.innerText="Please enter city name before search";
       datahide.classList.add("data_hide");
   }
   else{
      try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=517a85a46c79d39b37654c0392af6403`;
        const response=await fetch(url);
        const data=await response.json();
        city_name.innerText=`${data.name},${data.sys.country}`;
        temp_value.innerText=data.main.temp;
        let tempMood= data.weather[0].main;
        if(tempMood=="Clear"){
            temp_status.innerHTML=
            `<i class="fas fa-sun" style="color : #eccc68"></i>`;
        }
        else if(tempMood=="Clouds"){
            temp_status.innerHTML=
            `<i class="fas fa-cloud" style="color : #f1f2f6"></i>`
        }
        else if(tempMood="Drizzle" || tempMood=="Rain"){
            temp_status.innerHTML=
            `<i class="fas fa-cloud-rain" style="color : #a4b0be"></i>`
        }
        else{
      temp_status.innerHTML=
      `<i class ="fas fa-sun" style ="color : #eccc68"</i>`;
        }
        datahide.classList.remove("data_hide");
      }
      catch{
          city_name.innerText="Please enter a valid city name";
          datahide.classList.add("data_hide");
      }
   }
}
submitBtn.addEventListener('click',getInfo);