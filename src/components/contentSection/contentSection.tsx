import * as React from 'react';
import ContentItem from './contentItem/contentItem';
import './contentSection.scss' 
import swordSoul from "../../assets/images/SwordsoulSupremeSovereignChengying-OW.png";
import blueEyes from "../../assets/images/362a0-16430841451113-1920.png";


const ContentSection = () => (
  <div className='content-section'>
    <ContentItem imgUrl={ swordSoul } label="Decks"/>
    <ContentItem imgUrl={ blueEyes }/>
    <ContentItem imgUrl={ blueEyes }/>
    <ContentItem imgUrl={ swordSoul }/>
  </div>
)

export default ContentSection