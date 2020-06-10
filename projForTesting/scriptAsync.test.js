const fetch= require('node-fetch');
const getData =require('./scriptAsync');


it('calls API to get data',()=>{
    return getData(fetch).then(data=>{
        expect(data.count).toEqual(87)
        
    })
})