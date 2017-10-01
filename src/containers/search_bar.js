import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault(); //Don't submit the form/reload the page

        this.props.fetchWeather(this.state.term); //Use fetchWeather and set state

        this.setState({ term: '' });
    } 

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favourite cities"
                    className = "form-control"
                    value = {this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
} //This causes the action creator to flow through middelware and reducers

export default connect(null, mapDispatchToProps)(SearchBar);
//Passing in null to say state basically isn't used here