import React from  "react";
import {withRouter} from "react-router";

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.lat = props.lat;
    this.lng = props.lng;
    this.state = {
      description: "",
      lat: this.lat,
      lng: this.lng,
      seats: 0
    };
    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.updateFields = this.updateFields.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  navigateToSearch() {
    this.props.router.push("/");
  }

  updateFields (property) {
    return (e) => {
      this.setState({[property]: e.target.value});
    };

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBench(this.state);
    this.navigateToSearch();
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Description<input type="text"  onChange={this.updateFields("description")}/>
          Seats<input type="text" onChange={this.updateFields("seats")}/>
          Latitude<input type="text" value={this.lat} disabled/>
          Longitude<input type="text" value={this.lng} disabled/>
          <input type="submit" value="Add new bench"/>
        </form>
      </div>
    );
  }
}


export default withRouter(BenchForm);
