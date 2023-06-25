import React from 'react'

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  return (
    <div>@{currentYear} Satyanarayan. All rights reserved.</div>
  )
}

export default Footer