"use client"

import React from 'react'

function DeleteItem({id}) {
    // async function handleDelete() {
    //     const remove = async () => {
    //         await fetch(`http://localhost:3000/api/topics?id=${id}`, {
    //             method: 'DELETE',
    //         });
    //     }
    //     remove();
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const res = await fetch(`http://localhost:3001/api/topics?id=${id}`, {
                method: 'DELETE',
           });
            console.log(res);
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
      <div>
            <form onSubmit={handleSubmit}>
              <button class=" bg-red-600 text-white  py-2 px-4 rounded">
           Delete
            </button>
            </form>
      </div>
  )
}

export default DeleteItem