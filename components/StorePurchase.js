import React, { Component } from 'react';

export default class StorePurchase extends Component {
    static propTypes = {
        purchases: React.PropTypes.array,
        type: React.PropTypes.string,
        name: React.PropTypes.string
    }

    static defaultProps = {
        purchases: [],
        type: '',
        name: ''
    }

    chooseIcon(type) {
        switch(type) {
            case 'rental':
                return 'schedule';
            case 'buy':
                return 'home';
            default:
                return 'credit_card';
        }
    }

    render () {
        return (<article className="grid-col-xs grid-col-md-50 StorePurchase">
            <div className="StorePurchase_title"><i className="material-icons">{ this.chooseIcon(this.props.type) }</i> { this.props.name }</div>
            <div className="grid StorePurchase_items">
                { this.props.purchases.length && this.props.purchases.map((purchase, i) => {
                    return (<div key={this.props.type + i} className="grid-row StorePurchase_item">
                        <div className="grid-col-xs-50 grid-col-md-90 StorePurchase_item_name">
                            <p>{ purchase.title }</p>
                        </div>
                        <div className="grid-col-xs-50 grid-col-md-10 StorePurchase_item_cost">
                            <p>£{ purchase.cost }</p>
                        </div>
                    </div>);
                })}
            </div>
        </article>);
    }
}
