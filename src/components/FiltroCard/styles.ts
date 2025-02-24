import styled from 'styled-components'

//tipagem do componente
type Props = {
  ativo: boolean
}

//estilo do card

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.5s;
`

//estilodo do número de tarefas

export const Contador = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: block;
`

//estilo do label de cada tarefa

export const Label = styled.span`
  font-size: 14px;
`
