const row = document.querySelector(`.row`);
const search =document.querySelector(`#search`);
const searchInput =document.querySelector(`#searchInput`);
const submit =document.querySelector(`#submit`);
const area = document.querySelector('#area');
const flag=document.querySelector(`.flag`);
const temp =document.querySelector(`#temp`);
const capital =document.querySelector(`#capital`)

const handleSearch = () => {
    const value = searchInput.value
    console.log(value, 'value')
    fetch(`https://restcountries.com/v3.1/name/${value}`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data , 'data')
            //
            area.innerHTML = data[0].area
            flag.src=data[0].flags.png
            capital.innerHTML=data[0].capital

            fetch(`http://api.weatherapi.com/v1/current.json?key=4b9538e90e4c4ee49d860744230811&q=${data[0].capital}`)
                .then(response =>response.json())
                .then(data =>{
                    console.log(data, 'weather')
                    temp.innerHTML = data.current.temp_c
                })
        })
}

submit.addEventListener('click', () => handleSearch())
searchInput.addEventListener('keydown',function (event){
    if(event.key===`Enter`){
        handleSearch()
    }
})