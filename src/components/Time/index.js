import './Time.css'
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

const Time = ({ mudarCor, key, nome, color, colaboradores, aoDeletar }) => {

    return (
        (colaboradores.length) > 0 ? <section className='time' style={{ backgroundColor: hexToRgba(color, '0.6')}}>
            <input type='color' className='input-color' value={color} onChange={evento => mudarCor(evento.target.value, key)} />
            <h3 className='nome' style={{ borderColor: color }}>{nome}</h3>
            <div className='cards-section'>
                {colaboradores.map((colaborador, index) => {
                    return <Colaborador
                        key={index}
                        nome={colaborador.nome}
                        imagem={colaborador.imagem}
                        cargo={colaborador.cargo}
                        cor={color}
                        aoDeletar={aoDeletar}
                    />
                }
                )}
            </div>
        </section >
            : ''
    )
}

export default Time;