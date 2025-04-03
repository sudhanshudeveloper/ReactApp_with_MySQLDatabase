import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const TableContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding: 20px;
  background-color: #f8f9fa;
`;

const Table = styled.table`
  width: 90%;
  max-width: 600px;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  overflow-y: hidden;
`;

const Th = styled.th`
  padding: 8px;
  background-color: #333333;
  color: white;
  text-align: left;
  font-size: 14px;
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost/React_SQLl_Backend/fetch_users.php"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Mobile</Th>
            <Th>Address</Th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.mobile}</Td>
              <Td>{user.address}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
