import "./App.css";
import { ZButton, ZDatePicker, ZInput, ZInputNumber, ZPaper, ZSelect, ZSwitch, ZTable } from "../components";

function App() {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      birthday: '',
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
      ellipsis: true,
      style: {
        color: '#f00'
      },
    },
    {
      title: '生日',
      key: 'birthday',
      type: 'date',
      format: 'YYYY/MM/DD',
    },
    {
      title: '年龄',
      key: 'age',
    },
    {
      title: '价格',
      key: 'price',
      type: 'currency',
      prefix: '￥',
    },
  ];

  return (
    <div className="p-4">
      <ZPaper className="mb-5">
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

        <ZDatePicker
          label="Date"
        ></ZDatePicker>

        <ZSwitch></ZSwitch>

        <ZButton type="primary">提交</ZButton>
      </ZPaper>

      <ZPaper
        header={
          <ZPaper.Header
            title="用户列表"
            toolbar={
              <ZButton type="primary">新建用户</ZButton>
            }
          ></ZPaper.Header>
        }
      >
        <ZTable
          bordered
          keyName="key"
          columns={ columns }
          data={ dataSource }
        ></ZTable>
      </ZPaper>
    </div>
  );
}

export default App;
