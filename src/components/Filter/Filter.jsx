import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { InputField } from '../ContactForm/ContactForm.styled';

export const Filter = ({filter, filterChange}) => {
    return (
        <>
            <p>
                Find contacts by name
            </p>
            <InputField 
            type="text"
            name="filter"
            value={filter}
            id={nanoid()}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={filterChange}
            required
            />
        </>
    )
}

Filter.propTypes = {
    filter: PropTypes.string, 
    filterChange: PropTypes.func,
}