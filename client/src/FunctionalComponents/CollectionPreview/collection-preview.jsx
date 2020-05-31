import React from 'react'
import CollectionItem from '../CollectionItem/collection-item.component'
import './preview-collection.styles.scss'
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items, history, match }) => (
    <div className='collection-preview'>
      <h1
        className='title'
        onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
  
  export default withRouter(CollectionPreview);