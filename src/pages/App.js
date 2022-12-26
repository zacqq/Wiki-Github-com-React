import {useState} from 'react';
import gitLogo from '../assets/logo_github_icon.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import Title from '../components/Title';
import {api} from '../services/api';

import {Container} from './styles'

const App = () => {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async () => {


    const {data} = await api.get(`repos/${currentRepo}`);

    if(data.id){

      const isExist = repos.find(repos => repos.id === data.id);

      if(!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }

    }
    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id) => {

    console.log('Removendo registro', id)

    //utilizar filter
     const remove = repos.filter((repo) => repo.id !== id);
     setRepos(remove);
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Title/>
    <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
    <Button onClick={handleSearchRepo}/>
    {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
