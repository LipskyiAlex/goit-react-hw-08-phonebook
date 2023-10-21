
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from 'components/input/Input';
import {Title, SubTitle} from '../components/contacts/Titles/Titles';
import Filter from '../components/contacts/filter/filter';
import { selectError, selectLoading } from 'redux/selectors';
import ContactsList from '../components/contacts/contactsList/contactsList';
import { fetchContacts } from 'redux/operations';


const Contacts = () => {

      const dispatch = useDispatch();
      const isLoading = useSelector(selectLoading);
      const error = useSelector(selectError);

      useEffect(() => {
   
        dispatch(fetchContacts())

      },[dispatch])

    return (
        
        <>
      <Title/>     
      <Input/>
      <SubTitle/>
      <Filter />
      {isLoading && <p>Loading contacts ... </p> }
      {error && <p>{error}</p>}
      <ContactsList/>
        </>
    )
}

export default Contacts;
