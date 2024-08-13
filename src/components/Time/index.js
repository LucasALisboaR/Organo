import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const cssBackgroundPrimary = props.primaryColor;
    const cssBackgroundSecondary = props.secondaryColor;
    return (
        (props.colaboradores.length) > 0 ? <section className='time' style={{ backgroundColor: cssBackgroundSecondary }}>
            <h3 className='nome' style={{ borderColor: cssBackgroundPrimary }}>{props.nome}</h3>
            <div className='cards-section'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        imagem={colaborador.imagem}
                        cargo={colaborador.cargo}
                        cor={cssBackgroundPrimary}
                    />
                )}
            </div>
        </section>
            : ''
    )
}

export default Time;