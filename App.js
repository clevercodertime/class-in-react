import React, { Component } from 'react'


class Student extends Component{
    render(){
        let todo = [{name:'sheraz'}, { name: 'bilal'}]
        return(
            <>
            <h1> Hello World </h1>
            <ul>
                {todo.map((item,index)=>{
                        return <li key={index}> {item.name}</li>
                })}
            </ul>
            </>
            

        )
    }

}

export default Student;