import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext.tsx';
import UserForm from './UserForm.tsx'; 

const UserTable: React.FC = () => {
  const { users, deleteUser } = useContext(UserContext)!;
  const [sortBy, setSortBy] = useState<'name' | 'email' | 'role'>('name');
  const [editingUser, setEditingUser] = useState(null); 
  const [showEditForm, setShowEditForm] = useState(false); 
  const sortedUsers = [...users].sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

  const handleEditClick = (user: any) => {
    setEditingUser(user); 
    setShowEditForm(true); 
  };

  const handleFormClose = () => {
    setEditingUser(null); 
    setShowEditForm(false); 

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th onClick={() => setSortBy('name')} style={{ cursor: 'pointer' }}>
              Name
            </th>
            <th onClick={() => setSortBy('email')} style={{ cursor: 'pointer' }}>
              Email
            </th>
            <th onClick={() => setSortBy('role')} style={{ cursor: 'pointer' }}>
              Role
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2" onClick={() => handleEditClick(user)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Show the edit form if a user is being edited */}
      {showEditForm && editingUser && (
        <div className="mt-4">
          <UserForm
            initialValues={editingUser} 
            onSubmit={handleFormClose} 
          />
        </div>
      )}
    </div>
  );
};
}

export default UserTable;
