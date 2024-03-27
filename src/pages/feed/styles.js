import styled, { css } from 'styled-components'

export const Container = styled.main`

   width:100%;
   max-width:80%;
   margin:0 auto;
   margin-top:120px;
   display:flex;
   flex-direction:row;
   justify-content:space-between;

`

export const Title = styled.h3`

   font-family:'Open Sans';
   font-style:normal;
   font-weight:700;
   font-size:18px;
   margin-bottom:24px;
   line-height:25px;

   color: #ffffff;


`

export const TitleHeighlight = styled.h3`

   font-family:'Open Sans';
   font-style:normal;
   font-weight:700;
   font-size:18px;
   margin-bottom:24px;
   line-height:25px;

   color: #ffffff7d;

`

export const Column = styled.div`

flex:${({flex}) => flex};
padding-right: 24px;

`

const responsiveColumnResp = css`

@media(max-width:800px){
   display:none;
}

`

export const ColumnResp = styled.div`

flex:${({flex}) => flex};
padding-right: 24px;
${responsiveColumnResp}

`