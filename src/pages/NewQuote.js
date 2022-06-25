import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const history = useHistory();
    const addQuoteHandler = (quoteData) => {
        //will send data to server later
        console.log(quoteData);

        history.push('/quotes');
    };
    return <QuoteForm onAddQuote={addQuoteHandler}/>
};

export default NewQuote;