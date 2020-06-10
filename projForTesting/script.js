const googleDatabase =[
    'abc.com',
    'cde.com',
    'fgh.com',
    'ijk.com'
]

const googleSearch=(searchInput,db)=>{
    const matches= db.filter(website=>{
        return website.includes(searchInput);
    })
    return matches.length>3?matches.slice(0,3):matches
}
module.exports=googleSearch;