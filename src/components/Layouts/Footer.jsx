//component:its a part of uI which is responsible for rendering the content
//ideally you should render the component content is such a way that it should not split into multiple one, so that we cN ACHIEVE THE reusability of the component.
//same thing achieve in another pages use component

//there are several types of components are available
//1.class base
//to create class base component we have to fire a command rcc
//2.function base3.pure component
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <h5>&copy;www.knowledgehut.com {new Date().getFullYear()}</h5>
      </>
    );
  }
}
//export: can inform to the js that footer class can be accessed by the other pages/modules from client application
//default: it will use the component name as a default export name
//class: it will be a template to declare the code
//component name: name o component
//extends: it will the inherit the properties and behaviours from the parent class called component
//componens: its a predefine class which is declare by react to use its functionality in our existing component so that we use extends
//render() : will help us to render the UT on the scrren. presentational stfff
