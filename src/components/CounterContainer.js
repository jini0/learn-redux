import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';
import Counter from './Counter';

const CounterContainer = () => {
    //๐useSelector๋ ๋ฆฌ๋์ค ์คํ ์ด์ ์ํ๋ฅผ ์กฐํํ๋ Hookํจ์
    //๐store.getState() ํ  ๋์ ๊ฒฐ๊ณผ ๋์ผํจ
    // 1. counter.js์ ๋ฆฌ๋์ค๋ชจ๋
    //* ๊ฐ์ฒด๊ตฌ์กฐ๋ถํดํ ๋น * 
    const { number, diff } = useSelector(state => (state.counter));         // console.log(store.getState());๋ฅผ ์ฐ๊ณ  ์ฝ์์ ๋ณด๋ฉด,
    //counter: {number: 0, diff: 1} ์นด์ดํฐ๋ผ๋ key์ ๊ฐ์ผ๋ก ๊ฐ์ฒด๊ฐ ๋ค์ด์์ด์!!!! useSelector(state => (state.counter))๋ 
    //--> {number: 0, diff: 1} ์ด๋ฐ์ ๋ฅผ ๋ฐ์์ค๋๊ฑฐ!!
    //0์ number๋ผ๋ ๋ณ์์ ๋ค์ ๋ด๊ณ , 1์ diff๋ผ๋ ๋ณ์์ ๋ค์ ๋ด์๊ฑฐ - ๊ฐ์ฒด๊ตฌ์กฐ๋ถํดํ ๋น
    
    //useDispatch๋ ๋ฆฌ๋์ค ์คํ ์ด์ dispatch๋ฅผ ํจ์์์ ์ฌ์ฉํ  ์ ์๊ฒํด์ฃผ๋ Hookํจ์
    // ๋ฆฌ๋์๋ฅผ ์คํ์์ผ์ฃผ๋ ์  : dispatch
    // ์๋ dispatch๋ ์ด๋ฐํํ๊ฐ ๋ง์์
    // dispatch({
    //     type: "INCREASE"
    // })
    // --> ์ด๋ ๊ฒ ํ๋๊ฑธ useDispatch()๋ผ๋ ํจ์๋ฅผ ์ด์ฉํด ๋ง๋ค์ด์ฃผ๋๊ฑฐ
    const dispatch = useDispatch();
    //๊ฐ ์ก์์ dispatchํ๋ ํจ์
    const onIncrease = () => dispatch(increase());         // const onIncrease = () => dispatch({type:INCREASE}); ์ ๊ฐ์๊ฑฐ!!!!
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));     //const onSetDiff = diff => dispatch({type: SET_DIFF, diff }) ์ ๊ฐ์๊ฑฐ!!
    return (
        <Counter number={number} diff={diff} 
        onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff} />
    );
};

export default CounterContainer;