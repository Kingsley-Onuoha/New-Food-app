import React from "react"

class UserCard extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count1: 0,
            count2: 1,
        }

    }
    render(){
        const {count1, count2} = this.state
        return(
            <div>
                <h2>Count: {count1} </h2>
                <button onClick={() =>{
                    this.setState({count1: this.state.count1 +1})
                }}>Increase</button>
            </div>
        )
    }
}export default UserCard