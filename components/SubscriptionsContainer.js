import React, { Component } from 'react';

export default class SubscriptionsContainer extends Component {
    render () {
        return (<section className="grid">
            <div className="grid-row">
                <div className="grid-col-xs"><i className="material-icons">subscriptions</i> SUBCRIPTIONS</div>
            </div>
            <div className="grid-row">
                { this.props.children }
            </div>
        </section>);
    }
}
