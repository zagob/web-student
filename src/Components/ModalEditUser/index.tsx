import React, { useCallback, useRef } from 'react';

import { Form } from './styles';

import { FormHandles } from '@unform/core';
import Modal from '../Modal';
import Input from '../Input';

interface IUser {
    id: number;
    name: string;
    age: string;
}

interface IModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleUpdateUser: (user: Omit<IUser, 'id'>) => void;
    editingUser: IUser;
}

interface IEditUser {
    name: string;
    age: string;
}

const ModalEditUser: React.FC<IModalProps> = ({
    isOpen,
    setIsOpen,
    editingUser,
    handleUpdateUser,
 }) => {
     const formRef = useRef<FormHandles>(null);

     const handleSubmit = useCallback(
         async (data: IEditUser) => {
            handleUpdateUser(data);

            setIsOpen();
    }, [handleUpdateUser, setIsOpen])
  return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <Form ref={formRef} onSubmit={handleSubmit} initialData={editingUser}>
                <h1>Editar User</h1>

                <Input name="name" placeholder="Nome" />
                <Input name="age" placeholder="Idade" />
                <button type="submit">Atualizar Dados</button>
          </Form>
      </Modal>
  );
}

export default ModalEditUser;