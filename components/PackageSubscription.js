import React, { Component } from 'react';

import currency from '../lib/currency';

export default class PackageSubscription extends Component {
    static propTypes = {
        type: React.PropTypes.string,
        name: React.PropTypes.string,
        cost: React.PropTypes.number
    }

    static defaultProps = {
        type: '',
        name: '',
        cost: 0
    }

    chooseIcon (type) {
        switch (type) {
            case 'tv':
                return 'tv';
            case 'talk':
                return 'call';
            case 'broadband':
                return 'cast';
            default:
                return 'card_giftcard';
        }
    }
    render () {
        return (<article className="grid-col-xs grid-col-md-33 PackageSubscription">
                <h3 className="PackageSubscription_title"><i aria-hidden="true" className="material-icons">{ this.chooseIcon(this.props.type)} </i> {this.props.type.toUpperCase()}</h3>
                <div className="grid PackageSubscription_item">
                    <div className="grid-row">
                        <div className="grid-col-xs-50 grid-col-md-90 PackageSubscription_name">
                            <p>{ this.props.name }</p>
                        </div>
                        <div className="grid-col-xs-50 grid-col-md-10 PackageSubscription_cost">
                            <p>{ currency.format(this.props.cost) }</p>
                        </div>
                    </div>
                </div>
            </article>);
    }
}
