import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import styled from 'styled-components';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              accusamus perspiciatis saepe maiores dolorem, possimus perferendis
              reiciendis, error suscipit impedit esse voluptatum recusandae, ad
              hic voluptatibus unde ex dolores harum quisquam? Non fugiat ab
              vero dolore dolorum sint odit accusantium soluta fuga numquam,
              molestias temporibus amet exercitationem consectetur, cum
              molestiae.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
