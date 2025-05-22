import { useState } from 'react';

export default function QueryInput({ onQuery }) {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Enter query like 'Analyze Wakad'"
            required='true'
            style={{ width: '500px', padding: '5px 10px', margin:(5,20,5,10) }}
            />
      <button
            onClick={() => onQuery(input)}
            style={{
                backgroundColor: '#4F46E5',  // Indigo-600
                color: 'white',
                padding: '5px 10px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'background-color 0.3s ease',
                fontSize:'15px',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#4338CA')}  // Darker on hover
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#4F46E5')}
            >
            Submit
            </button>
    </div>
  );
}
