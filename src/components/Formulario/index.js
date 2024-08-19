import { useState } from "react"
import Botao from "../Button"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'

const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const onSave = (e) => {
        e.preventDefault();
        props.aoColaboradorCadastrado({
            nome,cargo,imagem,time
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />
                <Campo
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} />
                <Campo
                    required={false}
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa
                    required={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)} />
                <Botao>
                    Criar card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault();
                props.cadastrarTime({nome: nomeTime, color: corTime})
                setNomeTime('');
                setCorTime('');
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    required
                    label="Nome do time"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)} />
                <Campo
                    required
                    label="Cor"
                    placeholder="Escolha a cor do time"
                    valor={corTime}
                    type="color"
                    aoAlterado={valor => setCorTime(valor)} />
                <Botao>
                    Criar time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario