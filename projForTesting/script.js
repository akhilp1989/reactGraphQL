const googleDatabase =[
    'abc.com',
    'cde.com',
    'fgh.com',
    'ijk.com'
]

const googleSearch=(searchInput)=>{
    const matches= googleDatabase.filter(website=>{
        return website.includes(searchInput);
    })
    return matches.length>3?matches.slice(0,3):matches
}