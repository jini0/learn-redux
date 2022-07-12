import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';
import Counter from './Counter';

const CounterContainer = () => {
    //💚useSelector는 리덕스 스토어의 상태를 조회하는 Hook함수
    //💚store.getState() 할 때의 결과 동일함
    // 1. counter.js의 리덕스모듈
    //* 객체구조분해할당 * 
    const { number, diff } = useSelector(state => (state.counter));         // console.log(store.getState());를 찍고 콘솔을 보면,
    //counter: {number: 0, diff: 1} 카운터라는 key의 값으로 객체가 들어있어서!!!! useSelector(state => (state.counter))는 
    //--> {number: 0, diff: 1} 이런애를 받아오는거!!
    //0은 number라는 변수에 다시 담고, 1은 diff라는 변수에 다시 담은거 - 객체구조분해할당
    
    //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게해주는 Hook함수
    // 리듀서를 실행시켜주는 애 : dispatch
    // 원래 dispatch는 이런형태가 많았음
    // dispatch({
    //     type: "INCREASE"
    // })
    // --> 이렇게 했던걸 useDispatch()라는 함수를 이용해 만들어주는거
    const dispatch = useDispatch();
    //각 액션을 dispatch하는 함수
    const onIncrease = () => dispatch(increase());         // const onIncrease = () => dispatch({type:INCREASE}); 와 같은거!!!!
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));     //const onSetDiff = diff => dispatch({type: SET_DIFF, diff }) 와 같은거!!
    return (
        <Counter number={number} diff={diff} 
        onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff} />
    );
};

export default CounterContainer;