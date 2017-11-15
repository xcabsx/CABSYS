import { Injectable} from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';
import { GLOBAL} from './global';

@Injectable()
export class PersonasService {
  public url: string;
  public identity;
  public token;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  getPersonas(token, pagina = null, tp) {
    let params = 'authorization=' + token;
    if (tp != null) {
      params = params + '&tp=' + tp;
    }

    const headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded'});
    if (pagina == null) {
      pagina = 1;
    }

    return this._http.post(this.url + '/pers/list?page=' + pagina , params , {headers: headers}).map(res => res.json());
  }


}
