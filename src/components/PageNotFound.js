import React from 'react';
import img404 from '../static/images/404Error.jpg';

export default function() {
  return (
    <div>
      <img alt={'task cannot be found'} style={imageStyles} src={img404} />
    </div>
  );
}

const imageStyles = {
  width: '800px',
  marginLeft: '50%',
  transform: 'translateX(-50%)',
};
