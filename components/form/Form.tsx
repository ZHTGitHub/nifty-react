import type { ColProps } from "antd";
import type { SizeType } from "../config-provider/SizeContext";
import type { ZFormSchema } from "./types/form";
import type { FormLabelAlign } from "./interface";
import type { FormContextProps } from "./context";
import type { Recordable } from './types/form'

import * as React from "react";
import { useState, useMemo } from "react";
import DisabledContext, {
  DisabledContextProvider,
} from "../config-provider/DisabledContext";
import SizeContext from "../config-provider/SizeContext";

import ZFormItem from "./components/FormItem";

import { FormContext } from "./context";

export type FormLayout = "horizontal" | "inline" | "vertical";

export interface ZFormProps extends React.HTMLAttributes<HTMLFormElement>{
  autoSetPlaceHolder?: boolean;
  colon?: boolean;
  disabled?: boolean;
  initialValues?: Recordable<any>;
  layout?: FormLayout;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  labelWrap?: boolean;
  name?: string;
  schemas?: ZFormSchema[];
  size?: SizeType;
  vertical: boolean;
  wrapperCol?: ColProps;

  onValueChange?: (key: string, value: any) => void;
  onValuesChange?: (changedValues: Recordable, allValues: Recordable) => void;
  setValues?: (values: Record<string, any>) => void;
  values?: Record<string, any>;
}

function ZForm(props: ZFormProps) {
  const contextDisabled = React.useContext(DisabledContext)

  const {
    colon,
    initialValues = {},
    disabled = contextDisabled,
    layout = 'horizontal',
    labelAlign = 'right',
    labelCol,
    labelWrap,
    name,
    schemas,
    size,
    vertical = false,
    wrapperCol,
    
    onValueChange,
    onValuesChange,
  } = props

  console.log(props)

  const [values, setValues] = useState<Record<string, any>>(initialValues)

  const handleValueChange = (key: string, value: any) => {
    values[key] = value

    onValueChange?.(key, value)
    onValuesChange?.({ key: value }, values)
  }

  // const formContextValue = useMemo<ZFormProps>(
  //   () => ({
  //     labelAlign,
  //     labelCol,
  //     labelWrap,
  //     name,
  //     schemas,
  //     wrapperCol,
  //     vertical: layout === "vertical",
  //   }),
  //   [
  //     labelAlign, 
  //     labelCol, 
  //     labelWrap, 
  //     name, 
  //     schemas, 
  //     wrapperCol, 
  //     layout
  //   ],
  // )

  return (
    <div>
      <FormContext.Provider value={{
        values,
        setValues: (v) => setValues(v),
        onValueChange: handleValueChange,
        onValuesChange,
      }}>
        <DisabledContextProvider disabled={ disabled }>
          <SizeContext.Provider value={size}>
            {schemas?.map((schema: ZFormSchema) => (
              <ZFormItem
                key={ schema.name }
                initialValues={ initialValues }
                formProps={ props }
                schema={ schema }
              ></ZFormItem>
            ))}
          </SizeContext.Provider>
        </DisabledContextProvider>
      </FormContext.Provider>
    </div>
  );
}

export default ZForm;
