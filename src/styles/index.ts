import styled, { createGlobalStyle } from 'styled-components'

// código do reset css

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
}
`

// código do container, cria um container com display grid,
// onde a primeira coluna tem 224px de largura e a segundo ocupa o resto do coonteúdo

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default EstiloGlobal
