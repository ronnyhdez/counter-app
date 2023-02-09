import React, { Component } from 'react';

class Counter extends Component { 
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    // styles = {
    //     fontSize: 60,
    //     fontWeight: 'bold'
    // }

    render() { 
        return (
            <div>
                <span class={ this.getBadgeClasses() }>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        );    
    }

    getBadgeClasses() {
        let classes = "badge text-dark m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;
