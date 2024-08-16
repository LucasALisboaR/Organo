import { useState } from 'react';
import Banner from './components/Banner'
import Formulario from './components/Formulario';
import Time from './components/Time';
import Footer from './components/Footer';

function App() {
  const [times, setTimes] = useState([
    { nome: 'Front-End',  color: '#57C278' },
    { nome: 'Back-End',  color: '#82CFFA' },
    { nome: 'QA',  color: '#A6D157' },
    { nome: 'OTM',  color: '#E06B69' },
  ])

  const [colaboradores, setColaboradores] = useState([])

  const onNewRegistrer = (e) => {
    setColaboradores([...colaboradores, e])
  }

  function deletandoColaborador() {
    console.log('deletando colabor')
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.color = cor;
      }
      return time;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(item => item.nome)} aoColaboradorCadastrado={colaborador => onNewRegistrer(colaborador)} />
      {times.map((time, index) =>
        <Time
          mudarCor={mudarCorDoTime}
          key={index}
          nome={time.nome}
          color={time.color}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletandoColaborador}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
