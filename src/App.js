import { useState } from 'react';
import Banner from './components/Banner'
import Formulario from './components/Formulario';
import Time from './components/Time';
import Footer from './components/Footer';

function App() {
  const times = [
    { nome: 'Front-End', secondaryColor: '#D9F7E9', primaryColor: '#57C278' },
    { nome: 'Back-End', secondaryColor: '#E8F8FF', primaryColor: '#82CFFA' },
    { nome: 'QA', secondaryColor: '#F0F8E2', primaryColor: '#A6D157' },
    { nome: 'OTM', secondaryColor: '#FDE7E8', primaryColor: '#E06B69' },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const onNewRegistrer = (e) => {
    setColaboradores([...colaboradores, e])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(item => item.nome)} aoColaboradorCadastrado={colaborador => onNewRegistrer(colaborador)} />
      {times.map(time =>
        <Time
          key={time.name}
          nome={time.nome}
          primaryColor={time.primaryColor}
          secondaryColor={time.secondaryColor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
