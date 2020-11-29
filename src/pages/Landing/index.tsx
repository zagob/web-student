import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ModalAddUser from '../../Components/ModalAddUser';
import ModalEditUser from '../../Components/ModalEditUser';
import api from '../../services/api';

import { 
    Container, 
    ContentUser,
    CreateUser
} from './styles';


interface IUser {
    id: number;
    name: string;
    age: string;
}


const Landing: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [editingUser, setEditingUser] = useState<IUser>({} as IUser)
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);


    useEffect(() => {
        async function loadUsers(): Promise<void> {
            const response = await api.get('/users');

            setUsers(response.data);
        }

        loadUsers();
    }, [])

    async function handleAddUser(user: Omit<IUser, 'id'>): Promise<void> {
        try {
            const response = await api.post('/users', {
                ...user,
            });

            setUsers([...users, response.data])
        } catch (err) {
            alert('err');
        }
    }

    async function handleUpdateUser(user: Omit<IUser, 'id'>): Promise<void> {
        try {
            const response = await api.put(`/users/${editingUser.id}`, {
                ...editingUser,
                ...user,
            })

            setUsers(
                users.map(mappedUser =>
                    mappedUser.id === editingUser.id ? { ...response.data } : mappedUser,
                ),
            )
        } catch (err) {
            alert('err')
        }
    }

    async function handleDeleteUser(id: number): Promise<void> {
        try {
            await api.delete(`/users/${id}`);

            setUsers(users.filter(user => user.id !== id));
        } catch (err) {
            alert('err')
        }
    }

    function toggleModal(): void {
        setModalOpen(!modalOpen);
    }

    function toggleEditModal(): void {
        setEditModalOpen(!editModalOpen);
    }

    function handleEditUser(user: IUser): void {
        setEditingUser(user);
        toggleEditModal();
    }

  return(
      <>
        <Container>
            {users.map(user => (
                <ContentUser key={user.id}>
                    <div className="avatar">
                        <img src="https://images.vexels.com/media/users/3/147102/isolated/preview/082213cb0f9eabb7e6715f59ef7d322a---cone-do-perfil-do-instagram-by-vexels.png" alt=""/>
                    </div>
                    <h1>{user.name}</h1>
                    <p>{user.age} years</p>
                    <div className="icons">
                        <div className="edit">
                            <FaEdit
                                size={20}
                                onClick={() => handleEditUser(user)}
                            />

                                <Link 
                                    to={`/profile/${user.id}`} 
                                    style={{ 
                                        textDecoration: 'none',
                                        marginLeft: 50,
                                        color: '#000',
                                    }}>
                                    editar
                                </Link>
                                <ModalEditUser
                                    isOpen={editModalOpen}
                                    setIsOpen={toggleEditModal}
                                    editingUser={editingUser}
                                    handleUpdateUser={handleUpdateUser}
                                />
                            {/* <button type="button" onClick={() => handleEditUser(user)}>oi</button> */}

                        </div>
                        <div className="trash">
                            <FaTrash
                                cursor="pointer" 
                                size={20}
                                onClick={() => handleDeleteUser(user.id)}  
                            />
                        </div>
                    </div>
                </ContentUser>
            ))}

            <ModalAddUser 
                isOpen={modalOpen} 
                setIsOpen={toggleModal} 
                handleAddUser={handleAddUser}>
            </ModalAddUser>
                <CreateUser>
                    <button type="button" onClick={toggleModal}>
                        +
                    </button>
                </CreateUser>
        </Container>
      </>
  );
}

export default Landing;