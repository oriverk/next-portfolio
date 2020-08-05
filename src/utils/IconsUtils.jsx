import React from 'react'

export function NoImage (){
  return (
    <>
      <div className='parent'>
        <div className='child'>no image</div>
      </div>
      <style jsx>{`
        .parent {
          padding: 1rem auto;
          height: 100%;
          width: 100%;
          margin-bottom: 1rem;
        }
        .child {
          border: 1px solid grey;
          background-color: #242657;
          padding: .5rem;
          color: #FFF;
          text-align: center;
          font-size: 1.5rem;
          font-weight: bold;
        }
      `}</style>
    </>
  )
}

export const Divider = () => {
  return (
    <>
      <hr />
      <style jsx>{`
        hr {
          border: none;
          height: 1px;
          margin: 0;
          flex-shrink: 0;
          background-color: rgba(255, 255, 255, 0.12);
        }  
      `}</style>
    </>
  )
}