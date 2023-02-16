import { decrement2, increment2 } from "../store/counterSlice2";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';

function Counter2() {
  const useAppDispatch = () =>
    useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const dispatch = useAppDispatch();

  const count2 = useSelector(
    (state: { counter2: { value: any } }) => state.counter2.value
  );

  return (
    <div>
      Counter 2
      <Button
        variant="danger"
        onClick={() => {
          dispatch(decrement2());
        }}
      >
        -
      </Button>
      <Badge bg="secondary">{count2}</Badge>
      <Button
        variant="primary"
        onClick={() => {
          dispatch(increment2());
        }}
      >
        +
      </Button>
    </div>
  );
}

export default Counter2;
