import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefaSlice = createSlice({
  name: 'ListaDeTarefas',
  initialState: [
    new Tarefa(
      'Esturadar JavaScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),

    new Tarefa(
      'Esturadar TypeScript',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Rever aula 2 do modulo',
      2
    ),
    new Tarefa(
      'Esturadar React',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Praticar useEffect',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefaSlice.actions

export default tarefaSlice.reducer
