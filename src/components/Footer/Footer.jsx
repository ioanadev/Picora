import BellIcon from './BellIcon';
import './Footer.css';
import UserIcon from './UserIcon';

export const Footer = () => {
  return (
  <>

 <div className='footer'>
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
