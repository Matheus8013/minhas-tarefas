import styled from 'styled-components'

//estilo da barra lateral

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`
//estilo do container do filtro

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

//código do input(campo de pesquisa)

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
