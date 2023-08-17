import React from 'react';
import Link from 'next/link';
import AddTopic from './addTopic';
import DeleteItem from './DeleteItem';


function DisplayItem({topics1}) {
  return (
      <div>
         
    {
        topics1.map((t) => (
          <div className=' flex justify-center mt-0' key={t._id}>
            <div>
              <h2 className=' font-bold text-4xl py-2'>{t.title}</h2>
              <h2 className='py-0'>{t.description}</h2>
              <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'>
                <Link href={`/editTopic/${t._id}`}>
                  Edit Topic
                </Link>
              </button>
              <br />
              {/* <DeleteBtn id={t._id} /> */}
             <DeleteItem id={t._id}/>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayItem