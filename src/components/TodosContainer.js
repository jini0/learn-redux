import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../modules/todos';
import Todos from './Todos';

const TodoContainer = (props) => {
    // 2. todos.js의 리덕스모듈   --> 내가 한거
    // const todo = useSelector(state => state.todos);         //todos [빈배열]..!
    // //각 액션을 dispatch하는 함수
    // const onAddTodo = text => dispatch(addTodo(text));
    // const onToggleTodo = id => dispatch(toggleTodo(id));

    //* 선생님
    //dispatch함수 만들기
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch();
    // dispatch는 이런 형태가 많았다  --> 액션 생성함수로 만들어서 넣어줄거임!!
    //dispatch({
    //  type: "dd",
    //  text: text,    
    //})
    // 한마디로 dispatch({ type: ADD_TODO, todo: { id: nextId++, text: text, done: false }})가 들어있는거임!! -> 이걸 addTodo(text)로 받은거
    const onCreate = text => dispatch(addTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));
    return (
        <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
    );
};

export default TodoContainer;