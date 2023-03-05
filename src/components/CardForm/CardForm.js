import styles from './CardForm.module.scss';

import { useState } from 'react';

import TextInput from './../TextInput/TextInput';
import Button from './../Button/Button';

import { useDispatch } from 'react-redux';

const CardForm = (props) => {

    const [title, setTitle] = useState('');

    const dispatch = useDispatch();
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', payload: { title, columnId: props.columnId } });
        setTitle('');
    };

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} action={props.addCard} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;

