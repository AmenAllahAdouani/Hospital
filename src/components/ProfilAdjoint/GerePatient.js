import React, { useState } from 'react';
import usersData from '../ProfilAdmin/users.json';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import './GerePatient.css';
import SideBarr from '../SideBarr/SideBarr';

Modal.setAppElement('#root');

const UsersTable = () => {
    const [users, setUsers] = useState(usersData);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [insertModalIsOpen, setInsertModalIsOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [newUser, setNewUser] = useState({
        id: '',
        photo: '',
        firstName: '',
        lastName: '',
        email: '',
        occupation: ''
    });

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const deleteUser = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
    };

    const openModal = (user) => {
        setModalIsOpen(true);
        setCurrentUser(user);
    };

    const openInsertModal = () => {
        setInsertModalIsOpen(true);
        setNewUser({
            id: Math.max(...users.map(u => u.id)) + 1,
            photo: '',
            firstName: '',
            lastName: '',
            email: '',
            occupation: ''
        });
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setInsertModalIsOpen(false);
    };

    const handleEdit = (e) => {
        e.preventDefault();
        const updatedUsers = users.map(user => user.id === currentUser.id ? currentUser : user);
        setUsers(updatedUsers);
        closeModal();
    };

    const handleInputChange = (e, userSetter) => {
        userSetter(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleInsert = (e) => {
        e.preventDefault();
        setUsers([...users, newUser]);
        closeModal();
    };

    
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='lowerPatient'>
            <SideBarr/>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Occupation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map(user => (
                            <tr key={user.id}>
                                <td><img src={user.photo} alt={`${user.firstName} ${user.lastName}`} style={{ width: '50px', height: '50px' }} /></td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.occupation}</td>
                                <td>
                                    <button onClick={() => openModal(user)}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button onClick={() => deleteUser(user.id)}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                    <button onClick={openInsertModal}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    {pageNumbers.map(number => (
                        <button key={number} onClick={() => paginate(number)}>
                            {number}
                        </button>
                    ))}
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Edit User"
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <form onSubmit={handleEdit}>
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={currentUser?.firstName || ''} onChange={e => handleInputChange(e, setCurrentUser)} />
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={currentUser?.lastName || ''} onChange={e => handleInputChange(e, setCurrentUser)} />
                        <label>Email:</label>
                        <input type="email" name="email" value={currentUser?.email || ''} onChange={e => handleInputChange(e, setCurrentUser)} />
                        <label>Occupation:</label>
                        <input type="text" name="occupation" value={currentUser?.occupation || ''} onChange={e => handleInputChange(e, setCurrentUser)} />
                        <button type="submit">Update</button>
                        <button type="button" onClick={closeModal}>Cancel</button>
                    </form>
                </Modal>
                <Modal
                    isOpen={insertModalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Insert User"
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <form onSubmit={handleInsert}>
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={newUser.firstName} onChange={e => handleInputChange(e, setNewUser)} />
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={newUser.lastName} onChange={e => handleInputChange(e, setNewUser)} />
                        <label>Email:</label>
                        <input type="email" name="email" value={newUser.email} onChange={e => handleInputChange(e, setNewUser)} />
                        <label>Occupation:</label>
                        <input type="text" name="occupation" value={newUser.occupation} onChange={e => handleInputChange(e, setNewUser)} />
                        <button type="submit">Insert</button>
                        <button type="button" onClick={closeModal}>Cancel</button>
                    </form>
                </Modal>
            </div>
        </div>
    );
}

export default UsersTable;
