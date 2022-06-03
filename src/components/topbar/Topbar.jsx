import { Person } from '@material-ui/icons'
import './topbar.scss'
import { Mail } from '@material-ui/icons'

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={'topbar ' + [menuOpen && 'active']}>
      <div className='wrapper'>
        <div className='left'> 
            <a href='#intro' className='logo'>abdullah.</a>
            <div className='itemContainer'>
            <Person className='icon'/>
            <span>+92 336 9507339</span>
            </div>
            <div className='itemContainer'>
            <Mail className='icon'/>
            <span>abdullahashraf65@gmail.com</span>
            </div>
        </div>
        <div className='right'>
          <div className='my_menu' onClick={() =>setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
