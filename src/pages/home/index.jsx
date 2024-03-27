import { useNavigate } from 'react-router-dom'
import Banner  from '../../assets/banner.png'
import { Button } from '../../components/button/index'

import { Header } from '../../components/header/index'

import {
    Container,
    TextContent,
    Title,
    TitleHeighlight,
    Img,
    Mains
} from './styles'

const Home = () =>{

    const Navigate = useNavigate();

    const handleClickSignIn= () =>{
        Navigate('/login')
    }
    return(
        <>
         <Header>Home</Header>
         <Container>
            <Mains>
                <Title>
        
                    <TitleHeighlight>
                        Implemente
                        <br/>
                    </TitleHeighlight>
                    o seu futuro global agora !
              
                </Title>
                <TextContent>
                    Domine as tecnologias mais utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidades com os melhores experts.

                </TextContent>
                <Button title='começar agora' variant='secondary' onClick={handleClickSignIn}/>

            </Mains>

            <div>
                <Img src={Banner} alt="Imagem principal" />
                
            </div>
         </Container>
      
        </>)
   
}

export { Home }