import React, { Component } from 'react';

export default class CallLog extends Component {
    render () {
        return (<article className="grid-col-xs">
            <div><i className="material-icons">schedule</i> CALL LOG</div>
            <div className="grid">
                <div className="grid-row">
                    <div className="grid-col-md-90">
                        <p><i className="material-icons">call_made</i> CALLED   ->   02074351359  (00:23:00)</p>
                    </div>
                    <div className="grid-col-md-10">
                        <p>£2.13</p>
                    </div>
                </div>
            </div>
        </article>);
    }
}

