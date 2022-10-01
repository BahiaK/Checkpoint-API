import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./UserList.css"
const UserList = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        setData(data);
      };
      useEffect(() => {getData();}, []);
      console.log(data)

      return (
    <div className="Cardss">
      {data.map((el) => (<Card el={el} key={el.id} /> ))}
      </div>
      )
    }

export default UserList