import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.component";

export const CardList = props => {
  // console.log(props.name); // props is any parameter from component caller ej: <CardList name="testPropValue"></CardList>
  // console.log(props.children); // value inside the tag: ej: <CardList>testPromprChildrenValue</CardList>
  // console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  ); //hola
};
