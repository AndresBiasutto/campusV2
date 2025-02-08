import React from 'react'

interface FormErrorMsgProps {
    errRef: any
    errMsg: string
}

const FormErrorMsg:React.FC<FormErrorMsgProps> = ({errRef, errMsg}) => {
  return (
    <span ref={errRef} aria-live="assertive">
    {errMsg}
  </span>
  )
}

export default FormErrorMsg