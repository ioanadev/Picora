import BellIcon from './BellIcon';
import './Header.css';
import UserIcon from './UserIcon';

export const Header = () => {
  return (
  <>

 <div className='header'>
  <div className='logobox'>
   <img src="Picora_logo.png" className ="logo" alto='logo'/>
   <h1 className='logoText'>Picora </h1>
  </div>

   <div className='meniubox'>
   
   <p className='meniu'> Explore</p>
   <p className='meniu'>Collections</p>
  <BellIcon className='icon'/>
  <UserIcon className='icon'/>
  
   </div>


 </div>
 </>
  );
};
