import {connect} from "react-redux";
import Parent from '../components/Parent'

const mapStateToProps = (state)=>{
    return {
        name:state.Parent.name,
        age:state.Parent.age
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        onAdd: (name,age)=> {
            dispatch({type: "PADD", name,age})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Parent)