const googleSearch=require('./script');
mockDb=[
    'cv.com',
    'xs.com',
    'za.com'
]
describe('Describe Google Search',()=>{
    it(
        'Google search',
        ()=>{
            expect(googleSearch('aa',mockDb)).toEqual([]);
            expect(googleSearch('cv',mockDb)).toEqual(['cv.com']);
        }
       
       )
       it('Null object',()=>{expect(googleSearch(null,mockDb)).toEqual([])
    })
    it('undefined object',()=>{expect(googleSearch(undefined,mockDb)).toEqual([])
    })
        
})
