import styled from 'styled-components'

export const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 10px 0;
    color: ${props => props.theme.colors.primary};
  }
`
