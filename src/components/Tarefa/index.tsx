import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { remover } from '../../store/reducers/Tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ descricao, prioridade, status, titulo, id }: Props) => {
  const dispach = useDispatch()
  const [editando, setEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao placeholder={descricao} />
      <S.BarraAcoes>
        {editando ? (
          <>
            <S.BotaoSalvar onClick={() => setEditando(false)}>
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelar>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelar onClick={() => dispach(remover(id))}>
              Remover
            </S.BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
