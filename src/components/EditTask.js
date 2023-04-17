import React from 'react';
// using the same css file of new task component because they look the same but function differently
import '../styles/NewTask.css';



// the setNewData new data is going to set the state of the task and is take object like this:
// {title:'',desc:'',date:'',id: the same passed id}
// the isShowen takes a bool value so when its true the form should appear
const EditTask = ({Title,desc,date,id,setNewData,isShowen}) => {
    return (
        <section>
            
        </section>
    )
}

export default EditTask