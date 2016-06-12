import React, { Component } from 'react';

export default class PackageSubscription extends Component {
    render () {
        return (<article className="grid-col-xs grid-col-md-33">
                <div><i className="material-icons">tv</i> TV</div>
                <div className="grid">
                    <div className="grid-row">
                        <div className="grid-col-md-90">
                            <p>Variety and Movie HD</p>
                        </div>
                        <div className="grid-col-md-10">
                            <p>£4.55</p>
                        </div>
                    </div>
                </div>
            </article>);
    }
}
