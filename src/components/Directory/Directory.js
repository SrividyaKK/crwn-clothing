import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../../pages/MenuItem/MenuItem';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import './Directory.scss';

const Directory = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...otherProps }) => (
                    <MenuItem key={id} {...otherProps} />
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory);