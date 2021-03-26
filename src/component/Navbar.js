import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
export default function Navbar() {
  const { i18n } = useTranslation()
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }
  return (
    <div className="navbar">
      <Link to="/">Main</Link>
      <select onChange={changeLanguage}>
        <option value="en">EN</option>
        <option value="tr">TR</option>
      </select>
    </div>
  )
}
