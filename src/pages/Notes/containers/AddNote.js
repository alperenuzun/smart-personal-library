import { connect } from 'react-redux'
import AddNote from '../components/AddNote'
import { 
    addNote,
    changeNoteTitle,
    changeNoteNote,
    changeNoteBook,
    changeNotePage,
    changeNoteLabel,
    changeAddFormStatus
} from '../../../redux/actions/notes'

const mapStateToProps = (state) => {
    return {
        books: state.notes.books,
        title: state.notes.title,
        note: state.notes.note,
        page: state.notes.page,
        label: state.notes.label,
        labelText: state.notes.labelText,
        book: state.notes.book,
        addFormStatus: state.notes.addFormStatus
    }
}

const mapDispatchToProps = dispatch => (
    {
        changeNoteTitle: (title) => dispatch(changeNoteTitle(title)),
        changeNoteNote: (note) => dispatch(changeNoteNote(note)),
        changeNoteBook: (book) => dispatch(changeNoteBook(book)),
        changeNotePage: (page) => dispatch(changeNotePage(page)),
        changeNoteLabel: (label,labelText) => dispatch(changeNoteLabel(label,labelText)),
        dispatch
    }
);
  
  const mergeProps = (stateProps, dispatchProps, ownProps) => (
    Object.assign({}, ownProps, stateProps, dispatchProps, {
        addNote: (e, note) => {
            e.preventDefault();
            if(stateProps.title && stateProps.note && stateProps.page){
                dispatchProps.dispatch(changeAddFormStatus(1))
                dispatchProps.dispatch(addNote(note))
            }
            else{
                dispatchProps.dispatch(changeAddFormStatus(2))
            }
                
        }
    })
  );
  
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddNote)