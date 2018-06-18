import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import { map } from 'rxjs/operators';


@Injectable()
export class ClientDetailsLocationService {

  constructor(private _http:Http) { }
  dataUrl:string = "http://35.154.116.87:7999/aa/getDiscoverAddress";
 // dataUrl:string = "https://api.myjson.com/bins/fe0kr";
  
  GetClientDetailsLocation(data){

	//   return this._http.post(this.dataUrl, data)

	//   .map((response: Response) => <any>response.json())
	//   .do(data => {
	// 	  console.log(data);
	//   })
	//   .catch(e =>{
	// 	  if(e.status !== 200){
	// 		  return Observable.throw('Unauthorized');
	// 	  }
	//   });

	let url = this.dataUrl;    
    return this._http.post(url, data)
      .catch(this.handleError);
  }

     
  handleError(error: Response) {
    
    console.log(error);
    return Observable.throw(error);
  }
}

