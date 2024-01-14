import CommonTable from '../common/CommonTable';
import { useState, useEffect } from 'react';
import { totalData } from '../data';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [rowData, setRowData] = useState(totalData);
  const [colDefs, setColDefs] = useState([
    { field: 'mission' },
    { field: 'company' },
    { field: 'location' },
    { field: 'date' },
    { field: 'time' },
    { field: 'rocket' },
    { field: 'price' },
    { field: 'successful' }
  ]);
  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Total Missions</h3>
        <button
          onClick={() => navigate('/successFullMissions')}
          style={{ cursor: 'pointer' }}
        >
          Check Successful Missions
        </button>
      </div>

      <CommonTable rowData={rowData} colDefs={colDefs} />
    </>
  );
};

export default Dashboard;
