import { ItemContact } from '../Item';
import { List, Item, EmptyList } from './contactsList.styled';
import { useSelector } from 'react-redux';
import { selectFiltredContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const filtredContacts = useSelector(selectFiltredContacts);

  return (
    <>
      <List>
        {filtredContacts.length === 0 && (
          <EmptyList>There aren't contacts yet. Let's add somebody.</EmptyList>
        )}
        {filtredContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <ItemContact name={name} number={number} id={id} />
          </Item>
        ))}
      </List>
    </>
  );
};


