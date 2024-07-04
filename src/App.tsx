import type { ZFormRef } from '../components/form/Form'
import { Column, ZFormSchema, ZTreeSelect } from '../components'

import { useRef } from 'react'

import { 
  ZButton, 
  ZDatePicker, 
  ZForm,
  ZInput, 
  ZInputNumber, 
  ZPaper, 
  ZSelect, 
  ZSwitch, 
  ZTable 
} from '../components'

import './App.css'

function App() {
  const form = useRef<ZFormRef>(null)

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
  
  const columns: Column[] = [
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

    {
      title: '操作',
      key: 'action',
      render: () => {
        return '1'
      }
    }
  ];

  const schemas: ZFormSchema[] = [
    {
      component: 'TreeSelect',
      label: '上级',
      name: 'parent',
      componentProps: {
        treeData: [
          {
            value: 'home',
            title: '主页'
          }
        ]
      },
    },

    {
      component: 'Input',
      label: '姓名',
      name: 'name',
    },

    {
      component: 'InputNumber',
      label: '年龄',
      name: 'age',
    },

    {
      component: 'Select',
      label: '食物',
      name: 'foods',
      componentProps: {
        options: [
          {label: 'keyboard', value: 'Keyboard'},
          {label: 'mouse', value: 'Mouse'},
        ]
      }
    },

    {
      component: 'DatePicker',
      label: '生日',
      name: 'birthday',
    },

    {
      component: 'Switch',
      label: '阅读',
      name: 'read',
    },

    {
      component: 'RadioButtonGroup',
      label: '同意',
      name: 'agree',
      componentProps: {
        options: [
          {label: '是', value: 'Y'},
          {label: '否', value: 'N'},
        ]
      }
    },
  ]

  const onValueChange = (key: any, value: any) => {
    console.log({key, value})
  }

  const onValuesChange = (changedValues: any, allValues: any) => {
    console.log({changedValues, allValues})
  }

  return (
    <div className="p-4">
      <ZPaper className="mb-5">
        <ZTreeSelect
          treeData={[{
            value: 'home',
            title: '主页'
          }]}
        ></ZTreeSelect>

        <ZInput 
          label="Name"
        ></ZInput>

        <ZInputNumber 
          label="Count"
          defaultValue={ 1 }
        ></ZInputNumber>

        <ZSelect 
          label="Goods"
          defaultValue={ 'Keyboard' }
          options={
            [
              {label: 'keyboard', value: 'Keyboard'},
              {label: 'mouse', value: 'Mouse'},
            ]
          }
        ></ZSelect>

        <ZDatePicker
          label="Date"
        ></ZDatePicker>

        <ZSwitch
          defaultValue={ true }
        ></ZSwitch>

        <ZButton type="primary">提交</ZButton>
      </ZPaper>

      <ZPaper className="mb-5">
        <ZForm 
          ref={ form }
          autoSetPlaceHolder={ true }
          initialValues={{ name: 'zht', age: 19 }}
          schemas={ schemas }
          onValueChange={ onValueChange }
          onValuesChange={ onValuesChange }
        ></ZForm>

        <ZButton type="primary" onClick={ 
          () => {
            console.log(form.current?.getFieldsValue())
          } 
        }>打印表单值</ZButton>

        <ZButton type="primary" onClick={ 
          () => {
            form.current?.setFieldsValue({
              name: 'Leslie',
              age: 18,
            })
          } 
        }>设置表单值</ZButton>

        <ZButton type="primary" onClick={ 
          () => {
            form.current?.resetFieldsValue()
          } 
        }>重置表单值</ZButton>

        <ZButton type="primary" onClick={ 
          () => {
            form.current?.clearFieldsValue()
          } 
        }>清空表单值</ZButton>
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
