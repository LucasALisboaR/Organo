import { useState } from 'react';
import Banner from './components/Banner'
import Formulario from './components/Formulario';
import Time from './components/Time';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [times, setTimes] = useState([
    { nome: 'Front-End', color: '#57C278', id: uuidv4() },
    { nome: 'Back-End', color: '#82CFFA', id: uuidv4() },
    { nome: 'QA', color: '#A6D157', id: uuidv4() },
    { nome: 'OTM', color: '#E06B69', id: uuidv4() },
  ])

  const inicial = [
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome,
      id: uuidv4()
    },
    {
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[0].nome,
      id: uuidv4()
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].nome,
      id: uuidv4()
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].nome,
      id: uuidv4()
    },
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].nome,
      id: uuidv4()
    },
    {
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].nome,
      id: uuidv4()
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].nome,
      id: uuidv4()
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nome,
      id: uuidv4()
    },
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].nome,
      id: uuidv4()
    },
    {
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[2].nome,
      id: uuidv4()
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].nome,
      id: uuidv4()
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].nome,
      id: uuidv4()
    },
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].nome,
      id: uuidv4()
    },
    {
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[3].nome,
      id: uuidv4()
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].nome,
      id: uuidv4()
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].nome,
      id: uuidv4()
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  const onNewRegistrer = (e) => {
    setColaboradores([...colaboradores, e])
  }

  function deletandoColaborador(id) {
    console.log('deletando colabor', id)
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.color = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
    console.log(times)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(item => item.nome)}
        aoColaboradorCadastrado={colaborador => onNewRegistrer(colaborador)}
      />
      {
        times.map((time, index) =>
          <Time
            mudarCor={mudarCorDoTime}
            key={time.id}
            id={time.id}
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
