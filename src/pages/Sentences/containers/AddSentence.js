import { connect } from 'react-redux'
import AddSentence from '../components/AddSentence'
import { 
    addSentence,
    changeSentenceTitle,
    changeSentenceSentence,
    changeSentenceBook,
    changeSentencePage,
    changeSentenceLabel,
    changeAddFormStatus
} from '../../../redux/actions/sentences'

const mapStateToProps = (state) => {
    return {
        books: state.sentences.books,
        title: state.sentences.title,
        sentence: state.sentences.sentence,
        page: state.sentences.page,
        label: state.sentences.label,
        labelText: state.sentences.labelText,
        book: state.sentences.book,
        addFormStatus: state.sentences.addFormStatus
    }
}

const mapDispatchToProps = dispatch => (
    {
        changeSentenceTitle: (title) => dispatch(changeSentenceTitle(title)),
        changeSentenceSentence: (sentence) => dispatch(changeSentenceSentence(sentence)),
        changeSentenceBook: (book) => dispatch(changeSentenceBook(book)),
        changeSentencePage: (page) => dispatch(changeSentencePage(page)),
        changeSentenceLabel: (label,labelText) => dispatch(changeSentenceLabel(label,labelText)),
        dispatch
    }
);
  
  const mergeProps = (stateProps, dispatchProps, ownProps) => (
    Object.assign({}, ownProps, stateProps, dispatchProps, {
        addSentence: (e, sentence) => {
            e.preventDefault();
            if(stateProps.title && stateProps.sentence && stateProps.page){
                dispatchProps.dispatch(changeAddFormStatus(1))
                dispatchProps.dispatch(addSentence(sentence))
            }
            else{
                dispatchProps.dispatch(changeAddFormStatus(2))
            }
                
        }
    })
  );
  
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddSentence)