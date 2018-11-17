import React, { Component } from 'react';

class ChangeSize extends Component {

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Choose Font Size</h3>
                <hr />
                <div className="row justify-content-md-center">
                <div className="col-md-8">
                    <label htmlFor="font-size">Font Size: <span>15</span></label>
                    <input type="range" className="custom-range" id="font-size" name="size" min="0" max="42" />
                    <div className="text-center">
                    <button type="button" className="btn btn-info mr-2">Down</button>
                    <button type="button" className="btn btn-success ml-2">Up</button>
                    </div>
                </div>
                </div>
            </div>
        );
    }

}

export default ChangeSize;