<img src="/img/redux.jpg" title="redux" class="post-first-image" />

# Redux in a nutshell - How does it work?

&nbsp;

## Summary
Its said that the view is a function of the state. If something needs to change in the view, you need to change the state. Its like the backbone of an app.
Redux came into being as a way to seperate concerns between the view layer and the data layer of an App.
It's job is to act on some action and change the state of the app.

It consists of a store which accepts an action dispatched from a view and changes the state of the whole app. All views subscribed to the store get the new state and change their view accordingly. Lets look at a basic implementation of the Redux store and use it in a counter app.


## Initial State
  There are no todos to begin with. So lets say the initial state of the app would be an empty array. As we add/remove todos we would add/remove from this array. The view would be a rendering function which always renders whatever is there in the state.

    cont initialState = [];

## The Redux Store Creator

The store is the state manager which does and keeps track of every action from the app. All views are subscribed to the store. It accepts an action, changes the state and calls all the view layers. It also accepts a reducer the job of which is to calculate the new state.

    const storeCreator = reducer => {
      let state;
      let views = [];

      const subscribe = view => {
        views.push(view);
      };

      const getState = () => state;

      const dispatch = action => {
        state = reducer(state, action);
        views.forEach(view => view());
      };

      dispatch({});

      return { dispatch, getState, subscribe };
    };


## The Reducer

    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case 'add':
          return [...state, todos(state, action)];
        case 'toggle':
          return state.map(s => todo(s, action));
        default:
          return state;
      }
    };

    const todos = (state, action) => {
      switch(action.type) {
        case 'add':
          return {
            id: action.id,
            task: action.task,
            done: false,
          };
        case 'toggle': {
          return {
            if(state.id !== action.id) return state;

            return {
              ...state,
              done : !state.done,
            };
          }
        }
      }
    };


## The View layer

    const store = storeCreator(reducer);
    const { dispatch, subscribe, getState } = store;
    const anchor = document.getElementById('content');

    const render = () => ReactDOM.render(<div className='col-xs-6'>
        {getState().map((todo, i) => <SingleTodo value={todo.task} key={i} onClick={toggle} />)}
        <input className='form-control' type='text'/>
        <button className='btn btn-primary' onClick={add}>+</button>
      </div>, anchor);

    const add = () => {
      dispatch({
        type: 'add',
        id: 0,
        task: 'hi',
      });
    };

    const toggle = () => {
      dispatch({
        type: 'toggle',
        id: 0,
      });
    };


## SingleTodo Component

    const SingleTodo = ({ value, onClick }) => <div><input type='checkbox' onChange={onClick}></input>{value}</div>;

    store.subscribe(render);
    render();

## The Test Cases for the Reducer

    const testAdd = () => {
      const stateBefore = [];
      const action = {
        type: 'add',
        id: 0,
        task: 'test'
      };
      const stateAfter = [{
        id: 0,
        task: 'test',
        done: false
      }];
      expect(reducer(stateBefore, action)).toEqual(stateAfter);
    };

    const testToggle = () => {
      const stateBefore = [{
        id: 0,
        task: 'test',
        done: false
      }];
      const stateAfter = [{
        id: 0,
        task: 'test',
        done: true
      }];
      const action = {
        type: 'toggle',
        id: 0
      };
      expect(reducer(stateBefore, action)).toEqual(stateAfter);
    };

    testAdd();
    testToggle();
    console.log('tests passed');