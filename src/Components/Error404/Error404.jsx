import React from 'react'

function Error404() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-[80vh]">
      <img src="https://media.giphy.com/media/3o7TKUM3IgJBX2as9O/giphy.gif" alt="404" />
      <h1 className="text-5xl font-bold text-orange-800">404 - Not Found</h1>
    </div>
  )
}

export default Error404