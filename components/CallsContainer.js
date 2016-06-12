import React, { Component } from 'react';

export default class CallsContainer extends Component {
    render () {
        return (<section className="grid">
            <div className="grid-row">
                <div className="grid-col-xs"><i className="material-icons">call</i> CALLS</div>
            </div>
            <div className="grid-row">
                { this.props.children }
            </div>
        </section>);
    }
}