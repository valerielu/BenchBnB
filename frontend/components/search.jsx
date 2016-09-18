import React from "react";
import BenchMap from "./map.jsx";
import BenchIndex from "./bench_index.jsx";

class Search extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.requestBenches();
  }

  render() {
    return (
      <div>
        <BenchMap benches={this.props.benches} updateBounds={this.props.updateBounds}/>
        <BenchIndex benches={this.props.benches} requestBenches={this.props.requestBenches}/>
      </div>
    );
  }
}

export default Search;
