import * as React from 'react';
import './contentItem.scss';

const ContentItem = (props : ContentItemProps) => (
  <div className="content-item">
    <div className="overlay">{ props.label }</div>
    { props.imgUrl && <img src={ props.imgUrl }></img> }
  </div>
);

type ContentItemProps = {
  label?: string;
  imgUrl?: string; // 👈️ required
};

export default ContentItem;