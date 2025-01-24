import React, { useState } from 'react';
import UserForm from './components/UserForm.tsx';
import UserTable from './components/UserTable.tsx';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mt-5">
      <div className="text-center">
        <button className="btn btn-primary mb-3" onClick={() => setShowForm(true)}>
          Add User
        </button>
      </div>
      {showForm && <UserForm onSubmit={() => setShowForm(false)} />}
      <UserTable />
    </div>
  );
};

export default App;
