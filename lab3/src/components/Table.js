import React from "react";

function genTable(peoples){
return(peoples.map((people)=>{
    const {id,rname,age} = people;
    return(
        <tr>
            <td>{id}</td><td>{rname}</td><td>{age}</td>
        </tr>
    );
}));
}
function DataTable(){
    const students = [{
        id:1,rname:"Mick",age:22,
    },
    {
        id:1,rname:"Ball",age:21,
    }];
    return(
        <table>
            <tbody>{genTable(students)}</tbody>
        </table>
    );
}

export default DataTable;