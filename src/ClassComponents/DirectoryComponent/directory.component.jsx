import React  from 'react'
import './directory.styles.scss'
import {connect} from 'react-redux'
import MenuItem from '../../FunctionalComponents/MenuItem/menu-item.component'

const Directory = ({ sections }) => (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
   
    const mapStateToProps=state=>({
        sections:state.directoryReducer.sections
    })    
    

export default connect(mapStateToProps)(Directory)