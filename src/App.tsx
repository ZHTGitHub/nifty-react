import './App.css'
import { ZInput, ZInputNumber, ZSelect, ZSwitch, ZTable } from '../components'

function App() {
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

      <ZTable></ZTable>
    </>
  )
}

export default App
