import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { search, fetchBooks } from '../../../redux/actions/books'
import SearchBox from '../components/SearchBox'

const mapStateToProps = (state) => {
    return {
        searchTerm: state.books.searchTerm,
        books: state.books
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      search: (val) => dispatch(search(val)),
      fetchBooks: (books, searchTerm) => dispatch(fetchBooks(books,searchTerm))
    }
}
  
export default withRouter( connect(mapStateToProps, mapDispatchToProps)(SearchBox) )