import React from "react";
export default function EditRow({
  editformdata,
  handleEditFormChange,
  handleCancelClick
}) {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          name="name"
          value={editformdata.name}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="email"
          required="required"
          name="email"
          value={editformdata.email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="role"
          value={editformdata.role}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button onClick={handleCancelClick}>cancel</button>
      </td>
    </tr>
  );
}
