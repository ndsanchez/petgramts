import styled, { css, keyframes } from 'styled-components'
import { FadeIn } from '../../style/animation'

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

const ImgWrapper = styled.div`
  position: relative;
  padding: 56.25% 0 0 0;
  height: 0;
  overflow: hidden;
  width: 100%;
  margin-top: 15px;
`

const Img = styled.img`
  ${FadeIn()}
  border-radius: 10px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
`

const Text = styled.span`
  font-size: small;
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

export { Img, ImgWrapper, Button, BtnWrapper, Text }
