import React from 'react'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { MdEmail, MdLock, MdPassword, MdPerson } from 'react-icons/md'

//banco de dados
import { api } from '../../services/api'

//validação do formulário
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

//um formulário controlado
import { useForm, Controller} from "react-hook-form"

//manda para outra página
import { useNavigate } from 'react-router-dom'

import {
    Container,
    Content,
    Title,
    Text,
    ContentForm,
    TextDeco,
    TextMargin
} from './styles'


//regras do formulário
const schema = yup.object(
  {
    nome:yup.string().required('O campo é obrigatório !'),
    email:yup.string().email().required('O campo é obrigatório !'),
    senha:yup.string().min(3, 'No mínimo 3 caracteres').required('O campo é obrigatório !'),
  }
)

export const SignUp = () => {

  const Navigate = useNavigate()

  //parte de controle do useForm /Validação

  const { control, handleSubmit, formState:{errors, isValid}} = useForm({
    resolver:yupResolver(schema),
    mode:'onChange'
  })

  //parte em que o site irá consultar se o usuario ja esta no banco de dados e assim recarregar a página

  const onSubmit = async FormData =>{
    try{
      const { data } = await api.get(`users?email=${FormData.email}&senha=${FormData.senha}`)

      if(data.length === 1){
        Navigate('/feed')
      }else{
        alert('email ou senha inválidos')
      }
    }catch{
      alert('Houve um erro, tente novamente')
    }}


  return (
    <>
   <Header/>
   <Container>

    <Content>
      <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
    </Content>

    <ContentForm>
      <h1>Comece agora grátis</h1>
      <p>Crie sua conta e make the change._</p>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Input name='nome' control={control} errorMessage= {errors?.nome?.message} placeholder="nome" leftIcon={<MdPerson/>}/>

        <Input name='email' control={control} errorMessage= {errors?.email?.message} placeholder="email" leftIcon={<MdEmail/>}/>

        <Input name='senha' control={control} errorMessage= {errors?.senha?.message} placeholder="senha" leftIcon={<MdPassword/>}/>

        <Button title='Entrar' variant='secondary'  type='submit'/>
      </form>

      <TextMargin>Ao clicar em "criar minha conta grátis",Declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO</TextMargin>

      <Text>Já tenho conta. <TextDeco>Fazer login</TextDeco></Text>
    </ContentForm>
   </Container>

    </>
  )
}
