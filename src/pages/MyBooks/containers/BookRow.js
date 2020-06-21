import { connect } from 'react-redux'
import BookRow from '../components/BookRow'
import {setReadingStatus, removeReading} from '../../../redux/actions/mybooks'

const mapDispatchToProps = (dispatch) => {
    return {
      setReadingStatus: (user, bookId, status) => dispatch(setReadingStatus(user, bookId, status)),
      removeReading: (user, bookId) => dispatch(removeReading(user, bookId))
    }
}
  
export default connect(null, mapDispatchToProps)(BookRow)