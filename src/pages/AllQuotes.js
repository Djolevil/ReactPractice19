import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Quark', text: 'A contract is a contract is a contract!' },
    { id: 'q2', author: 'Picard', text: 'The line must be drawn here, this far, no further!' },
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
           
};

export default AllQuotes;