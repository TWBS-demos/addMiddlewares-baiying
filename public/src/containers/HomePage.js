import React, {Component} from "react";
import {Render} from "react-dom";

class HomePage extends Component {
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}

module.exports = HomePage;