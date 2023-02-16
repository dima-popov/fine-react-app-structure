import { decrement, increment } from "../store/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';

function AsyncCounter() {
  const useAppDispatch = () =>
    useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const dispatch = useAppDispatch();

  const count1 = useSelector(
    (state: { counter: { value: any } }) => state.counter.value
  );
  return (
    <div>
      Asynchronous Counter 
      <Button
        variant="danger"
        data-testid="minus"
        onClick={() => {
          dispatch((dispatch, getState) => {
            console.log(getState());
            setTimeout(() => {
              dispatch(decrement());
            }, 1000);
          });
        }}
      >
        -
      </Button>
      <Badge bg="secondary" data-testid="counter">{count1}</Badge>
      <Button
        variant="primary"
        data-testid="plus"
        onClick={() => {
          setTimeout(() => {
            dispatch(increment());
          }, 1000);
        }}
      >
        +
      </Button>
    </div>
  );
}

export default AsyncCounter;
