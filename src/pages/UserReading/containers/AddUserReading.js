import { connect } from 'react-redux'
import AddUserReading from '../components/AddUserReading'
import { 
    addUserReading,
    changeUserReadingBook,
    changeUserReadingPage,
    changeAddFormStatus
} from '../../../redux/actions/userReadings'

const mapStateToProps = (state) => {
    return {
        books: state.userReadings.books,
        page: state.userReadings.page,
        book: state.userReadings.book,
        addFormStatus: state.userReadings.addFormStatus
    }
}

const mapDispatchToProps = dispatch => (
    {
        changeUserReadingBook: (book) => dispatch(changeUserReadingBook(book)),
        changeUserReadingPage: (page) => dispatch(changeUserReadingPage(page)),
        dispatch
    }
);
  
  const mergeProps = (stateProps, dispatchProps, ownProps) => (
    Object.assign({}, ownProps, stateProps, dispatchProps, {
        addUserReading: (e, userReading) => {
            e.preventDefault();
            if(stateProps.page){
                dispatchProps.dispatch(changeAddFormStatus(1))
                dispatchProps.dispatch(addUserReading(userReading))
            }
            else{
                dispatchProps.dispatch(changeAddFormStatus(2))
            }
                
        }
    })
  );
  
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddUserReading)