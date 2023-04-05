import { useEffect, useState } from 'react';

import useAxios from '../Hooks/useAxios';

const getNews = () => {
  const [data, setData] = useState([]);
  const optionsRequest = {
    method: 'GET',
    url: import.meta.env.VITE_APP_ARTICLES,
  };
  const getData = async () => {
    const data = await useAxios(optionsRequest);
    //seteamos la dara al resultado de la petición de Axios
    setData(data);
  };
  //las noticias en principio no van a cambiar así que no tenemos array de dependencia
  useEffect(() => {
    getData();
  }, []);
  return data;
};

export default getNews;
