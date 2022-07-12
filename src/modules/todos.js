// 리덕스 모듈 만들기
// 1. 초기상태지정
// 2. 액션타입
// 3. 액션생성함수정의
// 4. 리듀서 선언

// *액션타입은 추가하기 변경하기 두개만 할거임

// 1. 초기상태선언
// 초기값은 빈배열
const initialState = [
    // --> 이 배열안에 이런형태의 객체가 들어갈거다라는 걸 보여주기 위해서 적어주고 주석처리
    // {
    //     id:1,
    //     text: "예시",
    //     done: false
    // }
]                 

// 2. 액션타입선언
const ADD_TODO = 'todos/ADD_TODO';          // 리덕스모듈이 여러개일 때 , 파일이름을 접두사처럼 적어주자!✔
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// 3. 액션생성함수
let nextId = 1;
export const addTodo = text => ({           //화살표함수라 return생략
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text: text,         //이렇게 key와 value 같을 때(키밸류)는 text라고만 적어줄 수 있음(✔객체안에서 이렇게 적혀있으면)
        done: false
    }
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id                  //id: id 인걸 생략해준거
});

// 4. 리듀서 선언
export default function todos(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.todo)            //action이 준 todo를 넣어줘(concat --> 배열합치기)
        case TOGGLE_TODO:
            return state.map(
                todo => 
                todo.id === action.id ?  //삼항연산자!
                { ...todo, done: !todo.done } //todo의 id와 action의 id가 일치하면 done값을 반전(done이 false면 true로, true면 false로)
                : todo // 아니라면 그대로 둠
            )
        default:
            return state;
    }
}
// 💕한 프로젝트에 리덕스 모듈이 여러개(counter.js와 todos.js) --> 이를 합칠 수 있음 --> 루트리듀서💕