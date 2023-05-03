import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import {  getAllUsers } from "../actions/userActions";

const Userlist = () => {
  const userState = useSelector((state) => state.getAllUsersReducer);
  const { loading, error, users } = userState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      <h1>User List</h1>
      {loading && (<h1>Loading</h1>)}
      {error && (<h1>Error</h1>)}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.uname}</td>
                <td>{user.email}</td>
               
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Userlist;