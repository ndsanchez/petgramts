import styled, { css } from 'styled-components'
import { FadeIn } from '../../style/animation'

export const List: any = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${(props: any) =>
    props.fixed &&
    css`
       {
        ${FadeIn({ time: '0.5s', type: 'ease-out' })}
        background-color: #fff;
        border-radius: 60px;
        max-width: 370px;
        left: 0;
        right: 0;
        top: -20px;
        transform: scale(0.5);
        margin: 0 auto;
        z-index: 1;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        padding: 5px;
        position: fixed;
      }
    `}
`

export const Item = styled.li`
  padding: 0 8px;
`
