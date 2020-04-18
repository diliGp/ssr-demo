import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { increment, decrement } from '../store/actions/counter';
import RenderCount from './RenderCount';

const Counter = (props) => {
    const { increment, decrement } = props;
    return (
        <div className="counter-container">
            <Helmet>
                <title>Counter Page Component</title>
            </Helmet>
            <h1>This is Counter Page</h1>
            <section>
                <RenderCount />
                <div className="counterBtns">
                    <button onClick={() => increment(1)}>+</button>
                    <button onClick={() => decrement()}>-</button>
                </div>
            </section>
        </div>
    )
};

const mapActionsToProps = {
    increment,
    decrement
};

export default connect(undefined, mapActionsToProps)(Counter);