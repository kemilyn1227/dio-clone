import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../button'
import Logo from '../../assets/logo-dio.png'
import {
    BuscarInpuContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture,
} from './styles'

const Header = ({autenticado}) => {

    const Navigate = useNavigate();

    const handleClickSignIn= () =>{
        Navigate('/login')
    }

    const handleClickSignUp= () =>{
        Navigate('/signUp')
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={Logo} alt='logo da dio'/>

                {autenticado ? (
                    <>
                        <BuscarInpuContainer>
                        <Input placeholder='Buscar...'/>
                        </BuscarInpuContainer>
                        <Menu>Live code</Menu>
                        <Menu>Global</Menu>
                    </>
                  
                 ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/123175193?v=4%22,%22gravatar_id'/>
                ): 
                     <>
                        <MenuRight href='$'>Home</MenuRight>
                        <Button title='Entrar' onClick={handleClickSignIn}/>
                        <Button title='Cadastrar' onClick={handleClickSignUp}/>
                     </>
                }
                

            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
