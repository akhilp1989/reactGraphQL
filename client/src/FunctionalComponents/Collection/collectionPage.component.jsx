import React from 'react'
import   './collection.styles.scss'
import {connect} from 'react-redux'
import CollectionItem from '../CollectionItem/collection-item.component'
import { selectCollection } from '../../Redux/ShopData/shopDataMap.selector'



const CollectionPage = ({ collection }) => {
    console.log(collection)
    const { title, items } = collection;
    return (
      <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='itemsCollection'>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };
  
  
  const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  });
  
  export default connect(mapStateToProps)(CollectionPage);