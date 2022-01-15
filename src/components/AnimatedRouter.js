import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, withRouter } from 'react-router';
import { isHistoryPush, setPageChangeStatus } from '../common/history';

/**
 * @desc 路由动画组件
 *
 *  需要动画样式文件配合，所以如果使用默认的动画效果，则需要一并将项目中的animated.css导入项目
 */
class AnimatedRouter extends Component {

    static defaultProps = {
        prefix: 'animated-router'
    };
    inTransition = false;
    setInTransition(isAdd) {
        if (this.rootNode) {
            const inName = this.props.prefix + '-in-transition';

            this.rootNode.className = this.rootNode
                .className.split(/\s+/)
                .filter(name => name !== inName)
                .concat(isAdd ? inName : [])
                .join(' ');
        }
    }

    onEnter = node => {
        setPageChangeStatus(true);
        this.inTransition || this.setInTransition((this.inTransition = true));
        this.lastTransitionNode = node;
    };

    onEntering = node => {
        const { timeout } = this.props;

        if (node && typeof timeout === 'number') {
            node.style.transitionDuration = node.style.WebkitTransitionDuration = node.style.MozTransitionDuration =
                timeout + 'ms';
        }
    };

    onEntered = node => {
        setPageChangeStatus(false);
        if (this.lastTransitionNode === node) {
            this.inTransition && this.setInTransition((this.inTransition = false));
        }

        if (node) {
            const { timeout } = this.props;

            // remove all transition classNames
            node.className = node.className
                .split(/\s+/)
                .filter(name => !/-(?:forward|backward)-(?:enter|exit)(?:-active)?$/.test(name))
                .join(' ');

            if (typeof timeout === 'number') {
                node.style.transitionDuration = node.style.WebkitTransitionDuration = node.style.MozTransitionDuration =
                    '';
            }
        }
    };

    componentDidMount() {
        this.rootNode = findDOMNode(this);
    }

    render() {
    const { className, location, children, timeout, prefix, appear, enter, exit, component } = this.props;
    const groupProps = {
        appear,
        enter,
        exit,
        component
    };
    const cssProps = {
        onExit: this.onEnter,
        onExiting: this.onEntering,
        onExited: this.onEntered,
        onEnter: this.onEnter,
        onEntering: this.onEntering,
        onEntered: this.onEntered
    };
    const cls = [prefix + '-container', 'react-animated-router', className];

    return (
        <TransitionGroup
            className={cls.filter(Boolean).join(' ')}
            childFactory={child => {
                const classNames =
                    prefix + '-' + (isHistoryPush(location, child.props.in) ? 'forward' : 'backward');

                return React.cloneElement(child, {
                    classNames
                });
            }}
            {...groupProps}>
            <CSSTransition
                key={this.props.transitionKey || location.pathname}
                addEndListener={(node, done) => {
                    node.addEventListener(
                        'transitionend',
                        function(e) {
                            // 确保动画来自于目标节点
                            if (e.target === node) {
                                done();
                            }
                        },
                        false
                    );
                }}
                unmountOnExit={true}
                timeout={timeout}
                {...cssProps}>
                <Switch location={location}>{children}</Switch>
            </CSSTransition>
        </TransitionGroup>);
    }
}

export default withRouter(AnimatedRouter);
