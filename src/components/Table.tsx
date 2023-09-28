import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


const Table: React.FC = () => {

    interface TableEntry {
        direction: string;
        timeFrame: string;
        timeDetected: string;
        confidence: string;
      }
      
      const tableEntries: TableEntry[] = [
        {
          direction: 'up',
          timeFrame: '1m',
          timeDetected: '11:31 UTC - 11:57 UTC',
          confidence: '53%',
        },
        {
          direction: 'Down',
          timeFrame: '1m,5m',
          timeDetected: '12:36 UTC - 13:45 UTC',
          confidence: '50%',
        },
        {
          direction: 'up',
          timeFrame: '5m',
          timeDetected: '14:45 UTC- 16:15 UTC',
          confidence: '60%',
        },
        {
            direction: 'up',
            timeFrame: '5m',
            timeDetected: '11:20 UTC - 16:05 UTC',
            confidence: '70%',
          },
      ];



  return (
    <div className=" relative overflow-x-auto">
    <h3 className="text-2xl font-bold tracking-tight text-gray-9200 sm:text-4xl">Bitcoin OP Detection</h3>
      <table className=" border-x-2 border border-slate-50 rounded-md w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-4 py-2 text-slate-50">Direction</th>
            <th className="px-4 py-2 text-slate-50">Time Frame</th>
            <th className="px-4 py-2 text-slate-50">Time Detected</th>
            <th className="px-4 py-2 text-slate-50">Confidence</th>
          </tr>
        </thead>
        <tbody>
        {tableEntries.map((entry, index) => (
            <tr key={index}>
              <td className={`px-4 py-2 ${
                  entry.direction === 'up'? 'text-green-500' :'text-red-500'}`}>{entry.direction === 'up' ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</td>
              <td className="px-4 py-2 text-gray-600 ">{entry.timeFrame}</td>
              <td className="px-4 py-2 text-gray-600 ">{entry.timeDetected}</td>
              <td className="px-4 py-2 text-gray-600 ">{entry.confidence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
