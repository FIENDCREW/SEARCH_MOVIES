// import { IFetchTodosActions, ITodosState, TodosActionType } from './interfaces';

// const initialState: ITodosState = {
//   todosData: [],
//   loading: false,
//   error: null,
// };

// export const TodosReducer = (
//   state: ITodosState = initialState,
//   action: IFetchTodosActions
// ): ITodosState => {
//   switch (action.type) {
//     case TodosActionType.FETCH_TODOS:
//       return { loading: true, error: null, todosData: [] };
//     case TodosActionType.FETCH_TODOS_SUCCESS:
//       return { loading: false, error: null, todosData: action.payload };
//     case TodosActionType.FETCH_TODOS_FAILURE:
//       return { loading: false, error: action.payload, todosData: [] };
//     default:
//       return state;
//   }
// };
