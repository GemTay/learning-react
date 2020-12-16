import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call to get new date from server
        }
    }

    componentWillUnmount() {

    }
 
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={ () => this.props.onIncrement(this.props.counter) }
                    className="btn btn-secondary btn-sm m-1"
                >+</button>
                <button
                    onClick={ () => this.props.onDecrement(this.props.counter) }
                    className="btn btn-secondary btn-sm m-1"
                >-</button>
                <span className="m-2">{(this.props.counter.name)} - £{parseFloat(this.props.counter.price).toFixed(2)}</span>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value;
    }
}

export default Counter;