import React, { Children } from 'react'

export const Container = ({Children,className}) => {
  return (
    <>
    <div className="mx-w[320px] mx-auto">
        {Children}
    </div>
    </>
  )
}
