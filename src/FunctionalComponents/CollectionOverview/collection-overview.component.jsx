import React from 'react'
import './collection-overview.styles.scss'
import CollectionPreview from '../CollectionPreview/collection-preview'
import {connect} from 'react-redux'

const collectionOverview =({collections})=>{
    return(
        <div className='collections-overview'>
             {
            collections.map(({id,...otherItems}) => (
                <CollectionPreview key={id} {...otherItems} />
                ))
        }
        </div>
       
    )
}

const mapStateToProps=(state)=>({
    collections:state.shopData.SHOP_DATA
})

export default connect(mapStateToProps)(collectionOverview)