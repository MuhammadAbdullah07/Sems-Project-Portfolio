import { Title } from '@material-ui/icons'
import './testimonials.scss'

export default function Testimonials() {

  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className='container'>
        <div className='card'>
          <div className='top'>
            <img src='https://png.pngtree.com/png-clipart/20190619/original/pngtree-arrow-pointing-right-glyph-black-icon-png-image_4008284.jpg' alt='' className='left'></img>
            <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='user'></img>
            <img src='' alt='' className='right' ></img>
          </div>
          <div className='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar lacus id
            scelerisque consequat. Duis commodo, tellus eleifend tincidunt vestibulum,
            ante dui ornare magna, vel suscipit ligula tortor nec erat.
          </div>
          <div className='bottom'> 
            <h3>Alex</h3>
            <h4>CEO of LAMA</h4>
          </div>
        </div>
      </div>


    </div>
  )
}
