import { api } from "~/utils/api";
import { useState } from 'react';

const notes = new Map();

export default function Home() {
  const [note, setNote] = useState('');
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  let showNotes = [];
  let idx = 0;
  for (const [_, val] of notes.entries()) {
    showNotes.push(<div key={idx}>{val}</div>);
    idx++;
  }
  return (
    <>
      <div className='flex items-center justify-center mt-5 mb-5'>
        <input type='text' className='border border-solid bg-gray-30 mr-2'
          onChange={e => setNote(e.target.value)}
          value={note} />
        <button className='border border-solid bg-gray-500 text-white-500 rounded p-3'
          onClick={() => {
            notes.set(note, note);
            setNote('')
          }}>
          Add Me
        </button>
      </div>
      <div className='flex items-center flex-col justify-center mb-5'>
        {showNotes}
      </div>
    </>
  );
}
