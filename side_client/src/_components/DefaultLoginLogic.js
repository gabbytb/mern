// import React from "react";
// import "./components.css";
// import { Form, Input, message } from "antd";
// import { users } from "./fakeData";
// import { usePermify } from "@permify/react-role";


// function LoginLogic() {
//   const { setUser } = usePermify();

//   const [form] = Form.useForm();

//   const onFinish = (props) => {
//     let loggedUser = users.find((user) => user.email === props.email);

//     if (loggedUser !== undefined) {
//       localStorage.setItem("user", JSON.stringify(loggedUser));
//       localStorage.setItem("firstName", loggedUser.firstName);

//       console.log(loggedUser);

//       setUser({
//         _id: loggedUser._id,
//         roles: [loggedUser.role],
//         permissions: loggedUser.permission,
//       });

//       window.location.reload();
//     } else {
//       message.error("Wrong email, please check your email!");
//     }
//   };

//   return (
//     <div className="login-container">
//       <img className="logo" src="react-role.png" alt="logo" />
//       <h1 className="title">Login Your Account</h1>
//       <Form size="large" name="login" form={form} layout="vertical" onFinish={onFinish}>
//         <Form.Item label="Email address" name="email" rules={[ { type: "email", required: true, message: "Your email is not valid!", }, ]}>
//           <Input />
//         </Form.Item>

//         <div className="btn-container">
//           <button className="btn-login" type="submit">Login</button>
//         </div>
//       </Form>
//     </div>
//   );
// }

// export default LoginLogic;
