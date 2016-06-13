import React, { Component } from 'react';

import currency from '../lib/currency';

export default class SkyStoreContainer extends Component {
    render () {
        return (<section className="grid SkyStoreContainer">
            <div className="grid-row SkyStoreContainer_title">
                <div className="grid-col-xs grid-col-md-66 SkyStoreContainer_icon">
                    <h2><i aria-hidden="true" className="material-icons">shopping_cart</i> SKY STORE</h2>
                </div>
                <div className="grid-col-xs grid-col-md-33 SkyStoreContainer_charges">
                    <p className="SkyStoreContainer_total">{ currency.format(this.props.total) }</p>
                </div>
            </div>
            <div className="grid-row SkyStoreContainer_items">
                { this.props.children }
            </div>
        </section>);
    }
}

