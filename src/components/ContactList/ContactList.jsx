import css from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.contacts__item} key={id}>
        <p className={css.contacts__name}>{name}</p>
        <p className={css.contacts__number}>{number}</p>
        <button
          type="button"
          className={css.delete__btn}
          onClick={() => onDeleteContact(name)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.prototype = {
  contacts: PropTypes.object.isRequired,
};

export default ContactList;
