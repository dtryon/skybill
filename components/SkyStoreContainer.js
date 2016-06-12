import React, { Component } from 'react';

export default class SkyStoreContainer extends Component {
    render () {
        return (<section className="grid SkyStoreContainer">
            <div className="grid-row SkyStoreContainer_title">
                <div className="grid-col-xs grid-col-md-66 SkyStoreContainer_icon">
                    <div><i className="material-icons">shopping_cart</i> SKY STORE</div>
                </div>
                <div className="grid-col-xs grid-col-md-33 SkyStoreContainer_charges">
                    <p className="SkyStoreContainer_total">£{ this.props.total }</p>
                </div>
            </div>
            <div className="grid-row SkyStoreContainer_items">
                { this.props.children }
            </div>
        </section>);
    }
}

