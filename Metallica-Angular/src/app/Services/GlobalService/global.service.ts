import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { TradeTable } from "../../Models/trade-table";

@Injectable()
export class GlobalService {

	//private _baseUrl:string; // = "http://localhost:60061/api/Admin";
	private _baseUrl:string = "http://localhost:51811";
	
	//headers:Headers = new Headers({'Authorization': 'bearer '+sessionStorage.getItem("AccessToken")});
	constructor(private _http:Http) { }

	setReferenceData(data) {
		localStorage.setItem("RefData", JSON.stringify(data.RefData));
		localStorage.setItem("UserDetails",JSON.stringify(data.UserDetails));
	}

  	getUserData(type) {
		return JSON.parse(localStorage.getItem("UserDetails"))[type];
	}

	getReferenceData(type) {
		return JSON.parse(localStorage.getItem("RefData"))[type];
	}

	PostMethod(credentials,url):Observable<any>{
		console.log("Global Service: POST:", this._baseUrl+url, "Data:", credentials, "Header:", new Headers({'Authorization': 'bearer '+sessionStorage.getItem("AccessToken")}));
		return this._http.post(
			this._baseUrl+url,
			credentials,
			{headers: new Headers({'Authorization': 'bearer '+sessionStorage.getItem("AccessToken")})}
		).map(this.extractData).catch(this.handleError);
	}

	GetMethod(url):Observable<any[]>{
		console.log("Global Service: GET:", this._baseUrl+url, "Header:", new Headers({'Authorization': 'bearer '+sessionStorage.getItem("AccessToken")}));
		return this._http.get(
			this._baseUrl+url,
			{headers: new Headers({'Authorization': 'bearer '+sessionStorage.getItem("AccessToken")})}
		).map(this.extractData).catch(this.handleError);
	}
 
	PutMethod(data,url):Observable<any>{
		console.log("Global Service: PUT:", this._baseUrl+url+"/"+data.Id, "Data:", data, "Header:", new Headers({'Authorization': 'bearer '+sessionStorage.getItem("AccessToken")}));
		return this._http.put(
			this._baseUrl+url+"/"+data.Id,
			data,
			{headers: new Headers({'Authorization': 'bearer '+sessionStorage.getItem("AccessToken")})}
		).map(this.extractData).catch(this.handleError);
	}

	// PutMethodWithUrl(data,url):Observable<any>{
	// 	console.log("Global Service: PUT:", this._baseUrl+url+"/"+data.id, "Data:", data, "Header:", this.headers);
	// 	return this._http.put(this._baseUrl+url,data,{headers:this.headers}).map(this.extractData).catch(this.handleError);
	// }

	 /*GetWithId(url,id):Observable<any[]>{
	 	console.log("Global Service: GET:", this._baseUrl+url+"/"+id, "Header:", new Headers({'Authorization': 'bearer '+sessionStorage.getItem("AccessToken")}));
	 	return this._http.get(this._baseUrl+url+"/"+id,{headers: new Headers({'Authorization': 'bearer '+sessionStorage.getItem("AccessToken")})}).map(this.extractData).catch(this.handleError);
	 }*/

	LoginPost(credentials, url, header):Observable<any>{
		console.log("Global Service: POST:", this._baseUrl+url, "Data:", credentials, "Header:", header);
		return this._http.post(this._baseUrl+url,credentials,{headers:header}).map(this.extractData).catch(this.handleError);
	}

	PostRegister(credentials, url):Observable<any>{
		console.log("Global Service: RegisterPOST:", this._baseUrl+url, "Data:", credentials);
		return this._http.post(this._baseUrl+url,credentials).map(this.extractData).catch(this.handleError);
	}

	Delete(id, url):Observable<any>{
		console.log("Global Service: Delete", this._baseUrl+url, "Data:", id, "Header:", {headers: new Headers({'Authorization': 'bearer '+sessionStorage.getItem("AccessToken")})});
		return this._http.delete(this._baseUrl+url+"/"+id,{headers: new Headers({'Authorization': 'bearer '+sessionStorage.getItem("AccessToken")})}).map(this.extractData).catch(this.handleError);
	}

	extractData(res:Response){
		let response = res.json();
		let body = response;
		return body || {};
	}

	handleError(error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		let errorResponse = error.json();
		if (errorResponse.StatusCode == 401) {
			location.reload();
		}
		return Observable.throw(errMsg);
	}
}
