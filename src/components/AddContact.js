import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from './AddContacts.module.css';

export default function AddContact({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlerInputChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length <= 2 || number.trim().length <= 6) {
      alert('Введите коректное значение');
    } else {
      onSubmit({ id: uuidv4(), name, number });
      setName('');
      setNumber('');
    }
  };

  return (
    <>
      <h1>Phonebook </h1>
      <form className={s.formAddContact} onSubmit={handleSubmit}>
        <label className={s.addLable}>
          Name
          <input
            className={s.inputFild}
            type="text"
            name="name"
            value={name}
            placeholder="Введите имя"
            onChange={handlerInputChange}
          ></input>
        </label>
        <label className={s.addLable}>
          Number
          <input
            className={s.inputFild}
            type="phone"
            name="number"
            placeholder="Введите номер"
            value={number}
            onChange={handlerInputChange}
          ></input>
        </label>
        <button className="add-contact-btn" type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}

AddContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
