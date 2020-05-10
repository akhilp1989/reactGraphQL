import React from 'react'
import {Route} from 'react-router-dom'
import CollectionPage from '../../FunctionalComponents/Collection/collectionPage.component'

import CollectionOverview from '../../FunctionalComponents/CollectionOverview/collection-overview.component'

const ShopComponent =({match})=>{
   // console.log('Match',match)
    return (
        <div className='shop-page'>
        <Route exact path={`${match.path}`} component ={CollectionOverview} /> 
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
        </div>
        
    )
    
}


export default ShopComponent