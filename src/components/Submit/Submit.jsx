import React , { Component } from 'react';
import fire from '../../fire';

class Submit extends Component{
    state={
        text: " "
    }
    handleText=e=>{
        this.setState({
            text : e.target.value
        })
    }
    handleSubmit=e=>{
        let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
        fire.database().ref('messages').set(this.state.text);
        this.setState({
            text: ""
        })
    }

    constructor1() {
        const humid = fire.database().ref("Shumyl");
        humid.on("value", datasnap=>{
          var aa = parseInt(datasnap.val())
          this.state.series.push(aa) // = datasnap.val()
        })
      }

    componentDidMount() {
        const humid = fire.database().ref("messages");
        humid.on("value", datasnap=>{
          console.log(datasnap.val())
        })
      }

    
    render() {
        const humid = fire.database().ref("messages");
        humid.on("value", datasnap=>{
          datasnap.val()
        })
        return (
            <div className='Submit-handle'>
            <input type="text" onChange={this.handleText} id="inputText" />
            <br/>
            <button onClick={this.handleSubmit} className="save">Save</button>
            <div>
            
            </div>
            </div>
        );
    } 
}

export default Submit;