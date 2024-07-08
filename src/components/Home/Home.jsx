import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className={styles.container}> 
      <button className={`${styles.homeBtn}`}>
        <Link to='/part1'>Part 1</Link>
      </button>
      <Link to='/part2'>Part 2</Link>
      <Link to='/part3'>Part 3</Link>
    </div>
  );
};
