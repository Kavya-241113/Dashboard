import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { User } from '../types/User';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.tsx';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  role: yup.string().required('Role is required'),
});

interface Props {
  initialValues?: User;
  onSubmit: () => void;
}

const UserForm: React.FC<Props> = ({ initialValues, onSubmit }) => {
  const { addUser, editUser } = useContext(UserContext)!;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: initialValues || { name: '', email: '', role: '' },
    resolver: yupResolver(schema),
  });

  const submitHandler: SubmitHandler<User> = (data) => {
    if (initialValues) {
      editUser({ ...data, id: initialValues.id });
    } else {
      addUser({ ...data, id: Math.random().toString() });
    }
    onSubmit();
  };

  return (
    <form className="card p-4 mb-4" onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input className="form-control" {...register('name')} />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input className="form-control" {...register('email')} />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </div>
      <div className="mb-3">
        <label className="form-label">Role</label>
        <input className="form-control" {...register('role')} />
        {errors.role && <p className="text-danger">{errors.role.message}</p>}
      </div>
      <button type="submit" className="btn btn-success w-100">Submit</button>
    </form>
  );
};

export default UserForm;
