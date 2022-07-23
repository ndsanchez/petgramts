import styled, { css, keyframes } from 'styled-components'
import { FadeIn } from '../../style/animation'

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

export { Img, ImgWrapper }
