import React from 'react';
import ReactDOM from 'react-dom';

console.log("hzouitine");

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: ''
        };
    }

    componentDidMount() {
        let response;
        fetch("http://localhost:8080/api/employees")
            .then(function (response) {
                    return response.json();
                }
            )
            .then((response) => {
                this.setState((prevState) => ({employees: JSON.stringify(response)}));
            });


    }

    render() {
        return (<div>{this.state.employees}</div>
            //<EmployeeList employees={this.state.employees}/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('react'));