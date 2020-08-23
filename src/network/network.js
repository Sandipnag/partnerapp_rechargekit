/* eslint-disable prettier/prettier */

import axios from 'axios';

export const Network = (method, authtoken='', url, data = {}) => {
  //console.log('network ', url, method);
  return new Promise((resolve, reject) => {
    console.log('net  ', method, url, data);

    if (method === 'GET') {
      axios({
        method,
        url: `${url}`,
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
          'Authorization': authtoken ? authtoken : null,
        },
        body: data,
      }).then(response => {
       
          resolve(response);
       
      })
      .catch(err => console.log(err, 'Error network'));

    } else {
      axios({
        method,
        url: `${url}`,
        headers: {
          'Authorization': authtoken ? authtoken : null,
          'Accept':'application/json',
          'Content-Type':'application/json',

        },
        data,
      })
        .then(response => {
          
            resolve(response);
         
        })
        .catch(err => console.log(err, 'Error network'));
    }

  });
};
