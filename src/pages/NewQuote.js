import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const addQuoteHandler = (quoteData) => {
        //will send data to server later
        console.log(quoteData);
    };
    return <QuoteForm onAddQuote={addQuoteHandler}/>
};

export default NewQuote;