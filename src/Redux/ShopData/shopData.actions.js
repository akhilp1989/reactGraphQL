import shopDataConstants from './shopDataConstants'

export const updateCollections=(collectionsMap)=>({
    type:shopDataConstants.UPDATE_COLLECTIONS,
    payload:collectionsMap
})