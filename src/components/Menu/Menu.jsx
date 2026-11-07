import './Menu.css'



// Componenta Menu

export const Menu = ({ types }) => {


  return (
    <div className ="menu">
      {types.map(type=>
      <button className = "menu-type" key = {type} >
        {type[0].toUpperCase() + type.slice(1).toLowerCase()}
        </button>
        )}</div>

    
   
  );
};