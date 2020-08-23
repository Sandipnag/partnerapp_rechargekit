/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import {Network} from './network';
import {ApiUrl} from './url';
export default class Apis {
  // <========================= Employer All api call section =========================>
  

  static login = data => {
    console.log(data, 'data ===>');
    return Network('POST', `${ApiUrl}dologin`, data);
  };

  static profileView = authtoken => {
    console.log(authtoken, 'data ===>');
    return Network('GET', authtoken, `${ApiUrl}profile`);
  };

}
