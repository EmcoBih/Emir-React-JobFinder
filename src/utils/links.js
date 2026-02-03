import React from 'react';
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { BsFillPersonPlusFill, BsPersonSquare } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im';

const links = [
  { id: 1, text: 'stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'all-jobs', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 3, text: 'add-job', path: 'add-job', icon: <BsFillPersonPlusFill /> },
  { id: 4, text: 'profile', path: 'profile', icon: <BsPersonSquare /> },
];

export default links;
