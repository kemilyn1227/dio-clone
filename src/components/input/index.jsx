import React from 'react'

import {InputContainer,InputText,IconContainer, ErrorText} from './styles'
import { Controller} from 'react-hook-form'

const Input= ({leftIcon, name, placeholder,control,errorMessage,...rest}) => {
  return (
    <>
    <InputContainer>

       {leftIcon ? (<IconContainer> {leftIcon}</IconContainer>): null}

       <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field}) => <InputText {...field}{...rest}  placeholder={placeholder}/>}
        />

       
    </InputContainer>
    
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText>: null}
    </>
  )
}

export { Input }