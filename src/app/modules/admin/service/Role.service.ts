import { Injectable} from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
import { GLOBAL} from '../../../services/global';

@Injectable()
export class RoleService {
  public url: String;
  constructor(
    private _http: Http
  ) {
    this.url = GLOBAL.url;

  }
  create(token, rol) {
    const json = JSON.stringify(rol);
    const params = 'json=' + json + '&authorization=' + token;
    const headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    return this._http.post(this.url + '/perm/newR' , params , {headers: headers}).map(res => res.json());
  }
  getRoles(token, pagina = null) {
    const params = 'authorization=' + token;
    const headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    if (pagina == null) {
      pagina = 1;
    }

    return this._http.post(this.url + '/perm/roles?page=' + pagina , params , {headers: headers}).map(res => res.json());



  }
  getRol(token, id) {
    const params = 'authorization=' + token;
    const headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    return this._http.post(this.url + '/task/detail/' + id, params , {headers: headers}).map(res => res.json());
  }
  search(token,search = null, filter = null, order =  null) {
    const params = 'authorization='+token+'&filter='+filter+'&order='+order;
    const headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    let url:string;
    if ( search == null) {
      url = this.url + '/perm/search-rol';
    }else {
      url = this.url + '/perm/search-rol/' + search;
    }

    return this._http.post(url , params , {headers: headers}).map(res => res.json());


  }/*
  deleteTask(token, id) {
    const params = 'authorization=' + token;
    const headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    return this._http.post(this.url + '/task/remove/' + id, params , {headers: headers}).map(res => res.json());
  }
  update(token, task, id) {
    const json = JSON.stringify(task);
    const params = 'json=' + json + '&authorization=' + token;
    const headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    return this._http.post(this.url + '/task/edit/' + id, params , {headers: headers}).map(res => res.json());

  }*/

}
