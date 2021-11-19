import React, {useState} from "react";
import {useSelector, shallowEqual, connect} from "react-redux";
import '../../Store/Profile/actions'
import {changeName, toggleCheckbox} from "../../Store/Profile/actions";
import {selectName} from "../../Store/Profile/selectors";


export const Profile = ({ checkboxValue, setName, changeChecked }) => {

    const name = useSelector(selectName, shallowEqual);
    const [value, setValue] = useState(name);



    const handleChangeText =(e) =>{
        setValue(e.target.value)
    }
    const handleChange = () => {
        console.log('------');
        changeChecked();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue('')
    }




    return (
        <>
            <h3>Profile</h3>
            <input type="checkbox" checked={checkboxValue} onChange={handleChange} />
            <span>{name}</span>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChangeText}/>
                <input type="submit"/>
            </form>
        </>
    );
};

const mapStateToProps = (state) => ({
    name: state.profile.name,
    checkboxValue: state.profile.checkbox,
});

const mapDispatchToProps = (dispatch) => ({
    changeChecked: () => dispatch(toggleCheckbox),
    setName: (newName) => dispatch(changeName(newName)),
});

export const ConnectedProfile = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);