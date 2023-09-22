import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import axios from 'axios';


export default function Inserir() {
  const [nome, setNome] = useState(''); 
  const [idade, setIdade] = useState('');
  const [nota, setNota] = useState('');
  const [preferencia, setPreferencia] = useState('');


  async function salvarContato() {
    let contato = {
      nome: nome,
      idade: idade,
      nota: nota,
      preferencia: preferencia
    }


    let url = 'http://localhost:5000/contato';
    let resp = await axios.post(url, contato);

    alert('Salvouu! :)');
  }

  return (
    <div className='pagina-inserir'>
      <div className='container'>
        <h1> Novo contato</h1>
        <section className='form'>
          <div>
            <label>Nome: </label>
            <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
          </div>
          <div>
            <label>Idade: </label>
            <input type='text' value={idade} onChange={e => setIdade(e.target.value)} />
          </div>
          <div>
            <label>Nota da Feira: </label>
            <input type='text' value={nota} onChange={e => setNota(e.target.value)} />
          </div>
          <div>
            <label>Preferência de curso: </label>
            <input type='text'  value={preferencia} onChange={e => setPreferencia(e.target.value)} />
          </div>
    
          <div className='right'>
            <button onClick={salvarContato}> Salvar </button>
          </div>
        </section>

        <div className='voltar'>
          <hr />
          <Link to='/'> Voltar </Link>
        </div>
      </div>
    </div>
  )
}