const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name')
const submitBtn = document.getElementById('submitBtn')
const temp_real_val = document.getElementById('temp_real_val')
const datahide = document.querySelector('.middle_layer')
const temp_status = document.getElementById('temp_status');
const getInfo = async (event) => {
    event.preventDefault();
    let cityval = cityname.value;
    if (cityval === "") {
        city_name.innerText = `Plz write the name before search`
        datahide.classList.add('data_hide')
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=5a587bd979ff226a70f7c51eab14f311`
            const response = await fetch(url);
            const data = await response.json()
            const arrdata = [data];
            city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
            temp_real_val.innerText = arrdata[0].main.temp
            // temp_status.innerText = arrdata[0].weather[0].main;
            // console.log(data);
            const tempMood = arrdata[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML = 
                "<i class = 'fas fa-sun'style='color: #eccc68;'></i>"
            } else if(tempMood == 'Clouds'){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            }
            else{
                temp_status.innerHTML = 
                "<i class = 'fas fa-cloud'style='color: #f1f2f6;'></i>"
            }

            datahide.classList.remove('data_hide');

        }
        catch{
            city_name.innerText = 'Plz enter the city name correctly'
            datahide.classList.add('data_hide');
        }

    }
}

submitBtn.addEventListener('click', getInfo)