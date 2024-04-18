window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getazurecounter.azurewebsites.net/api/getazurecounter?code=7plF7XJHf1mWzzcOWtPC0pMhg6ET6l4RWHhxXoPHMSRKAzFu_t0muQ==';
const localFunctionApi = 'http://localhost:7071/api/getazurecounter';

const getVisitCount = () => {
    let count = 30;   
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
