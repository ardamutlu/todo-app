import * as actions from '../actions/todo';

export type State = {
  entities: Array<{}>;
  query: string;
  filter: {
    value: number;
    title: string;
  };
  loading: boolean;
  error: Error | null;
};

export const initialState: State = {
  entities: [],
  query: '',
  filter: {
    value: 0,
    title: 'All'
  },
  loading: false,
  error: null
};

export const reducer = (state: State = initialState, action: actions.Actions): State => {
  switch (action.type) {
    case actions.GET_ALL_TODO_REQUEST:
    case actions.DELETE_TODO_BY_ID_REQUEST:
    case actions.UPDATE_TODO_STATUS_BY_ID_REQUEST:
    case actions.UPDATE_TODO_BY_ID_REQUEST:
    case actions.ADD_NEW_TODO_REQUEST:
      return { ...state, loading: true };

    case actions.GET_ALL_TODO_SUCCESS:
    case actions.DELETE_TODO_BY_ID_SUCCESS:
    case actions.UPDATE_TODO_STATUS_BY_ID_SUCCESS:
    case actions.UPDATE_TODO_BY_ID_SUCCESS:
    case actions.ADD_NEW_TODO_SUCCESS:
      return { ...state, loading: false, entities: action.payload };

    case actions.GET_ALL_TODO_FAILURE:
    case actions.DELETE_TODO_BY_ID_FAILURE:
    case actions.UPDATE_TODO_STATUS_BY_ID_FAILURE:
    case actions.UPDATE_TODO_BY_ID_FAILURE:
    case actions.ADD_NEW_TODO_FAILURE:
      return { ...state, loading: false, error: action.payload.err };

    case actions.FILTER_TODO:
      return { ...state, filter: action.payload };

    case actions.SEARCH_TODO:
      return { ...state, query: action.payload.query };

    default:
      return state;
  }
};
