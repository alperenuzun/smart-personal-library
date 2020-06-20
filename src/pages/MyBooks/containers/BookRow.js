import { connect } from 'react-redux'
import BookRow from '../components/BookRow'
import {setReadingStatus} from '../../../redux/actions/mybooks'

const mapDispatchToProps = (dispatch) => {
    return {
      setReadingStatus: (user, bookId, status) => dispatch(setReadingStatus(user, bookId, status))
    }
}
  
export default connect(null, mapDispatchToProps)(BookRow)