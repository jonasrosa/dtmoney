 import styled from 'styled-components'
 import {colors} from '../../styles/tokey/colors'

 const Container= styled.div` 
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 gap: 2rem;
 margin-top: -10rem;
  div{
      background: ${colors.shape};
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;
      color:${colors.textTitle};
      header{
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      strong {
          display: block;
          margin-top: 1rem;
          font-size: 2rem;
          font-weight: 500;
          line-height: 3rem;
      }
      &.highlight-background{
          background: ${colors.green};
          color:${colors.white}
      }
  }
 `;
 export{Container}