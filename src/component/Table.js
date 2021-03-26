import React from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
export default function Table({ handleRow }) {
  const users = useSelector((state) => state.userReducer)
  const { t } = useTranslation()
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{t("Firstname")}</th>
            <th>{t("Username")}</th>
            <th>{t("Email")}</th>
            {users.userinfo ? (
              <>
                <th>{t("Phone")}</th>
                <th>{t("Website")}</th>
                <th>{t("Adress Street")}</th>
              </>
            ) : (
              ""
            )}
          </tr>
        </thead>
        <tbody>
          {users.userinfo ? (
            <tr key={users.userinfo.id}>
              <td>{users.userinfo.name}</td>
              <td>{users.userinfo.username}</td>
              <td>{users.userinfo.email}</td>
              <td>{users.userinfo.phone ? users.userinfo.phone : "-"}</td>
              <td>{users.userinfo.website ? users.userinfo.website : "-"}</td>
              <td>
                {users.userinfo.address?.street
                  ? users.userinfo.address.street
                  : "-"}
              </td>
            </tr>
          ) : (
            users.users.map((user) => (
              <tr key={user.id} onClick={() => handleRow(user)}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
