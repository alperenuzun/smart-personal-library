import { connect } from 'react-redux'
import AddTarget from '../components/AddTarget'
import { 
    addTarget,
    changeTargetBookCnt,
    changeTargetStartDate,
    changeTargetFinishDate,
    changeTargetPage,
    changeAddFormStatus
} from '../../../redux/actions/targets'

const mapStateToProps = (state) => {
    return {
        bookCnt: state.targets.book_count,
        pageNo: state.targets.page,
        startDate: state.targets.start_date,
        finishDate: state.targets.finish_date,
        addFormStatus: state.targets.addFormStatus
    }
}

const mapDispatchToProps = dispatch => (
    {
        changeTargetBookCnt: (bookCnt) => dispatch(changeTargetBookCnt(bookCnt)),
        changeTargetStartDate: (startDate) => dispatch(changeTargetStartDate(startDate)),
        changeTargetFinishDate: (finishDate) => dispatch(changeTargetFinishDate(finishDate)),
        changeTargetPage: (page) => dispatch(changeTargetPage(page)),
        dispatch
    }
);
  
  const mergeProps = (stateProps, dispatchProps, ownProps) => (
    Object.assign({}, ownProps, stateProps, dispatchProps, {
        addTarget: (e, target) => {
            e.preventDefault();
            if((stateProps.bookCnt || stateProps.pageNo) && stateProps.startDate && stateProps.finishDate){
                dispatchProps.dispatch(changeAddFormStatus(1))
                dispatchProps.dispatch(addTarget(target))
            }
            else{
                dispatchProps.dispatch(changeAddFormStatus(2))
            }
                
        }
    })
  );
  
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddTarget)