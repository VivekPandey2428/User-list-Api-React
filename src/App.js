import "./styles.css";
import React, { useEffect, useState } from "react";
import Table from "./Table";
import data from "./data.json";
import EditRow from "./EditRow";
export default function App() {
  const [userdata, setuserdata] = useState(data);
  const [editformdata, seteditformdata] = useState({
    id: "",
    name: "",
    email: "",
    role: ""
  });
  const [search, setSearch] = useState("");
  const [editUsers, setEditUsers] = useState(null);
  function handleEdit(event, userdata) {
    event.preventDefault();
    setEditUsers(userdata.id);
    const formVal = {
      id: userdata.id,
      name: userdata.name,
      email: userdata.email,
      role: userdata.role
    };
    seteditformdata(formVal);
  }
  function handleEditFormChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    seteditformdata((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function handleEditFormChangeSubmit(event) {
    event.preventDefault();
    const editedformvalue = {
      id: editformdata.id,
      name: editformdata.name,
      email: editformdata.email,
      role: editformdata.role
    };
    console.log(editedformvalue);
    const newcontacts = [...userdata];
    const index = userdata.findIndex(
      (userdata) => userdata.id === editedformvalue.id
    );
    newcontacts[index] = editedformvalue;
    setuserdata(newcontacts);
    setEditUsers(null);
  }
  function handleCancelClick() {
    setEditUsers(null);
  }
  function handleDelete(id) {
    const newarray = [...userdata];
    const index = userdata.findIndex((data) => data.id === id);
    newarray.splice(index, 1);
    setuserdata(newarray);
  }
  function handleSearch(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="App">
      <input
        type="text"
        onChange={handleSearch}
        className="Search-bar"
        placeholder="Search via name,email or role"
      />
      <form onSubmit={handleEditFormChangeSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userdata
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(search.toLowerCase()) ||
                  val.email.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((userdata) => (
                <>
                  {editUsers === userdata.id ? (
                    <EditRow
                      handleEditFormChange={handleEditFormChange}
                      editformdata={editformdata}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <Table
                      handleEdit={handleEdit}
                      userdata={userdata}
                      handleDelete={(id) => handleDelete(id)}
                    />
                  )}
                </>
              ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}
