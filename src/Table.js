import React, { useState } from "react";

export default function Table({ userdata, handleEdit, handleDelete }) {
  // function deleteItem(id) {
  //   console.log(id);
  // }
  return (
    <tr>
      <td>{userdata.name}</td>
      <td>{userdata.email}</td>
      <td>{userdata.role}</td>
      <td>
        <button onClick={(event) => handleEdit(event, userdata)}>edit</button>
        <button onClick={(id) => handleDelete(userdata.id)}>del</button>
      </td>
    </tr>
  );
}
