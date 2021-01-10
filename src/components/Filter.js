import PropTypes from 'prop-types';
export default function Filter({ filter, onChange }) {
  return (
    <>
      <h3>Find contact by name</h3>
      <input placeholder="Что ищем?" onChange={onChange} value={filter} />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
