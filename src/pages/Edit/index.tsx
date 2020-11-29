import React, { useCallback, useRef, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FormHandles } from '@unform/core';
// import { Form } from '@unform/web';

import {Form} from './styles';

import api from '../../services/api';
import Input from '../../Components/Input';

interface IUser {
  id: string;
  name: string;
  age: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { pathname } = useLocation();

  const [, , user_id] = pathname.split('/');

  const [user, setUser] = useState<IUser[]>([]);

  useEffect(() => {
    api.get(`/users/${user_id}`).then((response) => setUser(response.data));
  }, [user_id]);

  const handleUpdateSubmit = useCallback(
    async ({ name, age }: IUser) => {
      try {
        await api.put(`/users/${user_id}`, { id: user_id, name, age });

        alert('Sucesso, informações atualizadas');

        history.push('/');
      } catch (err) {
        console.log(err);

        alert(
          'Erro, houve um erro ao atualizar suas informações, cheque seu console',
        );
      }
    },
    [history, user_id],
  );

  return (
    <div className="container2">
      <Link to="/" className="back">
        <h1>Voltar</h1>
      </Link>
      <div className="card">
        <h1>Perfil</h1>

        <div>
          <Form
            ref={formRef}
            onSubmit={handleUpdateSubmit}
            initialData={user}
          >
            <Input name="name" placeholder="Nome" />
            <Input name="age" placeholder="Idade" />

            <button type="submit">Atualizar perfil</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
