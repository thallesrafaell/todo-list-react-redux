import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
const BarraLateral = () => {
  const dispach = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispach(alteraTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="Pendentes" contador={1} />
          <FiltroCard legenda="Concluidas" contador={2} />
          <FiltroCard legenda="Urgentes" contador={3} />
          <FiltroCard legenda="Iportantes" contador={4} />
          <FiltroCard legenda="Normal" contador={5} />
          <FiltroCard legenda="Todas" contador={10} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
