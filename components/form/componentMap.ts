import type { ComponentType } from './types/index'

import ZDatePicker from '../date-picker'
import ZInput from '../input'
import ZInputNumber from '../input-number'
import { RadioButtonGroup as ZRadioButtonGroup } from '../radio'
import ZSelect from '../select'
import ZSwitch from '../switch'

const componentMap = new Map<ComponentType, React.ElementType>()

componentMap.set('DatePicker', ZDatePicker)
componentMap.set('Input', ZInput)
componentMap.set('InputNumber', ZInputNumber)
componentMap.set('RadioButtonGroup', ZRadioButtonGroup)
componentMap.set('Select', ZSelect)
componentMap.set('Switch', ZSwitch)

export { componentMap }