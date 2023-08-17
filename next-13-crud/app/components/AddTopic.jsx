import React from 'react'
import Link from 'next/link';


function AddTopic() {
  return (
        <div>
            <div>
                <div className='text-center'>
                    <Link href={'/addTopic'}>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Topic</button>
                    </Link>
                 </div>
            </div>
        </div>
  )
}

export default AddTopic