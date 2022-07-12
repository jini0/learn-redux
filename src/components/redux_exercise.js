// 기본 리덕스 연습 - 리액트에 적용한거X!! 그냥 기본 리덕스 연습한거임!
import { createStore } from "redux";

// 1. 상태초기값 설정
// 2. 액션타입선언
// 3. 액션생성함수 정의
// 4. reducer정의
// 5. store생성

// 1. 리덕스에서 관리할 상태 정의
const initialState = {
    counter: 0,
    text: '',
    list: []
}
// 2. 액션타입선언      --> 어떤 걸 쓸지 적어준거!! 
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 3. 액션 생성함수 정의
// function increase(){
//     return {
//         type: INCREASE
//     }
// }
//화살표함수 써도 됨 (좋은점이 return을 생략해도 된다는 점!)
//{ type: INCREASE }  --> return이 객체를 반환해줌 --> 여기서 객체는 action객체임  --> dispatch가 action객체를 전달하는거!
const increase = () => {
    return {
        type: INCREASE
    }
}
const decrease = () => ({
    type: DECREASE          // 리턴생략
})                          
const changeText = (text) => ({
    type: CHANGE_TEXT,
    text                    // text: text 인데 키와 값이 같아서 text만 적어도됨(생략가능)
})
const addToList = item => ({            //()안에 하나라서 생략도 가능함! (item)해도 되고!
    type: ADD_TO_LIST, 
    item                    // item: item 인데 키와 값이 같아서 item만 적어도됨(생략가능)
})

// 4. 리듀서 만들기
function reducer(state = initialState, action){
    switch(action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            }
        default:
            return state;
    }
}
// 5. 스토어 만들기
const store = createStore(reducer);
console.log(store.getState());

const listener = ()=>{
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);

// 액션 디스패치 해보기
store.dispatch(increase());         // 위에 increase함수를 만들어서 이걸 넣어서 실행해주면 --> {type: INCREASE}이게 실행됨
                                    // 결과적으로, 액션을 그대로 넣어줘도 되고 위에처럼 액션을 생성해주는 함수를 적어줘도 됨
                                    //store.dispatch({
                                    //    type: INCRASE
                                    //})                    와 같은거
store.dispatch({
    type: INCREASE
})
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({}));
store.dispatch(addToList({id:1, name:"green", age: 20}));
console.log(decrease());