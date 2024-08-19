import './Campo.css'
const Campo = (props) => {
    const change = (e) => {
        props.aoAlterado(e.target.value)
    }
    let typeInput = props.type ? props.type : 'text';
    return (
        <div className={`campo campo-${typeInput}`}>
            <label>{props.label}</label>
            <input type={typeInput} value={props.valor} onChange={change} required={props.required} placeholder={props.placeholder} name="nome" />
        </div>
    )
}

export default Campo;