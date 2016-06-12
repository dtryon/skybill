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
        return <div>
            <header className="grid-row">
                <div className="grid-col-xs grid-col-md-66">
                    <i className="material-icons">face</i>
                    <span>STATEMENT SUMMARY</span>
                </div>
                <div className="grid-col-xs grid-col-md-33">
                    <p>£135.66</p> 
                </div>
            </header>
            <main>
                <section className="grid">
                    <div className="grid-row">
                        <div className="grid-col-xs"><i className="material-icons">subscriptions</i> SUBCRIPTIONS</div>
                    </div>
                    <div className="grid-row">
                        <article className="grid-col-xs grid-col-md-33">
                            <div><i className="material-icons">tv</i> TV</div>
                            <div className="grid">
                                <div className="grid-row">
                                    <div className="grid-col-md-90">
                                        <p>Variety and Movie HD</p>
                                    </div>
                                    <div className="grid-col-md-10">
                                        <p>£4.55</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="grid-col-xs grid-col-md-33">
                            <div><i className="material-icons">call</i> TALK</div>
                            <div className="grid">
                                <div className="grid-row">
                                    <div className="grid-col-md-90">
                                        <p>Variety and Movie HD</p>
                                    </div>
                                    <div className="grid-col-md-10">
                                        <p>£4.55</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="grid-col-xs grid-col-md-33">
                            <div><i className="material-icons">cast</i> BROADBAND</div>
                            <div className="grid">
                                <div className="grid-row">
                                    <div className="grid-col-md-90">
                                        <p>Variety and Movie HD</p>
                                    </div>
                                    <div className="grid-col-md-10">
                                        <p>£4.55</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="grid">
                    <div className="grid-row">
                        <div className="grid-col-xs"><i className="material-icons">shopping_cart</i> SKY STORE</div>
                    </div>
                    <div className="grid-row">
                        <article className="grid-col-xs grid-col-md-50">
                            <div><i className="material-icons">schedule</i> RENTALS</div>
                            <div className="grid">
                                <div className="grid-row">
                                    <div className="grid-col-md-90">
                                        <p>Variety and Movie HD</p>
                                    </div>
                                    <div className="grid-col-md-10">
                                        <p>£4.55</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="grid-col-xs grid-col-md-50">
                            <div><i className="material-icons">home</i> BUY AND KEEP</div>
                            <div className="grid">
                                <div className="grid-row">
                                    <div className="grid-col-md-90">
                                        <p>Variety and Movie HD</p>
                                    </div>
                                    <div className="grid-col-md-10">
                                        <p>£4.55</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="grid">
                    <div className="grid-row">
                        <div className="grid-col-xs"><i className="material-icons">call</i> CALLS</div>
                    </div>
                    <div className="grid-row">
                        <article className="grid-col-xs">
                            <div><i className="material-icons">schedule</i> RENTALS</div>
                            <div className="grid">
                                <div className="grid-row">
                                    <div className="grid-col-md-90">
                                        <p><i className="material-icons">call_made</i> CALLED   ->   02074351359  (00:23:00)</p>
                                    </div>
                                    <div className="grid-col-md-10">
                                        <p>£2.13</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
            <footer>
                <i className="material-icons">copyright</i> skybill
            </footer>
        </div>;
    }
}

const mapStateToProps = state => ({ statement: state.statement });
const mapDispatchToProps = dispatch => ({ init: () => dispatch(getStatement())});
export default connect(mapStateToProps, mapDispatchToProps)(Statement);

