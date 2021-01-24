/**
 * 表单校验规则项结构
 */
export interface FormValidateRuleItemStruct {
  required?: boolean,// 当前表单项是否必填
  message: string,// 错误提示
  exp?: RegExp,// 正则表达式
  // 校验函数
  validator?: (fileName: string, value: string, form: Record<string, any>, rule?: FormValidateRuleItemStruct) => boolean
}

/**
 * 表单校验规则集合
 */
export interface FormValidateRulesStruct extends Record<string, any>{
  [key: string]: FormValidateRuleItemStruct[]
}
