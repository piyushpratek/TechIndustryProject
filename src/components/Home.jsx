import React from 'react';
import vg from '../assets/pic2.jpg';
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai';

const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>Techy's</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className='home2'>
        <img src={vg} alt='Graphics' />
        <div>
          <p>
            We are your one and only solutions to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className='home3' id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>
            We are an award-winning creative design agency. This page has a
            unique feel, thanks to the deconstructed action figures representing
            the founder, Piyush Prateek. The great attention to detail and
            interactivity also reflects the company's many years of experience.
            To sum up, this page stands out by providing the perfect mix of fun
            and information.
          </p>
        </div>
      </div>
      <div className='home4' id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: '0.3s',
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: '0.5s',
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: '0.7s',
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: '1s',
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
