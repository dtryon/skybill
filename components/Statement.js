import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
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

    formatDate(dateString) {
        const formattedDate = !!dateString ? moment(dateString).format('MMM Do, YYYY') : '';
        return formattedDate;
    }

    render() {

        const { total,
                statement: { due, period: { from, to }={} }={},
                package: { subscriptions=[], total: subscriptionTotal }={},
                skyStore: { rentals=[], buyAndKeep=[], total: skyStoreTotal }={},
                callCharges: { calls, total: callsTotal }={}
        } = this.props.statement;

        return (<div>

            <header className="grid-row Statement">
                <div className="grid-col-xs grid-col-md-66 Statement_title">
                    <div className="Statement_icon">
                        <i aria-hidden="true" className="material-icons Statement_title_icon">face</i>
                    </div>
                    <div className="Statement_text">
                        <h1 className="Statement_title_text">STATEMENT SUMMARY</h1>
                        <p className="Statement_period_dates">{ this.formatDate(from) } - { this.formatDate(to) }</p>
                    </div>
                </div>
                <div className="grid-col-xs grid-col-md-33 Statement_charges">
                    <p className="Statement_total">£{total}</p>
                    <p className="Statement_due">due: { this.formatDate(due) }</p>
                </div>
            </header>

            <main>

                <SubscriptionsContainer total={subscriptionTotal}>
                    { subscriptions.map(subscription => {
                        return (<PackageSubscription key={subscription.type}
                                    type={subscription.type}
                                    name={subscription.name}
                                    cost={ subscription.cost }/>);
                    })}
                </SubscriptionsContainer>

                <SkyStoreContainer total={skyStoreTotal}>
                    { rentals.length && <StorePurchase type="rental" name="RENTALS" purchases={rentals} />}
                    { buyAndKeep.length && <StorePurchase type="buy" name="BUY AND KEEP" purchases={buyAndKeep} />}
                </SkyStoreContainer>

                <CallsContainer total={callsTotal}>
                    <CallLog calls={calls} />
                </CallsContainer>

            </main>

            <footer>
                 &copy; skybill
            </footer>
        </div>);
    }
}

const mapStateToProps = state => ({ statement: state.statement });
const mapDispatchToProps = dispatch => ({ init: () => dispatch(getStatement())});
export default connect(mapStateToProps, mapDispatchToProps)(Statement);

