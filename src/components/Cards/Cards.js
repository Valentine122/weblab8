import React from "react";
import CardItem from "./CardItem";
import { Button } from "../Button/Button";
import {CardContainer, CardWrapper, CardItems} from "./Cards.styled";

function Cards() {
  return (
    <>
      <h1 style={{marginTop: "60px", textAlign: "center", color: "#254e58" }}>Check out these EPIC STUFF!</h1>
      <CardContainer>
        <CardWrapper>
          <CardItems>
          <CardItem
              src="images/1.jpg"
              label= 'SPARE PARTS' 
              path='/catalog'
            />
            <CardItem
              src='images/2.jpg'
              label='WHEELS'
              path='/catalog'
            />
          </CardItems>
          <CardItems>
            <CardItem
              src='images/3.jpg'
              label='OUR PROFESSIONAL COMBINERS'
              path='/catalog'
            />
            <CardItem
              src='/images/4.jpg'
              label='MASTER CLASS'
              path='/catalog'
            />
            <CardItem
              src='images/5.jpg'
              label='COMBINE REPAIR'
              path='/catalog'
            />
          </CardItems>
          <CardItems>
            <CardItem
              src='/images/7.jpg'
              label='RENT COMBINE'
              path='/catalog'
            />
            <CardItem
              src='images/8.jpg'
              label='COMBINE SALE'
              path='/catalog'
            />
          </CardItems>
        </CardWrapper>
        <Button
          path="/catalog"
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
          VIEW MORE
          </Button>
      </CardContainer>
    </>
  );
}

export default Cards;
