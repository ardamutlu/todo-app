export type Actions =
  | ReturnType<typeof getAllTodoRequest>
  | ReturnType<typeof getAllTodoSuccess>
  | ReturnType<typeof getAllTodoFailure>
  | ReturnType<typeof deleteTodoByIdRequest>
  | ReturnType<typeof deleteTodoByIdSuccess>
  | ReturnType<typeof deleteTodoByIdFailure>
  | ReturnType<typeof updateTodoStatusByIdRequest>
  | ReturnType<typeof updateTodoStatusByIdSuccess>
  | ReturnType<typeof updateTodoStatusByIdFailure>
  | ReturnType<typeof addNewTodoRequest>
  | ReturnType<typeof addNewTodoSuccess>
  | ReturnType<typeof addNewTodoFailure>
  | ReturnType<typeof updateTodoByIdRequest>
  | ReturnType<typeof updateTodoByIdSuccess>
  | ReturnType<typeof updateTodoByIdFailure>
  | ReturnType<typeof filterTodo>
  | ReturnType<typeof searchTodo>;

/**
 * GET ALL TODO
 */
export const GET_ALL_TODO_REQUEST = 'GET_ALL_TODO_REQUEST';
export const getAllTodoRequest = () =>
  ({
    type: GET_ALL_TODO_REQUEST
  } as const);

export const GET_ALL_TODO_SUCCESS = 'GET_ALL_TODO_SUCCESS';
export const getAllTodoSuccess = (payload: any) =>
  ({
    type: GET_ALL_TODO_SUCCESS,
    payload
  } as const);

export const GET_ALL_TODO_FAILURE = 'GET_ALL_TODO_FAILURE';
export const getAllTodoFailure = (err: Error) =>
  ({
    type: GET_ALL_TODO_FAILURE,
    payload: {
      err
    }
  } as const);

/**
 * DELETE TODO BY ID
 */
export const DELETE_TODO_BY_ID_REQUEST = 'DELETE_TODO_BY_ID_REQUEST';
export const deleteTodoByIdRequest = (payload: number) =>
  ({
    type: DELETE_TODO_BY_ID_REQUEST,
    payload
  } as const);

export const DELETE_TODO_BY_ID_SUCCESS = 'DELETE_TODO_BY_ID_SUCCESS';
export const deleteTodoByIdSuccess = (payload: any) =>
  ({
    type: DELETE_TODO_BY_ID_SUCCESS,
    payload
  } as const);

export const DELETE_TODO_BY_ID_FAILURE = 'DELETE_TODO_BY_ID_FAILURE';
export const deleteTodoByIdFailure = (err: Error) =>
  ({
    type: DELETE_TODO_BY_ID_FAILURE,
    payload: {
      err
    }
  } as const);

/**
 * UPDATE TODO STATUS BY ID
 */
export const UPDATE_TODO_STATUS_BY_ID_REQUEST = 'UPDATE_TODO_STATUS_BY_ID_REQUEST';
export const updateTodoStatusByIdRequest = (payload: any) =>
  ({
    type: UPDATE_TODO_STATUS_BY_ID_REQUEST,
    payload
  } as const);

export const UPDATE_TODO_STATUS_BY_ID_SUCCESS = 'UPDATE_TODO_STATUS_BY_ID_SUCCESS';
export const updateTodoStatusByIdSuccess = (payload: any) =>
  ({
    type: UPDATE_TODO_STATUS_BY_ID_SUCCESS,
    payload
  } as const);

export const UPDATE_TODO_STATUS_BY_ID_FAILURE = 'UPDATE_TODO_STATUS_BY_ID_FAILURE';
export const updateTodoStatusByIdFailure = (err: Error) =>
  ({
    type: UPDATE_TODO_STATUS_BY_ID_FAILURE,
    payload: {
      err
    }
  } as const);

/**
 * ADD NEW TODO
 */
export const ADD_NEW_TODO_REQUEST = 'ADD_NEW_TODO_REQUEST';
export const addNewTodoRequest = (payload: any) =>
  ({
    type: ADD_NEW_TODO_REQUEST,
    payload
  } as const);

export const ADD_NEW_TODO_SUCCESS = 'ADD_NEW_TODO_SUCCESS';
export const addNewTodoSuccess = (payload: any) =>
  ({
    type: ADD_NEW_TODO_SUCCESS,
    payload
  } as const);

export const ADD_NEW_TODO_FAILURE = 'ADD_NEW_TODO_FAILURE';
export const addNewTodoFailure = (err: Error) =>
  ({
    type: ADD_NEW_TODO_FAILURE,
    payload: {
      err
    }
  } as const);

/**
 * UPDATE TODO BY ID
 */
export const UPDATE_TODO_BY_ID_REQUEST = 'UPDATE_TODO_BY_ID_REQUEST';
export const updateTodoByIdRequest = (payload: any) =>
  ({
    type: UPDATE_TODO_BY_ID_REQUEST,
    payload
  } as const);

export const UPDATE_TODO_BY_ID_SUCCESS = 'UPDATE_TODO_BY_ID_SUCCESS';
export const updateTodoByIdSuccess = (payload: any) =>
  ({
    type: UPDATE_TODO_BY_ID_SUCCESS,
    payload
  } as const);

export const UPDATE_TODO_BY_ID_FAILURE = 'UPDATE_TODO_BY_ID_FAILURE';
export const updateTodoByIdFailure = (err: Error) =>
  ({
    type: UPDATE_TODO_BY_ID_FAILURE,
    payload: {
      err
    }
  } as const);

/**
 * FILTER TODO
 */
export const FILTER_TODO = 'FILTER_TODO';
export const filterTodo = (payload: any) =>
  ({
    type: FILTER_TODO,
    payload
  } as const);

/**
 * SEARCH TODO
 */
export const SEARCH_TODO = 'SEARCH_TODO';
export const searchTodo = (query: string) =>
  ({
    type: SEARCH_TODO,
    payload: {
      query
    }
  } as const);
