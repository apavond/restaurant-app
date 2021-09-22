
import React, { useEffect, useMemo, useState } from 'react';
import Header from '../../components/header/Header';
import { getMenus } from "./actions";
import { RestaurantCard } from './components/restaurantCard/RestaurantCard';
import "./restaurantsList.css";

import { connect } from 'react-redux';

/* const RestaurantsItems = (props) => {
  return (
    
  )
} */

// Conectar el componentte con redux y lanzar la carga del menu a traves de un dispatch de la accion
// - En cada carga traer paginas de x tamaño y al estar cerca del final traer la siguiente pagina

const RestaurantsList = (props) => {

  const {
    userInfo,
    loadMenus, 
    menus,
    loading
  } = props;

  //const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [count, setCount] = useState(0);
  //const [menus, setMenus] = useState([]);

  useEffect(() => {
    loadMenus(0, 20);
  }, []);

  useEffect(() => {
    if (reload) {
      loadMenus(0,20);
    }
  }, [reload]);

  const Items = React.memo(() => <>
    {menus.map(menuItem =>
      <RestaurantCard restaurant={menuItem} key={menuItem.id} />
    )}
  </>, [menus]);

  //<div>{`Hola ${userInfo ? userInfo.name : ''}`}</div>
  return (
    <>
      <Header />
      
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>Add count</button>
      </div>
      <button onClick={() => setReload(true)}>Reload</button>
      <div className="restaurants">
        {loading &&
          <div className="loading">Cargando</div>
        }
        {!loading && <Items />}
      </div>
    </>
  );
};


export default connect(
  store => ({
      loading: store.restaurantList.loading,
      menus: store.restaurantList.menus
  }),
  dispatch => ({
    loadMenus : (start, count) => dispatch(getMenus(start, count))
  })
)(RestaurantsList);