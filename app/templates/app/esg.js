document.addEventListener('DOMContentLoaded',function(){
    //send a get resuqwest to the URL
    fetch('https://api.worldbank.org/v2/source/75/indicators')
    //put response into json form
    .then(response => response.json())
    .then(dara =>{
        //log data to the console
        console.log(data);
    })
})

