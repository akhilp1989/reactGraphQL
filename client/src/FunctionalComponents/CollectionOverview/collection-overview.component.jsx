import React from 'react'
import './collection-overview.styles.scss'
import CollectionPreview from '../CollectionPreview/collection-preview'

const CollectionsOverview = ({collections}) => {
  // //console.log(Object.values(collections).find(x=>x.id===1))
  // console.log('Hello->',collections)
  
 return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )};
  
  
export default CollectionsOverview