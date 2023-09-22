import { Link } from 'react-router-dom';
import './index.scss';

export default function Home() {
  return (
    <div className="App">
        <div className='pagina-home'>
      <div className='container'>
        <h1> Feira de Profissões</h1>
        <nav>
          <Link to='/listar'> Consultar </Link>
          <Link to='/inserir'> Inserir </Link>
        </nav>
      </div>
    </div>
    </div>
  );
}

