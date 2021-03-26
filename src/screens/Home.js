import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Userform from "../component/Userform"
import { userApiCall } from "../features/userReducer"
export default function Home() {
  const users = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userApiCall())
  }, [dispatch])
  console.log(users)
  return (
    <div>
      <table>
        <tr>
          <th>Firstname</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
        {users.users.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </table>
      <Userform />
    </div>
  )
}
