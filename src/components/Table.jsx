import React from 'react'

const Table = ({data}) => {
  return (
    <>
    <table className='table 
    table-striped 
    table-primary 
    table-bordered 
    border-primary 
    text-center'>
        <thead className='table-info'>
            <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Contact</th>
            <th scope='col'>Address</th>
            <th scope='col'>Options</th>
            </tr>
        </thead>
        <tbody>
          {data.map((val)=>{
            return(
                <tr key={val.id}>
                    <th scope='row'>{val.id}</th>
                    <td>{val.fullName()}</td>
                    <td>{val.email}</td>
                    <td>{val.contact}</td>
                    <td>{val.address.FullAddress()}</td>
                    <td>
                    <button className='btn btn-danger'>Delete</button>
                    </td>
                </tr>
            )
          })}
        </tbody>
    </table>
    </>
  )
}

export default Table