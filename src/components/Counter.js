import React from 'react';

const Counter = ({number, diff, onIncrease, onDecrease, onSetDiff}) => {
    //프리젠테이셔널 컴포넌트는 스토어에 접근하지 않음 -> 컨테이너 컴포넌트가 스토어에 접근하는거!
    //필요한 값들을 props(컨테이너컴포넌트의 값들- CounterContainer.js)에 넣어줌!
    const onChange = e => {
        onSetDiff(parseInt(e.target.value))        //parseInt() : 입력받은 값은 문자여서 int타입으로 변경해줌!
    }
    return (
        <div>
            <h2>{number}</h2>
            <div>
                <input type="number" value={diff}
                min="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
};

export default Counter;