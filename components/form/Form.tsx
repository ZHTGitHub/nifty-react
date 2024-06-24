import type { ColProps } from "antd";
import type { SizeType } from "../config-provider/SizeContext";
import type { ZFormSchema } from "./types/form";
import type { FormLabelAlign } from "./interface";
import type { FormContextProps } from "./context";
import type { Recordable } from './types/form'

import * as React from "react";
import { useMemo } from "react";
import DisabledContext, {
  DisabledContextProvider,
} from "../config-provider/DisabledContext";
import SizeContext from "../config-provider/SizeContext";

import ZFormItem from "./components/FormItem";

import { FormContext } from "./context";

export type FormLayout = "horizontal" | "inline" | "vertical";

export interface ZFormProps {
  // 是否设置默认占位符
  autoSetPlaceHolder?: boolean;
  colon?: boolean;
  defaultValues?: Recordable<any>;
  disabled?: boolean;
  layout?: FormLayout;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  labelWrap?: boolean;
  name?: string;
  schemas?: ZFormSchema[];
  size?: SizeType;
  wrapperCol?: ColProps;
}

function ZForm(props: ZFormProps) {
  const contextDisabled = React.useContext(DisabledContext);

  const {
    colon,
    defaultValues,
    disabled = contextDisabled,
    layout = "horizontal",
    labelAlign,
    labelCol,
    labelWrap,
    name,
    schemas,
    size,
    wrapperCol,
    // ...restFormProps,
  } = props;

  const formContextValue = useMemo<FormContextProps>(
    () => ({
      labelAlign,
      labelCol,
      labelWrap,
      name,
      schemas,
      wrapperCol,
      vertical: layout === "vertical",
    }),
    [labelAlign, labelCol, labelWrap, name, schemas, wrapperCol, layout],
  );

  console.log(schemas);

  return (
    <div>
      <FormContext.Provider value={formContextValue}>
        <DisabledContextProvider disabled={disabled}>
          <SizeContext.Provider value={size}>
            {schemas?.map((schema: ZFormSchema) => (
              <ZFormItem
                key={schema.name}
                defaultValues={ defaultValues }
                formProps={props}
                schema={schema}
              ></ZFormItem>
            ))}
          </SizeContext.Provider>
        </DisabledContextProvider>
      </FormContext.Provider>
    </div>
  );
}

export default ZForm;
