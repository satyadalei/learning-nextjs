import React from 'react'

const DashBoardLayout = ({children}) => {
  return (
    <>
       <p style={{color:"red"}} > Top I am dashboard layout and will be seen everywhere inside dashboard page</p>
       {children}
       <p style={{color:"red"}} > Bottom I am dashboard layout and will be seen everywhere inside dashboard page</p>
    </>
  )
}

export default DashBoardLayout