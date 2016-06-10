import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatement } from '../actions/statement';

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
        return <div className="Statement">bill total: { this.props.statement.total }</div>;
    }
}

const mapStateToProps = state => ({ statement: state.statement });
const mapDispatchToProps = dispatch => ({ init: () => dispatch(getStatement())});
export default connect(mapStateToProps, mapDispatchToProps)(Statement);

