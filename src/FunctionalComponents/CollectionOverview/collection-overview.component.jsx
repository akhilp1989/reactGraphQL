import React from 'react'
import './collection-overview.styles.scss'
import CollectionPreview from '../CollectionPreview/collection-preview'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../Redux/ShopData/shopDataMap.selector'


const CollectionsOverview = ({ collections }) => {
  // console.log(Object.values(collections).find(x=>x.id===1))
  // console.log((collections))
 return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )};
  
  const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  });
export default connect(mapStateToProps)(CollectionsOverview)