import { MdEmail, MdLock} from 'react-icons/md'
import { Button } from '../../components/button/index'
import { Input } from '../../components/input'
import { Header } from '../../components/header/index'
import { useNavigate } from 'react-router-dom'
import { useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from '../../services/api'
import {
    Container,
    ColumnCadastro,
    CriarText,
    EsqueciText,
    Row,
    Title,
    TitleLogin,
    Wrapper,
    Column,
    SubTitleLogin,
} from './styles'

const schema = yup.object({

    email: yup.string().email('email não é valido').required('campo obrigatorio'),
    password: yup.string().min(3,'No minimo 3 caracteres').required('campo obrigatorio'),
  })

const Login = () =>{

    const Navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid}} = useForm({
        resolver: yupResolver(schema),
        mode:'onChange',
        /*assim que o usuario digitar ja sera validado*/
    });
    
    console.log(isValid ,errors)

    const onSubmit = async formData => {
        try{

            //quando se faz login nao é recomendado usar o get!!
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                Navigate('/feed')

            }else{
                alert('email ou senha invalidos')
            }
            
            
            
        }catch{
            alert('Houve um erro, tente novamente')
        }
    }
     
    return(
        <>
         <Header>Home</Header>
         <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas desejadas.
              
                </Title>

            </Column>

            <ColumnCadastro>
                <Wrapper>
                    <TitleLogin>Já tem cadastro ?</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Input name='email' control={control} errorMessage= {errors?.email?.message} placeholder="email" leftIcon={<MdEmail/>}/>

                        <Input name='password'  control={control} errorMessage= {errors?.password?.message}placeholder="senha" type='password' leftIcon={<MdLock/>}/>
                        
                        <Button title='Entrar' variant='secondary'  type='submit'/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
                
                
            </ColumnCadastro>
         </Container>
      
        </>)
   
}

export { Login }