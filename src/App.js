import React from "react";
import axios from "axios";

export default class StudentList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            students:[]
        }
    }
    showItems(){
        axios.get("http://localhost:3001/students")
        .then(res=>{
            this.setState({students:res.data})
        })
    }
    componentDidMount(){
       this.showItems();
    }

    deleteStudent(id){
        axios.delete("http://localhost:3001/students/"+id)
        this.showItems();
    }
    render(){
        return(
            <>
            <table className='table table-striped table-bordered'>
                <thead className="bg-primary">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                {this.state.students.map((student)=>
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td><button className="btn bg-danger" onClick={()=>this.deleteStudent(student.id)}>Delete</button>
                    <button className="btn bg-primary" >Edit</button>
                    <button className="btn bg-info" >Info</button></td>
                    </tr>
                )}
                </tbody>
            </table>
            </>
        )
    }
}