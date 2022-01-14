import { List, Item } from "./ContactListStyled";

export const ContactList = ({ contacts, filter, onDelete }) => {
  return (
    <List>
      {filter
        ? contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ name, number, id }) => (
              <Item key={id}>
                <span>{name}:</span>
                <span>{number} </span>
                <button type="button" onClick={() => onDelete(id)}>
                  Delete
                </button>
              </Item>
            ))
        : contacts.map(({ name, number, id }) => (
            <Item key={id}>
              <span>{name}:</span>
              <span>{number} </span>
              <button type="button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </Item>
          ))}
    </List>
  );
};
