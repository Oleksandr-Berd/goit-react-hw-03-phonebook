import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label htmlFor="" className={css.label__filter}>
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={css.input__filter}
    />
  </label>
);

Filter.prototype = {
  value: PropTypes.string.isRequired,
};

export default Filter;
