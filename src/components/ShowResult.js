import React, {Component} from 'react';

class ShowResult extends Component {

    render() {
        return (
            <div className="container">
                <hr />
                <h3 className="text-center">Results</h3>
                    <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <div className="card p-4">
                        <div className="card-box">
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