import React, { useState } from 'react';

//TodoList, TodoItem이라는 함수형 컴포넌트 만들기(새로 파일 추가 안하고 그냥 위에 적어주는거) -> 따로 파일해서 컴포넌트 만들어줘도 됨!!!(컴포넌트 따로 다 떼도 됨!)
const TodoList = ({todos, onToggle}) => {
    return (
        <ul>
            {
                todos.map(todo=>(
                    <TodoItem todo={todo} key={todo.id} onToggle={onToggle} />
                ))
            }
        </ul>
    )
}
//항목(li) 클릭할 때 onToggle돼야 하니까! -> TodoItem까지 전달 되어야함!!(최종적으로 TodoItem까지!)
const TodoItem = ({todo, onToggle}) => {
    return (
        <li onClick={()=>onToggle(todo.id)}
        style={{ color: todo.done ? 'red' : 'black' }}          //스타일 컬러설정 -삼항연산자로 해준거! (default는 false임!)
        >{todo.text}</li>
    )
}


const Todos = ({todos, onCreate, onToggle}) => {
    const [ text, setText ] = useState("");
    const onChange = (e)=>{
        setText(e.target.value);            //변수 만들어서 담아줘도 되고 이렇게 바로 담아줘도 된다!!
    }
    const onSubmit = e=>{                   //매개변수 하나라 소괄호 생략도 가능
        e.preventDefault();     //submit 이벤트가 발생했을 때 새로고침방지
        onCreate(text);
        setText('')             //input 초기화
    }
    console.log(todos);
    return ( 
        <div>
            {/* form태그는 기본적으로 이벤트가 있음 -> submit해주면 get전송되고..? --> 이걸 다르게 주기위해 onSubmit함수 만들기!!(+새로고침방지해주고!) */}
            <form onSubmit={onSubmit}>
                <input value={text} 
                placeholder="할 일을 등록하세요" onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            {/* 할일 출력 --> todos={todos}: todos라는 배열을 전달해주고 있음!! --> props로 전달받음 */}
            {/* 항목이 클릭할거임!!-> form아니고 */}
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
};

export default Todos;