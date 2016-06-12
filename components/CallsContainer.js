import React, { Component } from 'react';

export default class CallsContainer extends Component {
    render () {
        return (<section className="grid CallsContainer">
            <div className="grid-row CallsContainer_title">
                <div className="grid-col-xs"><i className="material-icons">call</i> CALLS</div>
            </div>
            <div className="grid-row CallsContainer_items">
                { this.props.children }
            </div>
        </section>);
    }
}
