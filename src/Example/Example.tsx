import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InfoBlockWrap from "../InfoBlock/InfoBlockWrap";
import InfoBlock from "../InfoBlock/InfoBlock";
import Counter1 from "../Counter1/Counter1";
import Counter2 from "../Counter2/Counter2";
import AsyncCounter from "../AsyncCounter/AsyncCounter";

function Example() {
  const location = useLocation();
  console.log(location);
  const params = useParams();

  console.log(params);

  const count1 = useSelector(
    (state: { counter: { value: any } }) => state.counter.value
  );
  const count2 = useSelector(
    (state: { counter2: { value: any } }) => state.counter2.value
  );

  return (
    <div>
      <h2 data-testid="title">Example {params.id}</h2>

      {params.id === "1" ? (
        <div style={{ marginTop: "20px" }}>
          <div style={{ margin: "10px" }}>
            <Counter1 />
          </div>
          <div style={{ margin: "10px" }}>
            <Counter2 />
          </div>
          <hr/>
          <div style={{ margin: "10px" }}>
            <InfoBlockWrap />
          </div>
          <hr/>
          <div style={{ margin: "10px" }}>
            Next counter will be updating each time after store was updated,
            even if counter 1 stays the same. It is because this block wasn't
            wrapped with Redux connect() and useSelect for counter2 value is
            using in its parent component. Also block will be rerendered each
            time after parent component state was changed with useState hook;
          </div>
          <div style={{ margin: "10px" }}>
            <InfoBlock count1={count1} />
            </div>
        </div>
      ) : (
        <AsyncCounter />
      )}
    </div>
  );
}

export default Example;
