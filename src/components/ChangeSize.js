import React, { Component } from 'react';

class ChangeSize extends Component {

    constructor(props){
        super(props)
        this.onChangeSize = this.onChangeSize.bind(this)
        this.showFontSize = this.showFontSize.bind(this)
        this.onHandleChange = this.onHandleChange.bind(this)
    }

    showFontSize(){
        return this.props.size
    }

    onChangeSize(value){
        this.props.onChangeSize(value)
    }

    onHandleChange(event){
        this.props.onHandleChange({value: parseInt(event.target.value)})
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Choose Font Size</h3>
                <hr />
                <div className="row justify-content-md-center">
                <div className="col-md-8">
                    <label htmlFor="font-size">Font Size: <span>{this.showFontSize()}</span></label>
                    <input 
                        type="range" 
                        className="custom-range" 
                        id="font-size" 
                        name="size" 
                        min={this.props.min} 
                        max={this.props.max} 
                        value={this.props.size}
                        onChange={this.onHandleChange}
                        />
                    <div className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-info mr-2" 
                        onClick={() => this.onChangeSize(-2)}
                    >Down</button>
                    <button 
                        type="button" 
                        className="btn btn-success ml-2" 
                        onClick={() => this.onChangeSize(2)}
                    >Up</button>
                    </div>
                </div>
                </div>
            </div>
        );
    }

}

export default ChangeSize;