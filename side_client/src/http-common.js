import axios from "axios";


export default axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-type": "application/json",
    // "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX0lkIjoiNjU2YmI1MzA5ZjhkOGQyMzNlNjc1YWQ1IiwiZW1haWwiOiJpZ2FicmllbG95ZWJhbmppQHByb3Rvbm1haWwuY29tIiwiaWF0IjoxNzAyMDcwMDY2LCJleHAiOjE3MDIwNzcyNjZ9.appY4tyEKo2QnAbPOeQdZwHmCXwFnY-E-dLZGEayXmQ`
  }
});

