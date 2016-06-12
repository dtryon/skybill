import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatement } from '../actions/statement';

import SubscriptionsContainer from './SubscriptionsContainer';
import PackageSubscription from './PackageSubscription';
import SkyStoreContainer from './SkyStoreContainer';
import StorePurchase from './StorePurchase';
import CallsContainer from './CallsContainer';
import CallLog from './CallLog';

export class Statement extends Component {
    static propTypes = {
        statement: React.PropTypes.object,

        getStatement: React.PropTypes.func
    }

    static defaultProps = {
        statement: {}
    }

    componentDidMount() {
        this.props.init();
    }

    render() {

        const { total,
                statement: { due, period: { from, to }={} }={},
                package: { subscriptions=[], total: subscriptionTotal }={},
                skyStore: { rentals=[], buyAndKeep, total: skyStoreTotal }={},
                callCharges: { calls, total: callsTotal }={}
        } = this.props.statement;

        return (<div>

            <header className="grid-row Statement">
                <div className="grid-col-xs grid-col-md-66 Statement_title">
                    <p className="Statement_period_dates">{ from } - { to }</p>
                    <i className="material-icons">face</i>
                    <span>STATEMENT SUMMARY</span>
                </div>
                <div className="grid-col-xs grid-col-md-33 Statement_charges">
                    <p className="Statement_total">£{total}</p>
                    <p className="Statement_due">due: { due }</p>
                </div>
            </header>

            <main>

                <SubscriptionsContainer total={subscriptionTotal}>
                    { subscriptions.length && subscriptions.map(subscription => {
                        return (<PackageSubscription key={subscription.type} type={subscription.type} name={subscription.name} cost={subscription.cost}/>);
                    })}
                </SubscriptionsContainer>

                <SkyStoreContainer total={skyStoreTotal}>
                    { rentals.length && <StorePurchase type="rental" name="RENTALS" purchases={rentals} />}
                    { buyAndKeep && buyAndKeep.length && <StorePurchase type="buy" name="BUY AND KEEP" purchases={buyAndKeep} />}
                </SkyStoreContainer>

                <CallsContainer total={callsTotal}>
                    <CallLog calls={calls} />
                </CallsContainer>

            </main>

            <footer>
                <i className="material-icons">copyright</i> skybill
            </footer>
        </div>);
    }
}

const mapStateToProps = state => ({ statement: state.statement });
const mapDispatchToProps = dispatch => ({ init: () => dispatch(getStatement())});
export default connect(mapStateToProps, mapDispatchToProps)(Statement);

