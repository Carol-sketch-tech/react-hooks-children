import React from "react";

function Container({
  header,
  children,
  textPosition = "", // possible values: left, right, center
  direction = "vertical", // possible values: vertical, horizontal
  contentPosition = "center", // possible values: left, right, center
}) {
  return (
    <div className={`container ${textPosition}`}>
      {header ? <h2>{header}</h2> : null}

      <div className={`container-children ${direction} ${contentPosition}`}>
        {children}
      </div>
    </div>
  );
}

export default Container;



// NOTEN WHILE STUDYING.
// how do we make children?
// function Example(props){
//   return <div>{props.exampleProp}</div>
// }
// the code bloc below is of a childComponent is being f=rendered from a parentComponent.
// return(<Example exampleProp="example value"/>)
// however React allows you to use your components with an opening and closing tag like most HTML elements.
// function what(){
//   return(
//   <Example1 exampleProp="example value">
//    <h1>Example Header!</h1>
//    <h2>Some Example text!</h2>
//    <Example1/>)}

