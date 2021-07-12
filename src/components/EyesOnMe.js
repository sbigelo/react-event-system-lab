import React from "react";



class EyesOnMe extends React.Component {


    blurr = () => {
        console.log('Hey! Eyes on me!')
    }

    focuss = () => {
        console.log('Good!')
    }

    render() {
        return(
            <div>
                <button 
                onFocus={this.focuss}
                onBlur={this.blurr}
                >
                </button>
            </div>
        )
    }


}

export default EyesOnMe;