import { connect } from 'react-redux'
import UserReadingRow from '../components/UserReadingRow'
import {removeUserReading} from '../../../redux/actions/userReadings'

const mapDispatchToProps = (dispatch) => {
    return {
      removeUserReading: (id) => dispatch(removeUserReading(id))
    }
}
  
export default connect(null, mapDispatchToProps)(UserReadingRow)