/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import {Network} from './network';
import {ApiUrl, ApiUrl_2} from './url';
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
  //  Prepaid api call
  static prepaidOperatorlist = authtoken => {
    console.log(authtoken, 'data ===>');
    return Network('GET', authtoken, `${ApiUrl_2}operatorlist`);
  };

  static prepaidCirclelist = authtoken => {
    console.log(authtoken, 'data ===>');
    return Network('GET', authtoken, `${ApiUrl_2}circlelist`);
  };

  static prepaidRecharge = (authtoken, data) => {
    console.log(authtoken, 'data ===>');
    return Network('GET', authtoken, `${ApiUrl_2}dorecharge`, data);
  };
  //  Postpaid api call
  static postpaidoperatorlist = authtoken => {
    console.log(authtoken, 'data ===>');
    return Network('GET', authtoken, `${ApiUrl_2}postpaidoperatorlist`);
  };

  static postpaidcirclelist = authtoken => {
    console.log(authtoken, 'data ===>');
    return Network('GET', authtoken, `${ApiUrl_2}postpaidcirclelist`);
  };

  static postpaidRecharge = (authtoken, data) => {
    console.log(authtoken, 'data ===>');
    return Network('GET', authtoken, `${ApiUrl_2}postpaid/dorecharge`, data);
  };

}
