import React, {Component} from 'react';

export  default class LifeCycle extends Component{

    constructor(props){
        super(props);
        alert("Initial render");
        alert("constructor");
        this.state = {str: "hello"};
    }

    componentWillMount() {
        alert("componentWillMount");
    }

    componentDidMount() {
        alert("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        alert("componentWillReceiveProps");
    }

    shouldComponentUpdate() {
        alert("shouldComponentUpdate");
        return true;        // 记得要返回true
    }

    componentWillUpdate() {
        alert("componentWillUpdate");
    }

    componentDidUpdate() {
        alert("componentDidUpdate");
    }

    componentWillUnmount() {
        alert("componentWillUnmount");
    }

    setTheState() {
        let s = "hello";
        if (this.state.str === s) {
            s = "HELLO";
        }
        this.setState({
            str: s
        });
    }

    forceItUpdate() {
        this.forceUpdate();
    }

    render() {
        alert("render");
        return(
            <div>
                <h2>LifeCycle Demo</h2>
                <h2>props : {parseInt(this.props.num)}</h2>
                <h2>states : {this.state.str}</h2>
            </div>
        );
    }

}