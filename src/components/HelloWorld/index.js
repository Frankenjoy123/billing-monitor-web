import React, {Component} from 'react';

export  default class HelloWorld extends Component{

    render(){
        return (
            <h3>Hello from your word : {this.props.word}</h3>
        );

    }

}