'use client';
import { CustomBtn } from '@/components';
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from '@/lib/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useState } from 'react';

const CounterSlicePage = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);
  const [amount,setAmount] = useState<number>(0);

  const handleOnClick =()=> {
    if(amount===0) return;
    dispatch(incrementByAmount(amount));
  };

  return (
    <>
      <h1>Counter Slice Page</h1>
      <input type="number" value={amount} onChange={(e)=>setAmount(Number(e.target.value))} placeholder='Type a number here!!!'/>
      <p>Count {count}</p>
      <div className="flex flex-row gap-2">
        <CustomBtn
          title="Increment by 1"
          onClick={() => dispatch(increment())}
        />
        <CustomBtn
          title="Decrement by 1"
          onClick={() => dispatch(decrement())}
        />
        <CustomBtn id="incrementByAmount" title="Increment By Amount" onClick={handleOnClick} />
        <CustomBtn title="Reset" onClick={() => dispatch(reset())} />
      </div>
    </>
  );
};

export default CounterSlicePage;
