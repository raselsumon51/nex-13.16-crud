// import DeleteBtn from '@/components/deleteBtn';
import AddTopic from './components/addTopic';
import DisplayItem from './components/displayItem';
import Link from 'next/link';



const getTopics = async () => {
  const res = await fetch('http://localhost:3001/api/topics', {
    cache: "no-store"
  });
  let topics = await res.json();
  return topics;
}


export default async function Home() {
  const { topics } = await getTopics();

  return (
    <div>
      <h1 className="text-center text-2xl py-6">CRUD App</h1>
      
      <div>
        <h1 className='text-center py-3'>Topics Lists</h1>
      </div>
      
      {
        // topics.map((t) => (
        //   <div className=' flex justify-center mt-0' key={t._id}>
        //     <div>
        //       <h2 className=' font-bold text-4xl py-2'>{t.title}</h2>
        //       <h2 className='py-0'>{t.description}</h2>
        //       {/* <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'>
        //         <Link href={`/editTopic/${t._id}`}>
        //           Edit Topic
        //         </Link>
        //       </button> */}
        //       <br />
        //       {/* <DeleteBtn id={t._id} /> */}
        //     </div>
        //   </div>
        // ))
      }
      <AddTopic/>
      <DisplayItem topics1={topics} />
    </div>
  );
}
