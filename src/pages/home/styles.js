import styled, {css } from 'styled-components'

export const Container = styled.main`

   width:100;
   max-width:80%;
   margin:0 auto;
   margin-top:120px;
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   align-items:center;

`

export const Title = styled.h2`

   font-family:'Open Sans';
   font-style:normal;
   font-weight:700;
   font-size:32px;
   width: 320px;
   margin-bottom:20px;
   line-height:44px;

   color: #ffffff;


`

export const TitleHeighlight = styled.span`

color:#E4105D;

`

export const TextContent = styled.p`

    font-family:'Open Sans';
    font-style:normal;
    font-weight:400;
    font-size:16px;
    width: 420px;
    margin-bottom:20px;
    line-height:22px;

    color: #ffffff;


`

const responsiveImg = css`
  @media (max-width: 900px) {
    display: none;
  }
`
export const Img = styled.img`
  ${responsiveImg}
`

const responsiveMain = css`
  @media (max-width: 900px) {
    margin: auto;
  }
`

export const Mains = styled.div`

${responsiveMain}
`



