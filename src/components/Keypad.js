import React from "react";


class Keypad extends React.Component {


    handleType = () => {
        console.log(Entering password...)
    }

    render() {
        return(
            <div>
                <input onKeyUp={this.handleType} type="password"></input>
            </div>
        )
    }

}
export default Keypad;