import React, {Component} from "react";

// errorboundry es para avisar si hay un error, en este caso el children es cardlist, si hay un error en ese archivo va a tirar un error
class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) { // try catch
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops. That´s not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry 