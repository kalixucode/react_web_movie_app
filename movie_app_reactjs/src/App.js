import React from "react";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    componentDidMount() { //이론적으로 componentDidMount에서 data를 fetch하는 것!
        setTimeout(() => {
            this.setState({ isLoading: false});
        }, 6000);
    }
    render() {
        const { isLoading } = this.state;
        return <div>{
            isLoading ? "Loading" : "We are ready"}</div>;
    }
}

export default App;