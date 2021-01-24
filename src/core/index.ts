import { FormValidateRuleItemStruct, FormValidateRulesStruct } from "../inner";
import {CSSProperties} from "react";

/**
 * 表单校验结果结构
 */
export interface FormValidateResultStruct {
  result: boolean, // 校验结果
  message: string// 错误信息
}

/**
 *  获取表单校验的结果
 * @param rules           传入表单校验规则
 * @param values          传入表单值
 * @param validateFields  待校验的值，可选，如果传了代表只校验提供的值，其他值不进行校验，不传则会校验rules中所有的值
 */
export function getFormValidate<T extends FormValidateRulesStruct>(rules: T, values: Record<string, any>, validateFields?: Array<keyof T>): FormValidateResultStruct {
  const res: FormValidateResultStruct = {
    result: true,
    message: ""
  };

  let keys = Object.keys(rules).sort((a, b) => Number(a) - Number(b)).map(item => {
    if (item.includes("_")) {
      const key = item.split("_")[1];
      // @ts-ignore
      rules[key] = rules[item];
      return key;
    } else {
      return item;
    }
  });

  keys = Array.from(new Set(keys));


  // console.log(keys, rules, values);

  if (validateFields && validateFields.length) {
    keys = keys.filter(item => validateFields?.includes(item));
  }

  for (const fieldName of keys) {


    const val = values[fieldName];
    const curRules: FormValidateRuleItemStruct[] = rules[fieldName];

    const createFailRes = (rule: FormValidateRuleItemStruct) => {
      res.result = false;
      res.message = rule.message;
    };

    for (const rule of curRules) {

      if (rule.required && (!val || val === "请选择")) {
        createFailRes(rule);
        return res;
      }

      if (rule.exp && !rule.exp.test(val)) {
        createFailRes(rule);
        return res;
      }

      if (rule.validator && !rule.validator(fieldName, val, values, rule)) {
        console.log(fieldName, rule);
        createFailRes(rule);
        return res;
      }
    }

  }

  return res;
}

/**
 * 通用的倒计时方法
 * @param cb    时间更新时执行的回调
 * @param time  倒计时时长，默认为60秒
 */
export function countdown(cb: (time: number) => void, time = 60): NodeJS.Timeout {
  const timer = setInterval(() => {
    cb && cb(time);
    if (time === 0) {
      clearInterval(timer);
      return;
    }
    time--;
  }, 1000);
  return timer;
}

/**
 * 每个选项的结构
 */
export interface OptionsStruct {
  label: string,
  value: string
}

/**
 * 将枚举类型转换为map数组，作为picker的数据源
 * @param enumData
 * @param noAll
 */
export const enumToMap = (enumData: Record<string, any>, noAll = false): OptionsStruct[] => {
  return Object.keys(enumData).filter(key => (noAll && key !== "all") || !noAll).map<OptionsStruct>((key: string) => ({
    label: enumData[key],
    value: key,
  }));
};

/**
 * 合并样式属性
 * @param style1
 * @param style2
 */
export function mergeStyle(style1: CSSProperties, style2: CSSProperties = {}): CSSProperties {
  return {
    ...style1,
    ...style2
  };
}
