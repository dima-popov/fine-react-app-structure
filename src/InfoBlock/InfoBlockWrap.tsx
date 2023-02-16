import { connect } from "react-redux";
import InfoBlock from "./InfoBlock";

const mapStateToProps = function (state: { counter: { value: any } }) {
  return {
    count1: state.counter.value,
  };
};

export default connect(mapStateToProps)(InfoBlock);
