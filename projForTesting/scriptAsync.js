const fetch=require('node-fetch');
const getData =(fetch)=>{
    return fetch('https://swapi.py4e.com/api/people')
    .then(response=>response.json())
    .then(data=>{
        //console.log(data.count)
        return {
            count:data.count,
            result:data.result
        }
    })
}

getData(fetch)

module.exports=getData