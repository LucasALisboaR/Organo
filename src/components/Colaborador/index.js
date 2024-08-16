import './Colaborador.css'
import { IoIosCloseCircle } from 'react-icons/io';

const Colaborador = ({ nome, imagem, cargo, cor, aoDeletar }) => {
    const linearBackground = `linear-gradient(to bottom, ${cor} 30%, white 20%)`;
    return (
        <div className='all-card'>
            <div className='card' style={{ background: linearBackground }}>
                <img alt='name' className='avatar' src={imagem}></img>
                <h4 className='user-name'>{nome}</h4>
                <p className='user-description'>{cargo}</p>
                <button className='deletar' onClick={aoDeletar}>Remover colaborador</button>
            </div>
        </div>
    )
}

export default Colaborador;