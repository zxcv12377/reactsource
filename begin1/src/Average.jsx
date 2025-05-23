import React, { useMemo, useState } from "react";

// useMemo() : 특정 연산의 불필요한 재실행 방지
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState([]);

  const getAverage = (numbers) => {
    console.log("평균 계산 중 ....");
    if (numbers.length == 0) return;
    // let sum = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //   sum += numbers[i];
    // }
    // const avg = sum / numbers.lenght;
    // return avg;

    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };

  const avg = useMemo(() => getAverage(list), [list]);

  const handleClick = () => {
    // list 추가
    // setList호출
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    console.log(list);
  };

  return (
    <div>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={handleClick}>등록</button>
      <ul>
        {list.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <div>number : {number}</div>
      <div>평균 : {avg}</div>
    </div>
  );
};

export default Average;
