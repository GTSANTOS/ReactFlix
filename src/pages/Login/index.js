import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormField from '../../components/FormField';
import useForm from '../../hooks/useForm';
import Button from '../../components/Button';
import userContext from '../../store/UserContext';

import './login.css';

export default function Login() {
  const currentlyUser = useContext(userContext);
  const history = useHistory();
  const { handleChange, valores, handleClick } = useForm({
    usuario: '',
    senha: '',
  });

  function handleSubmit(event) {
    event.preventDefault();

    let errors = [];
    const chaves = Object.keys(valores);

    errors = chaves.filter((chave) => {
      return !valores[chave];
    });

    if (errors.length > 0) {
      errors.forEach((error) => {
        toast.error(`Campo ${error} precisa ser preenchido`);
      });
      return;
    }

    if (valores.usuario === 'TESTE123') {
      currentlyUser.handleUserContext(true);
      toast.success('Usuario logado com sucesso');
      history.push('/');
    } else {
      toast.error('Usuário não encontrado');
    }
  }

  return (
    <div className="main">
      <h1 className="usuario">Efetuar o login</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <FormField
          name="usuario"
          type="text"
          value={valores.usuario}
          onChange={handleChange}
        >
          Login:
        </FormField>

        <FormField
          name="senha"
          type="text"
          value={valores.senha}
          onChange={handleChange}
        >
          senha:
        </FormField>
        <div className="GridButton">
          <Button className="botoesColor">Logar</Button>
          <Button
            onClick={handleClick}
            background="#9E9E9E"
            type="reset"
            color="black"
          >
            Limpar
          </Button>
        </div>
      </form>
    </div>
  );
}
