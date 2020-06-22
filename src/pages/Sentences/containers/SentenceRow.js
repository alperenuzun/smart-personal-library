import { connect } from 'react-redux'
import SentenceRow from '../components/SentenceRow'
import {removeSentence} from '../../../redux/actions/sentences'

const mapDispatchToProps = (dispatch) => {
    return {
      removeSentence: (id) => dispatch(removeSentence(id))
    }
}
  
export default connect(null, mapDispatchToProps)(SentenceRow)