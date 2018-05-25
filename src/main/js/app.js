import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/EmployeeList';

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
        return (<div>
                <EmployeeList employees={this.state.employees}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('react'));