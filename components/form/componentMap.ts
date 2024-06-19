import type { Component } from 'react'
import type { ComponentType } from './types/index'

import ZInput from '../input'
import ZInputNumber from '../inputNumber'
import ZSelect from '../select'
import ZSwitch from '../switch'

const componentMap = new Map<ComponentType, any>()

componentMap.set('Input', ZInput)
componentMap.set('InputNumber', ZInputNumber)
componentMap.set('Select', ZSelect)
componentMap.set('Switch', ZSwitch)

export { componentMap }