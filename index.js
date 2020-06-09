class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }
    handleClick() {
        this.setState({value: this.state.value + 1});

    }
    render() {
        return <div>
            <h1>Total: {this.state.value}</h1>
            <button onClick={this.handleClick.bind(this)}>Click to Count</button>
        </div>
    }
}





ReactDOM.render(<Counter/>, document.getElementById('root'))