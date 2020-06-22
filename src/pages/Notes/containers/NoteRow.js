import { connect } from 'react-redux'
import NoteRow from '../components/NoteRow'
import {removeNote} from '../../../redux/actions/notes'

const mapDispatchToProps = (dispatch) => {
    return {
      removeNote: (id) => dispatch(removeNote(id))
    }
}
  
export default connect(null, mapDispatchToProps)(NoteRow)