import React from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addUser } from "../features/userReducer"
export default function Userform() {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(addUser(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input name="name" ref={register({ required: true })} />
        {errors.name && <span>This field is required</span>}

        <label>Username</label>
        <input name="username" ref={register({ required: true })} />
        {errors.username && <span>This field is required</span>}

        <label>email</label>
        <input name="email" ref={register({ required: true })} />
        {errors.email && <span>This field is required</span>}

        <label>Street</label>
        <input name="street" ref={register({ required: true })} />
        {errors.street && <span>This field is required</span>}
        <label>City</label>
        <input name="city" ref={register({ required: true })} />
        {errors.city && <span>This field is required</span>}

        <button>Submit</button>
      </form>
    </div>
  )
}
