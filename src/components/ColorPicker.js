import React, { Component } from 'react';

class ColorPicker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colors: ['secondary', 'primary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
        }

        this.showHeight = this.showHeight.bind(this)
        this.showColor = this.showColor.bind(this)
        this.setActiveColor = this.setActiveColor.bind(this)
    }

    showHeight() {
        return { 
            height: 90 + 'px',
        }
    }

    showColor(color) {
        return this.props.color === color ? `col-1 p-4 bg-${color} border border-dark` : `col-1 p-4 bg-${color}`;
    }

    setActiveColor(color) {
        this.props.onReceiveColor(color)
    }

    render() {

        let elements = this.state.colors.map((color, index) => {
            return <div key={index} style={this.showHeight()} className={this.showColor(color)} onClick={() => this.setActiveColor(color)}></div>
        });

        return (
            <div className="container">
                <h3 className="text-center">Pick Color</h3>
                <hr />
                <div className="row justify-content-md-center">
                    {elements}
                </div>
            </div>
        );
    }

}

export default ColorPicker;