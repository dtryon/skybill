import React, { Component } from 'react';

import currency from '../lib/currency';

export default class SubscriptionsContainer extends Component {
    static propTypes = {
        total: React.PropTypes.number
    }

    static defaultProps = {
        total: 0
    }

    render () {
        return (<section className="grid SubscriptionsContainer">
            <div className="grid-row SubscriptionsContainer_title">
                <div className="grid-col-xs grid-col-md-66 SubscriptionsContainer_icon">
                    <h2><i aria-hidden="true" className="material-icons">subscriptions</i> SUBCRIPTIONS</h2>
                </div>
                <div className="grid-col-xs grid-col-md-33 SubscriptionsContainer_charges">
                    <p className="SubscriptionsContainer_total">{ currency.format(this.props.total) }</p>
                </div>
            </div>
            <div className="grid-row SubscriptionsContainer_items">
                { this.props.children }
            </div>
        </section>);
    }
}
