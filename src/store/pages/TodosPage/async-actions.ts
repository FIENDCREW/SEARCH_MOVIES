// import { Dispatch } from 'redux';
// import { IFetchTodosActions, IFetchTodosParams, TodosActionType } from './interfaces';
// import { TodosService } from './todos-service';

// export const fetchTodos = ({ _page, _limit }: IFetchTodosParams) => {
//   return async (dispatch: Dispatch<IFetchTodosActions>) => {
//     try {
//       dispatch({ type: TodosActionType.FETCH_TODOS });
//       const response = await TodosService.getTodos(_page, _limit);
//       dispatch({ type: TodosActionType.FETCH_TODOS_SUCCESS, payload: response.data });
//     } catch {
//       dispatch({ type: TodosActionType.FETCH_TODOS_FAILURE, payload: 'Error' });
//     }
//   };
// };
