import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, withRouter } from 'react-router-dom';
import './index.scss';

export const withAnimatedWrapper = (WrappedComponent, componentProps = {}) => {
    return class extends Component {
        render() {
            return (
                <div className="AnimatedWrapper">
                    <WrappedComponent {...this.props} {...componentProps} />
                </div>
            );
        }
    };
};

export const AnimatedSwitch = withRouter(({ children, location }) => (
    <TransitionGroup>
        <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={500}
        >
            <Switch location={location}>
                {children}
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));