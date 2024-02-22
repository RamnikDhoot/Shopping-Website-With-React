import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        {/* If is student is true (?) then return yes else (:) no */}
        <p>Student: {props.isStudent ? "yes" : "no"}</p> 
        </div>
    );
}
Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}



export default Student