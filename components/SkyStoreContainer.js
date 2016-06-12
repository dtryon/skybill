import React, { Component } from 'react';

export default class SkyStoreContainer extends Component {
    render () {
        return (<section className="grid">
            <div className="grid-row">
                <div className="grid-col-xs"><i className="material-icons">shopping_cart</i> SKY STORE</div>
            </div>
            <div className="grid-row">
                { this.props.children }
            </div>
        </section>);
    }
}

