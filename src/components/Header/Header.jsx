import BellIcon from './BellIcon';
import './Header.css';
import UserIcon from './UserIcon';

export const Header = () => {
  return (
  <>

 <div className='header'>
  <div className='logobox'>
   <img src="logo_picora2.png" className ="logo" alto='logo'/>
   <h1 className='logoText'>Picora </h1>
  </div>

   <div className='meniubox'>
   
   <p className='meniu'> Explore</p>
   <p className='meniu'>Collections</p>
    <div class="iconbox">
       <svg class="icon-user" width={20} height={20}><use href="user.svg"></use></svg>
       <svg class="icon-notification" width={20} height={20}><use href="notification.svg"></use></svg>
    </div>

  {/* <BellIcon className='icon'/>
  <UserIcon className='icon'/> */}
  
   </div>


 </div>
 </>
  );
};
