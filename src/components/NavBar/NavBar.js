import styles from './NavBar.module.scss';
import React from 'react';
import Container from '../Container/Container';

const NavBar = () => {
    return (
      <nav className={styles.navbar}>
          <Container>
              <div className={styles.navbar_container}>
                <div className={styles.icon}>
                    <a href="/"><i className='fa fa-tasks'></i></a>
                </div>
                <ul className={styles.links}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/favorite">Favorite</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
               </div> 
          </Container>
      </nav>     
    )
}     

export default NavBar;