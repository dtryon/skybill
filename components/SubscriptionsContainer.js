import React, { Component } from 'react';

export default class SubscriptionsContainer extends Component {
    render () {
        return (<section className="grid SubscriptionsContainer">
            <div className="grid-row SubscriptionsContainer_title">
                <div className="grid-col-xs"><i className="material-icons">subscriptions</i> SUBCRIPTIONS</div>
            </div>
            <div className="grid-row SubscriptionsContainer_items">
                { this.props.children }
            </div>
        </section>);
    }
}
