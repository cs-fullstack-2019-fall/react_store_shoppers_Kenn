import React, { Component } from 'react';
class Shopper extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // This is holding all of the dynamically loaded so they can be used anywhere in this class
            arrayOfButtons: <h3>loading buttons</h3>,
        }
    }

    // This function is in every button. I hid the person's name in the button's value so I know who pressed it.
    whichButtonPressed = (e)=>{
        this.props.parentFunction(`${e.target.value} bought ${e.target.innerText}`);
    };

    // This will only run once. It will grab all of the buttons that was sent to the child component and put them in the arrayOfButtons state so we can use it anywhere in the component.
    componentDidMount() {
        let tempPurchasesArray = this.props.allbuttons.map(
            (eachButtonName, index) =>{
                return(<button value={this.props.name} onClick={this.whichButtonPressed} key={index}>{eachButtonName}</button>)
            }
        );
        this.setState({arrayOfButtons: tempPurchasesArray});
    }

    render(){
        return(
            <div>
                {/*This will show the person's name*/}
                <h3>{this.props.name}</h3>
                {/*This is the list of all buttons dynamically created*/}
                {this.state.arrayOfButtons}
            </div>
        );
    }
}
export default Shopper;