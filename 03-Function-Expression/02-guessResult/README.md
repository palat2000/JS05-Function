บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const showModal = alert;
showModal("Execute modal"); // * alert คำว่า Execute modal
```

```js
const showModal = alert();
showModal("Execute modal"); // ** error เพราะ alert คืนค่าเป็น undefined
```
