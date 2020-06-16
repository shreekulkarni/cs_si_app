import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        console.log("submitted");
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} style={divStyle}>
                <div className={"nameDiv"}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea type="text" value={this.state.message} onChange={this.handleMessageChange} />
                    </label>
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

export default ContactForm;

const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
}
