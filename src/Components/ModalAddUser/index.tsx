import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles, useField } from '@unform/core';
import Modal from '../Modal';

import { Form } from './styles';
import Input from '../Input';

interface IUser{
    id: number;
    name: string;
    age: string;
}

interface ICreateUser {
    name: string;
    age: string;
}

interface IModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleAddUser: (user: Omit<IUser, 'id'>) => void;
}

interface Name {
    name: string;
}

const ModalAddUser: React.FC<IModalProps> = ({ isOpen, setIsOpen, handleAddUser }) => {
    const formRef = useRef<FormHandles>(null)
    

    const handleSubmit = useCallback(
        async (data: ICreateUser) => {
            handleAddUser(data);

            setIsOpen();
    }, [handleAddUser, setIsOpen]);
  
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>New User</h1>

                <Input name="name" placeholder="Nome" />
                <Input name="age" placeholder="Idade" />
                <button type="submit">Create User</button>
            </Form>
        </Modal>
    );
}

export default ModalAddUser;