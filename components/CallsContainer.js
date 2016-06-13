import React, { Component } from 'react';

import currency from '../lib/currency';

export default class CallsContainer extends Component {
    render () {
        return (<section className="grid CallsContainer">
            <div className="grid-row CallsContainer_title">
                <div className="grid-col-xs grid-col-md-66 CallsContainer_icon">
                    <h2><i aria-hidden="true" className="material-icons">call</i> CALLS</h2>
                </div>
                <div className="grid-col-xs grid-col-md-33 CallsContainer_charges">
                    <p className="CallsContainer_total">{ currency.format(this.props.total) }</p>
                </div>
            </div>
            <div className="grid-row CallsContainer_items">
                { this.props.children }
            </div>
        </section>);
    }
}
