import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { Table } from './Contacts.styled';


export const Contacts = ({contacts, fnDelete}) => {
    if(contacts)
    return ( 
        <Table>
            <tbody>
            {contacts.map(({name, number, id}, i) => {
                return (
                    <ContactItem 
                        key={i}
                        name={name} 
                        number={number} 
                        id={id}
                        fnDelete={fnDelete}
                    ></ContactItem>
                )

            }
            )}
        </tbody>
    </Table>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.array, 
    fnDelete: PropTypes.func,
}