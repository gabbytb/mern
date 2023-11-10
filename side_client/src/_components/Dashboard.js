import React, { useEffect, useState } from "react";
// import axios from "axios";
//react-role
import { HasAccess } from "@permify/react-role";
//ant-design
import { Table } from "antd";
import {
  IdcardOutlined,
  UnorderedListOutlined,
  MailOutlined,
  PhoneOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

//components
import "./dashboard.css";

const Dashboard = (props) => {
  const columns = [
    {
      title: () => {
        return (
          <div className="column-container">
            <IdcardOutlined />
            <span className="column-name">ID</span>
          </div>
        );
      },
      dataIndex: "id",
      key: "id",
      render: (text, record) => <div>{record.id.value}</div>,
    },
    {
      title: () => {
        return (
          <div className="column-container">
            <UnorderedListOutlined />
            <span className="column-name">Name</span>
          </div>
        );
      },
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <div className="user-container">
          <div className="avatar">
            <img
              src={record.picture.thumbnail}
              alt={record.name.first + " " + record.name.last}
            />
          </div>
          <div className="name">
            {record.name.first + " " + record.name.last}
          </div>
        </div>
      ),
    },
    {
      title: () => {
        return (
          <div className="column-container">
            <MailOutlined />
            <span className="column-name">Email</span>
          </div>
        );
      },
      dataIndex: "email",
      key: "email",
    },
    {
      title: () => {
        return (
          <div className="column-container">
            <PhoneOutlined />
            <span className="column-name">Phone</span>
          </div>
        );
      },
      dataIndex: "phone",
      key: "phone",
    },
  ];

  
  
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  
  useEffect(() => {
      // fetch("https://randomuser.me/api/?nat=us&results=15")
      fetch("http://127.0.0.1:8000/admin/users/manage/")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setIsLoading(false);
        setUsers(data.results);
      })
      .catch(err => console.log(err));
  }, []);

  function logoutHandler() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="table-container">

      <div className="header">
        <div className="welcome">
          Welcome, <strong>{props.user.name}</strong>{" "}
        </div>

        <div className="button-container">
          <div className="button logout-btn" onClick={logoutHandler}>
            <LogoutOutlined /> Log out
          </div>
          <HasAccess roles={["admin", "editor"]} permissions="contact-create" renderAuthFailed={null}>
            <div className="button create-btn">Create Contact</div>
          </HasAccess>
        </div>
      </div>

      <div>
        <Table loading={isLoading} columns={columns} dataSource={users} pagination={{ pageSize: 6 }} />
      </div>

    </div>
  );
}

export default Dashboard;
