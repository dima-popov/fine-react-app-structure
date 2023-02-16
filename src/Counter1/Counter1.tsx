import { decrement, increment } from "../store/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

function Counter1() {
  const useAppDispatch = () =>
    useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const dispatch = useAppDispatch();

  const count1 = useSelector(
    (state: { counter: { value: any } }) => state.counter.value
  );
  return (
    <div>
      Counter 1
      <Button
        data-testid="minus"
        variant="danger"
        onClick={() => {
          dispatch((dispatch, getState) => {
            console.log(getState());
            dispatch(decrement());
          });
        }}
      >
        -
      </Button>
      <Badge bg="secondary" data-testid="counter">
        {count1}
      </Badge>
      <Button
        data-testid="plus"
        variant="primary"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </Button>
    </div>
  );
}

export default Counter1;
