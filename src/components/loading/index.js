import React from 'react';

export default map => (
    WrappedComponent => (
        class Enhancer extends WrappedComponent {
            render() {
                if (this.props[map.key]) {
                    return super.render();
                }
                return <p>loading ...</p>;
            }
        }
    )
);
