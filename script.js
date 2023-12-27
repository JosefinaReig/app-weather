let urlBase= 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '2c9f96c9c826d7079bcb9b391b9136cc' 
let diferenciaKelvin= 273.15 


document.getElementById('botonBusqueda').addEventListener('click',()=>{
    const ciudad= document.getElementById('ciudadEntrada').value 
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch( `${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response=> response.json())
    .then(response=>mostrarDatosClima(response))

}

function mostrarDatosClima(response){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML= ''

    const ciudadNombre= response.name
    const paisNombre= response.sys.country
    const temperatura = response.main.temp
    const descripcion = response.weather[0].description 
    const humedad = response.main.humidity
    const icono= response.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent=`${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo= document.createElement('p')
    temperaturaInfo.textContent= `The temperature is ${Math.floor(temperatura-diferenciaKelvin)} °C`

    const humedadInfo= document.createElement('p')
    humedadInfo.textContent= `Humidity: ${humedad} %`

    const descripcionInfo= document.createElement('p')
    descripcionInfo.textContent = `Today: ${descripcion}` 

    const iconoInfo= document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconoInfo)
    
}


