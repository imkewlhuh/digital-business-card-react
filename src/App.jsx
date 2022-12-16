import { SocialIcon } from 'react-social-icons'
import './App.css'

function InfoComponent(props) {
  return (
    <div className='info-container'>
      <img src={props.url} />
      <div className='name-container'>
        <h3>Rafael Lopez</h3>
        <h5>Frontend Developer</h5>
        <a href='mailto:rafael.lopez0827@gmail.com'>
          <div className='email'>
            <p>Email</p>
          </div>
        </a>
      </div>
    </div>
  )
}

function AboutComponent() {
  return (
    <div className='about'>
      <h2>About</h2>
      <p>I began teaching myself how to code in 2022.
        I'm Puerto Rican and I grew up in the Bronx. I enjoy putting extra time
        into my projects to ensure a quality product.</p>
    </div>
  )
}

// Interests
// I love video games, tech, and being with my family. With a total of 4 cats at home,
// there's never a dull moment. They enjoy coding along with me by walking on my keyboard.

function InterestsComponent() {
  return (
    <div className='interests'>
      <h2>Interests</h2>
      <p>I love video games, tech, and being with my family. I have 2 cats who enjoy
        coding along with me by walking all over my keyboard.</p>
    </div>
  )
}

function FooterComponent() {
  return (
    <div className='footer'>
      <SocialIcon url='https://www.linkedin.com/in/rafael-lopez0827/' />
      <SocialIcon url='https://github.com/imkewlhuh' />
    </div>
  )
}

function App() {

  return (
    <div className='card-container'>
      <InfoComponent url='https://i.imgur.com/kHnmoE0.jpeg' />
      <AboutComponent />
      <InterestsComponent />
      <FooterComponent />
    </div>
  )
}

export default App