import React, {Component} from 'react';

class ShowResult extends Component {

    constructor(props){
        super(props)

        this.setStyle = this.setStyle.bind(this)
        this.setFontSize = this.setFontSize.bind(this)
    }

    setStyle() {    
        return `card-box text-${this.props.color}`
    }

    setFontSize(){
        return {
            fontSize: this.props.size
        }
    }

    render() {
        return (
            <div className="container">
                <hr />
                <h3 className="text-center">Results</h3>
                    <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <div className="card p-4">
                        <div className={this.setStyle()} style={this.setFontSize()}>
                            This is some text within a card body.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ShowResult;