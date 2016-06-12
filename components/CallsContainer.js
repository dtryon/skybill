import React, { Component } from 'react';

export default class CallsContainer extends Component {
    render () {
        return (<section className="grid CallsContainer">
            <div className="grid-row CallsContainer_title">
                <div className="grid-col-xs grid-col-md-66 CallsContainer_icon">
                    <div><i className="material-icons">call</i> CALLS</div>
                </div>
                <div className="grid-col-xs grid-col-md-33 CallsContainer_charges">
                    <p className="CallsContainer_total">£{ this.props.total && this.props.total.toFixed(2) }</p>
                </div>
            </div>
            <div className="grid-row CallsContainer_items">
                { this.props.children }
            </div>
        </section>);
    }
}
