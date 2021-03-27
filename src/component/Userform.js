import React from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addUser } from "../features/userReducer"
import { v4 as uuidv4 } from "uuid"
import { useTranslation } from "react-i18next"
import { Prompt } from "react-router-dom"

export default function Userform() {
  const { register, handleSubmit, errors, formState } = useForm()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onSubmit = (data, e) => {
    dispatch(addUser({ id: uuidv4(), ...data }))
    e.target.reset()
  }
  const { isDirty } = formState

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="userForm">
        <div className="formitem">
          <label>{t("Name")}</label>

          <input
            name="name"
            placeholder={errors.name ? "Required" : ""}
            ref={register({ required: true })}
          />
        </div>

        <div className="formitem">
          <label>{t("Username")}</label>
          <input
            name="username"
            placeholder={errors.username ? "Required" : ""}
            ref={register({ required: true })}
          />
        </div>

        <div className="formitem">
          <label>{t("Email")}</label>
          <input
            name="email"
            placeholder={errors.email ? "Required" : ""}
            ref={register({ required: true })}
          />
        </div>

        <div className="formitem">
          <label>{t("Street")}</label>
          <input
            name="street"
            placeholder={errors.street ? "Required" : ""}
            ref={register({ required: true })}
          />
        </div>
        <div className="formitem">
          <label>{t("City")}</label>
          <input
            name="city"
            placeholder={errors.city ? "Required" : ""}
            ref={register({ required: true })}
          />
        </div>
        <button className="buttonSubmit">{t("Add")}</button>
      </form>
      <Prompt
        when={isDirty}
        message={t("Are you sure you want to leave? Form is not empty")}
      />
    </div>
  )
}
