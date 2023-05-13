import ListGroup from "react-bootstrap/ListGroup";

function Main() {
  return (
    <div>
      <h2>Main</h2>

      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li">
          No states in components (All in one{" "}
          <a href="https://redux-toolkit.js.org/">store</a>). There can be some
          exceptions, for example, active state of input field can be saved in
          component itself.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          useSelect only in complex components. For simple components we use
          Redux connect() and React memo(), so components get only props. Redux
          connect() gives us opportunity to write unit tests for components that
          use Redux store. Redux connect() also helps to make components pure.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Complex components (components that contain other components) we use
          only as wrappers (it has no additional purpose).
        </ListGroup.Item>
        <ListGroup.Item as="li">We use TypeScript.</ListGroup.Item>
        <ListGroup.Item as="li">
          Reduce data fetching in components. Use fetch in services (through
          store with redux-thunk and createAsyncThunk). But don't make your
          store too complicated. <br />
          If you need to make a particular fetch in some component, think maybe
          it will be better to put it inside the component rather than in the
          store.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          We use inline styles or{" "}
          <a href="https://styled-components.com/">styled-components</a>. We
          don't use any CSS classes exept classes of states, like "active",
          "disabled", "focused". We also don't use element Selector, selection
          by tag. All styles should be located inside component folder, or
          inside component itself. Styles colocation principle. We can use
          classes for components that were imported from some library.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          We write tests with{" "}
          <a href="https://testing-library.com/">React Testing Library</a>. We
          also write tests for asynchronous components and write integration
          tests for component that connected to Redux store.
        </ListGroup.Item>
        <ListGroup.Item as="li">
          We name folders for components by the name of features.
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Main;
