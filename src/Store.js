import React, { Component } from 'react';
import Shopper from "./Shopper";
class Store extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // Here are the types of clothes that will be dynamically rendered
            typesOfPurchases: ["clothes", "bag", "shoes"],
            // Here are the shoppers that will be created
            shopperNames: ["Kenn", "Kevin", "Erin", "Thomas"],

            // I will call this state when all of my shoppers are created after the component loaded. By default, it'll say Loading, before it's overwritten by the shopper info
            arrayOfShoppers: <h3>Loading</h3>,
            //This is the persistant string of items being purchased.
            arrayOfItemPurchased: "",
        }
    }

    // When the Store component is created, this function will run only once
    componentDidMount() {
        // We're temporarily creating an array that will be returned from the map. I'm doing this so I don't have to put the next two lines all together in one line
        let tempArrayOfShoppers = this.state.shopperNames.map(
            //For each element in the shopperNames state, do the function below
            (eachShopperName, index)=>{
                //I'm sending the shoppers name, the array of buttons, key, and the parent function to the Shopper component
                return(<Shopper name={eachShopperName} allbuttons={this.state.typesOfPurchases} key={index} parentFunction={this.addClickedButtonToArray}/>)
            }
        );
        // This is sending all of the returned Shopper elements to the arrayOfShoppers state
        this.setState({arrayOfShoppers: tempArrayOfShoppers});
    }

    // This is the parent function that will be called in the Child component. It will update the arrayOfItemPurchased each time a button is pressed
    // itemBought is adding the [NAME] bought [ITEM] string to the parent
    addClickedButtonToArray = (itemBought)=>{
        // Set the state of arrayOfItemPurchased using the previous state
        this.setState(
            (prevState)=> (
                {arrayOfItemPurchased: prevState.arrayOfItemPurchased + " " + itemBought + ", "}
            ));
    };

    render(){
        return(
            <div>
                {/*This is all of the purchased items */}
                {this.state.arrayOfItemPurchased}<br/>
                {/*This is the array of Shoppers*/}
                {this.state.arrayOfShoppers}
            </div>
        );
    }
}
export default Store;