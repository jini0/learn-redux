// 내장함수 불러오기
import { combineReducers } from 'redux';
// 합칠 애들 가져오기
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter, 
    todos
})

export default rootReducer;