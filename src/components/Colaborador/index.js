import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, cor }) => {
    const linearBackground = `linear-gradient(to bottom, ${cor} 30%, white 20%)`;
    return (
        <div className='card' style={{ background: linearBackground }}>
            <img alt='name' className='avatar' src='/imagens/d4a155386c1abed7159bad8602bc94fa.png'></img>
            <h4 className='user-name'>{nome}</h4>
            <p className='user-description'>{cargo}</p>
        </div>
    )
}

export default Colaborador;