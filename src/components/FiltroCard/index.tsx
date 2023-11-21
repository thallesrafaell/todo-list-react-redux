import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'
export type Props = {
  legenda: string
  criterio: 'prioridade' | 'todas' | 'status'
  valor?: enums.Prioridade | enums.Status
}
const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispach = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)
  const verificaCardAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contaTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade == valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status == valor).length
    }
  }

  const filtrar = () => {
    dispach(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }
  const contador = contaTarefas()
  const ativo = verificaCardAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
