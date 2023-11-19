import { useState } from 'react'
import * as S from './styles'

type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tarefa = ({ descricao, prioridade, status, titulo }: Props) => {
  const [editando, setEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag>{prioridade}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Descricao placeholder={descricao} />
      <S.BarraAcoes>
        {editando ? (
          <>
            <S.Botao onClick={() => setEditando(false)}>Salvar</S.Botao>
            <S.Botao>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
