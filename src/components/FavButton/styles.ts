import styled, { css, keyframes } from 'styled-components'

const BeepKeyframe = keyframes`
  0% {
    transform: scale(1);
  }
  
  50% {
    transform: scale(1.4);
  }

  100% {
    transform: scale(1);
  }
`

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
`
const Button: any = styled.button`
  display: flex;
  align-items: center;
  margin: 0 5px 0 5px;
  ${(props: any) =>
    props.clicked &&
    css`
       {
        animation: ${BeepKeyframe} 0.5s ease;
      }
    `}

  & svg {
    margin: 0;
    padding: 0;
  }
`

const Text = styled.span`
  font-size: small;
`

export { BtnWrapper, Button, Text }
