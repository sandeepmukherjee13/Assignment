import React from 'react';
import { totalData } from '../data';
import PieChart from '../common/PieChart';

const SuccessFullMissions = () => {
  const missionSuccessful = totalData.filter(
    (item) => item.successful === true
  );
  return <PieChart data={missionSuccessful} />;
};

export default SuccessFullMissions;
