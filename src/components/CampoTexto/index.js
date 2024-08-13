import './CampoTexto.css'
const CampoTexto = (props) => {
    const change = (e) => {
        props.aoAlterado(e.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={change} required={props.required} placeholder={props.placeholder} name="nome"/>
        </div>
    )
}

export default CampoTexto;