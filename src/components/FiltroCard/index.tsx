import * as S from './styles'

// código dos cards que ficam na barra lateral embaixo do input

//tipagem para conseguir utilizar a propriedade ativo
export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroCard = ({ ativo, contador, legenda }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FiltroCard
