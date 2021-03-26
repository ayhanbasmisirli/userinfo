import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Userform from "../component/Userform"
import { userApiCall, setDialog } from "../features/userReducer"

import Modal from "../component/Modal"
import Table from "../component/Table"
export default function Home() {
  const users = useSelector((state) => state.userReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userApiCall())
  }, [dispatch])
  const handleRow = (userinfo) => {
    dispatch(setDialog({ dialog: true, userinfo }))
  }

  return (
    <div>
      {users.loading || users.hasErrors ? (
        "Loading..."
      ) : (
        <Table handleRow={handleRow} />
      )}
      <Modal />
      <Userform />
    </div>
  )
}
