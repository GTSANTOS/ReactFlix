import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormField from '../../../../components/FormField';
import Button from '../../../../components/Button';
import useForm from '../../../../hooks/useForm';
import { Patch } from '../../../../repositories/categorias';
import '../categoria.css';

export default function EditaCategoria() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const history = useHistory();

  const valoresIniciais = {
    titulo: query.get('titulo'),
    descricao: query.get('descricao'),
    cor: query.get('cor'),
  };

  const { valores, handleChange } = useForm(valoresIniciais);

  const id = query.get('id');

  function handleSubmit(e) {
    e.preventDefault();
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

    Patch(id, valores)
      .then(() => {
        toast.success('Categoria editada com sucesso');
        history.push('/cadastro/categoria');
      })
      .catch(() => toast.error('Não foi possível cadastrar a categoria'));
  }

  return (
    <div className="main">
      <h1 className="titulo">Editar Categoria: {valores.titulo}</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <FormField
          name="titulo"
          type="text"
          value={valores.titulo}
          onChange={handleChange}
        >
          Título da Categoria:
        </FormField>

        <FormField
          name="descricao"
          type="textarea"
          value={valores.descricao}
          onChange={handleChange}
        >
          Descrição:
        </FormField>

        <FormField
          name="cor"
          type="color"
          value={valores.cor}
          onChange={handleChange}
        >
          Cor:
        </FormField>

        <div className="GridButton">
          <Button className="botoesColor">Salvar</Button>
          <Button
            border="true"
            background="black"
            as={Link}
            className="ButtonLink"
            to="/cadastro/categoria"
          >
            Voltar
          </Button>
        </div>
      </form>
      <div className="ir-home">
        <Link to="/">Ir para home</Link>
      </div>
    </div>
  );
}
