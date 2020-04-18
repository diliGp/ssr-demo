import React from 'react';
import { connect } from 'react-redux';

const RenderCount = ({ count }) => {
    return (
    <h2>Current count is: {count}</h2>
    )
}

const mapStoreToProps = (store) => ({
    count: store.counter.count
});

export default connect(mapStoreToProps)(RenderCount);
