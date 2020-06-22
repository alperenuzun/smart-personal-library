import { connect } from 'react-redux'
import TargetRow from '../components/TargetRow'
import {removeTarget} from '../../../redux/actions/targets'

const mapDispatchToProps = (dispatch) => {
    return {
      removeTarget: (id) => dispatch(removeTarget(id))
    }
}
  
export default connect(null, mapDispatchToProps)(TargetRow)