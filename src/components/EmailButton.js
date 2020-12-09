import React, {Component} from 'react';

class EmailButton extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        window.location.href = `mailto:brittanylcrocker@gmail.com`;
    }
    render(){
        return <a onClick={this.onClick} className="mx-2"><i className="fas fa-envelope"></i></a>;
    }
}

export default EmailButton;
