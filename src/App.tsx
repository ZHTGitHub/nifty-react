import "./App.css";
import { ZInput, ZInputNumber, ZSelect, ZSwitch, ZTable } from "../components";

function App() {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      birthday: '1998-02-19 08:13',
      age: 32,
      price: 1596464168,
    },
    {
      key: '2',
      name: '胡彦祖',
      birthday: '2006-11-05 17:06',
      age: 42,
      price: 99,
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '生日',
      key: 'birthday',
      type: 'date',
      format: 'YYYY/MM/DD'
    },
    {
      title: '年龄',
      key: 'age',
    },
    {
      title: '价格',
      key: 'price',
      type: 'currency',
      prefix: '￥'
    },
  ];

  return (
    <>
      <ZInput label="Name"></ZInput>

      <ZInputNumber label="Count"></ZInputNumber>

      <ZSelect 
        label="Goods"
        options={
          [
            {label: 'keyboard', value: 'keyboard'},
            {label: 'mouse', value: 'Mouse'},
          ]
        }
      ></ZSelect>

      <ZSwitch></ZSwitch>

      <ZTable
        bordered
        keyName="key"
        columns={ columns }
        data={ dataSource }
      ></ZTable>
    </>
  );
}

export default App;
