import './Menu.css'

// Componenta Menu

export const Menu = ({ imageTypes, onClick, activeType }) => {
const handleClick =(e)=>{
onClick(e.currentTarget.value);
}
  return (
    <div className ="menu">
      {imageTypes.map(imageType=>
      <button 
      type = "button"  
      className = {`menu-type ${activeType===imageType ? 'active':''}`} 
      value={imageType} 
      key = {imageType} 
      onClick={handleClick} >
        {imageType[0].toUpperCase() + imageType.slice(1).toLowerCase()}
        </button>
        )}</div>

    
   
  );
};