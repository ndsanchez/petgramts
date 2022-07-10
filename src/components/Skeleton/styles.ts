import styled, { css, keyframes } from 'styled-components'

const LoadKeyframe = (offset: number) => keyframes`
  from {
    left: -${offset}px;
  }

  to {
    left: 100%
  }
`

export const Div: any = styled.div`
  background-color: #f5f4f4;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  height: ${(props: any) => props.height}px;
  border-radius: ${(props: any) => (props.rounded ? 50 : 1)}%;
  overflow: hidden;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -${(props: any) => props.height}px;
    height: 100%;
    width: ${(props: any) => props.height}px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    animation: ${(props: any) => LoadKeyframe(props.height)} 1s
      cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`
