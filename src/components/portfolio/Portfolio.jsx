import './portfolio.scss'


export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        <li className='active'>Projects</li>
      </ul>

      <div className="container">
        <div className='item hover'>
            <img src='https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg' width="250px" height="250px" alt=''></img>
            <h3>Proj1</h3>
        </div>
        <div className='item'>
            <img src='https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg' width="250px" height="250px" alt=''></img>
            <h3>proj2</h3>
        </div>
        <div className='item'>
            <img src='https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg' width="250px" height="250px" alt=''></img>
            <h3>proj3</h3>
        </div>
        <div className='item'>
            <img src='https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg' width="250px" height="250px" alt=''></img>
            <h3>proj4</h3>
        </div>
        <div className='item'>
            <img src='https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg' width="250px" height="250px" alt=''></img>
            <h3>proj5</h3>
        </div>
      </div>
    </div>
  )
}
