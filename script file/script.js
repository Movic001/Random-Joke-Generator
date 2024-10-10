
function getLocation (){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        alert('your browser cannot fetch this location')
    }
    function showPosition(position){
        console.log('longitude', position.coord.longitude + "latitude:" + position.coords.latitude);
    }
   
}
        getLocation ()

let display=document.getElementById('display');
async function randomeJoke(Joke){
    try{
        if(Joke==='random'){
            const data=await fetch('https://official-joke-api.appspot.com/jokes/general/random',{method:'GET'});
            const result=await data.json();
            display.innerHTML=`
            <h1>${'Type: '+ result[0].type}</h1>
            <h3>${'Id: '+ result[0].id}</h3>
            <h3>${'Question: '+ result[0].setup}</h3>
            <h3>${'Responds: '+ result[0].punchline}</h3>
            `
        }
        else if(Joke==='programming'){
            const data=await fetch('https://official-joke-api.appspot.com/jokes/programming/random', { method: 'GET' });
        
            const result=await data.json();
            display.innerHTML=`
            <h1>${'Type: '+ result[0].type}</h1>
            <h3>${'Id: '+ result[0].id}</h3>
            <h3>${'Question: '+ result[0].setup}</h3>
            <h3>${'Responds: '+ result[0].punchline}</h3>
            `
        }
        else if(Joke==='knock'){
            const data=await fetch('https://official-joke-api.appspot.com/jokes/knock-knock/random', { method: 'GET' });
            const result=await data.json();
            display.innerHTML=`
            <h1>${'Type: '+ result[0].type}</h1>
            <h3>${'Id: '+ result[0].id}</h3>
            <h3>${'Question: '+ result[0].setup}</h3>
            <h3>${'Responds: '+ result[0].punchline}</h3>
            `
        }
    }
    catch(error){
        console.log('error: ',error)
    }
}