import React from "react";
import BenchIndexItem from "./bench_index_item.jsx";

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const benches = this.props.benches.map((bench, idx) => (
      <BenchIndexItem key={bench.id} bench={bench} />
    ));


    return (
      <ul>
        {benches}
      </ul>
    );
  }
}

export default BenchIndex;
