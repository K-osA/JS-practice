/* Type */
const a = 3;
const b = 'aa';
let c = 4;
// true = (1)
let d = true;
// 의도적으로 표현
const e = null;
// undefined 메모리에는 있는데 아무것도 없음
let something;
// 숫자 + 문자 = 숫자가 문자가 되어 합쳐짐

/* Array(아무 Type이나 ok) */
const nonsense = [1, 2, "hello", false, null, true, undefined, "kosa"];
nonsense.push(true);
console.log(nonsense);