import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './img 1.jpg'
import img2 from './img 2.jpg'
import img3 from './img 3.jpg'

import './Home.css'

export const Home = () => {
  return (
    <div className='Home'>
      <h1>Welcome to ToDo Ticker!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, earum veniam mollitia ratione animi placeat debitis esse reiciendis corporis beatae quaerat ex neque saepe dolorum aperiam aut aliquid sunt quis illo velit fugit modi! Soluta expedita eius eos corporis maiores minus, adipisci recusandae labore harum officia exercitationem eaque eum eveniet non dicta veritatis tenetur rerum suscipit ea error vel doloribus. Quo, culpa, a inventore quod voluptatibus ipsum dicta, ex nostrum veritatis est dolore id architecto incidunt atque commodi. Inventore accusantium eum ea mollitia officia, animi veniam similique minima id quisquam eaque dolorem nemo sapiente ipsum cum. Dolorem, illum! Dicta, dolor.</p>
      <Link to= "/app" >Let's Get Started</Link>
      <h1> Why ToDo Lists? </h1>
      
      <div className='one'>
      <h2>Increased Productivity</h2>
        <img src= {img1} alt="" />
      <p>By organizing tasks and setting priorities, users can focus on what’s most important, reducing the chances of missing deadlines.
      A to-do list helps prioritize tasks based on importance and urgency, ensuring that critical tasks are completed first.
      By outlining specific tasks, it provides clear goals for the day, helping to focus attention on what needs to be accomplished.
      </p>
      </div>

      <div className='one'>
      <h2>Reducing Stress</h2>
        <img src= {img2} alt="" />
      <p>Writing tasks down reduces the mental load of trying to remember everything, lowering stress and anxiety levels.
      Being organized and prepared for the day ahead reduces last-minute rushes and the associated stress.
      </p>
      </div>

      <div className='one'>
      <h2>Better Time Management</h2>
        <img src= {img3} alt="" />
      <p>A to-do list allows for effective scheduling of tasks throughout the day, helping to allocate time efficiently and avoid time wastage.
      Setting deadlines for tasks ensures that they are completed in a timely manner, reducing procrastination.</p>
      </div>
      <div className='last'>
      <h2>So, What are you waiting for? Click on the link below to dive into a new world of organized life</h2>
      <Link to= "/main-page" >Let's Get Started</Link>
      </div>

    </div>
  )
}