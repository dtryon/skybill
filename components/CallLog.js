import React, { Component } from 'react';

import currency from '../lib/currency';

export default class CallLog extends Component {
    static propTypes = {
        calls: React.PropTypes.array
    }

    static defaultProps = {
        calls: []
    }

    render () {
        return (<article className="grid-col-xs CallLog">
            <h3 className="CallLog_title"><i aria-hidden="true" className="material-icons">schedule</i> CALL LOG</h3>
            <div className="grid CallLog_calls">
                { this.props.calls.map((call, i) => {
                    return (<div key={'call' + i} className="grid-row CallLog_call">
                        <div className="grid-col-xs-50 grid-col-md-90 CallLog_info">
                            <p><i aria-hidden="true" className="material-icons">call_made</i> CALLED -> { call.called } ({ call.duration })</p>
                        </div>
                        <div className="grid-col-xs-50 grid-col-md-10 CallLog_cost">
                            <p>{ currency.format(call.cost) }</p>
                        </div>
                    </div>);
                })}
            </div>
        </article>);
    }
}

