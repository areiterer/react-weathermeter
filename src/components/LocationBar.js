import React from 'react';

class LocationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ location: e.target.value });
  }

  handleSubmit(e) {
    this.props.onLocationChange(this.state.location);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Location:
        </label>
        <input ref="locationInput" type="text" value={this.state.location} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

LocationBar.propTypes = {
  onLocationChange: React.PropTypes.func.isRequired
};


export default LocationBar;