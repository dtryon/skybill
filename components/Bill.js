import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBill } from '../actions/bill';

export class Bill extends Component {
    componentDidMount() {
        this.props.getBill();
    }

    render() {
        return <div>bill total: { this.props.bill.total }</div>;
    }
}

const mapStateToProps = state => ({ bill: state.bill});
const mapDispatchToProps = dispatch => ({ getBill: () => dispatch(getBill())});
export default connect(mapStateToProps, mapDispatchToProps)(Bill);

