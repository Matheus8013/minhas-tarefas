import * as S from './styles'

// código dos cards que ficam na barra lateral embaixo do input

//tipagem para conseguir utilizar a propriedade ativo
export type Props = {
  ativo?: boolean
}

const FiltroCard = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.Contador>3</S.Contador>
    <S.Label>Pendentes</S.Label>
  </S.Card>
)

export default FiltroCard
