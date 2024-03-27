import { Link } from 'react-router-dom'
import Banner  from '../../assets/banner.png'
import { Button } from '../../components/button/index'
import { Card } from '../../components/Card'
import { Header } from '../../components/header/index'
import {UserInfo } from '../../components/UserInfo'

import {
    Container,
    Column,
    Title,
    TitleHeighlight,
    ColumnResp
} from './styles'

const Feed = () =>{
    return(
        <>
         <Header autenticado={true}>Home</Header>
         <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </Column>
            <ColumnResp flex={1}>
                <TitleHeighlight># RANKING 5 TOP DA SEMANA</TitleHeighlight>
                <UserInfo percentual={35} nome='Kemilyn carato' imagem='https://avatars.githubusercontent.com/u/123175193?v=4%22,%22gravatar_id'/>
                <UserInfo percentual={50} nome='Taehyung kim' imagem='https://i.pinimg.com/564x/0e/76/bc/0e76bc076d4fc7adcf96b1e9ff9b620e.jpg'/>
                <UserInfo percentual={20} nome='Jungkook jeon' imagem='https://i.pinimg.com/564x/c4/b1/8a/c4b18a499bf9acd684da156383039db0.jpg'/>
                <UserInfo percentual={80} nome='Namjon kim' imagem='https://i.pinimg.com/564x/ae/56/cc/ae56cc175c042cb6485691f7b2768f9b.jpg'/>
                <UserInfo percentual={80} nome='Jimin park' imagem='https://i.pinimg.com/564x/71/19/81/7119812c0ac60a637b77bf09f882be97.jpg'/>

            </ColumnResp>

         </Container>
      
        </>)
   
}

export { Feed }