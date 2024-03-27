import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import Backgro from '../../assets/Captura de tela 2023-09-29 202712.png'

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture,

} from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://i.pinimg.com/564x/6f/86/4e/6f864e682c8898862fca3b8e54108b7a.jpg'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/123175193?v=4%22,%22gravatar_id'/>
                <div>
                    <h4>Kemilyn</h4>
                    <p>há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para o curso de html e css</h4>
                <p>Projeto feito com o curso de Html e Css no bootcamp dio do global avanade... <strong>Saiba mais </strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JAVASCRIPT</h4>
                <p>
                    <FiThumbsUp/> 5k
                </p>
            </HasInfo>
        </Content>
    </CardContainer>

  )
}

export { Card }
