import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setDialog } from "../features/userReducer"
import Navbar from "./Navbar"
import Table from "./Table"
export default function Modal() {
  const users = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  const handleModal = () => {
    dispatch(setDialog({ dialog: false }))
  }
  return (
    <>
      <div className={users.dialog ? "modal-hid" : "modal"}>
        <div className="modal-content">
          <Navbar />
          <span className="close" onClick={() => handleModal()}>
            &times;
          </span>

          <Table />
        </div>
      </div>
    </>
  )
}
