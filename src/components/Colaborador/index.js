import './Colaborador.css'
import { IoIosCloseCircle } from 'react-icons/io';
import { MdOutlineFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";



const Colaborador = ({ colaborador, cor, aoDeletar, aoFavoritar }) => {
    const linearBackground = `linear-gradient(to bottom, ${cor} 30%, white 20%)`;
    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    const propsFavorite = {
        className: 'icon-favorite',
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='all-card'>
            {(colaborador.favorite) === true
                ? <MdOutlineFavorite {...propsFavorite} color='#ff0000' />
                : <MdFavoriteBorder {...propsFavorite} />
            }

            <IoIosCloseCircle
                className='icon-close'
                size={25}
                onClick={() => { aoDeletar(colaborador.id) }} />
            <div className='card' style={{ background: linearBackground }}>
                <img alt='name' className='avatar' src={
                    colaborador.imagem ? colaborador.imagem : '/imagens/userEmptyIMG.png' }></img>
                <h4 className='user-name'>{colaborador.nome}</h4>
                <p className='user-description'>{colaborador.cargo}</p>
            </div>
        </div>
    )
}

export default Colaborador;