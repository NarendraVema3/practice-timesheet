import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
// import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class ProjectService {

    headers;

    //username:- narendra
    //password:-  2sHVa1fYn7V86xRM


    constructor(private http: Http) {

        this.headers = function () {
            const headers = new Headers({ 'Content-Type': 'application/json' });
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Accept', 'application/json');
            headers.append('Access-Control-Allow-Methods', 'POST');
            headers.append('Access-Control-Allow-Headers', 'Content-Type');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            return headers;
        };

    }



    getprojects()
    {     
       // const options = new RequestOptions({ headers: this.headers });       
       let globalMainUrl ="https://smart-api.cfapps.io/smart/project";
       return this.http.get(globalMainUrl)
       .map(x => {
            let data = x;
           console.log(data);
           return x;
       });


    }

    addproject(payload)
    {
    const globalMainUrl = "https://smart-api.cfapps.io/smart/project";
     return this.http.post(globalMainUrl,payload)
     .map(x => {
         // let data = x.json();
         console.log(x);
         return x;
     });               
    }
    getProjectDetails(id): Observable<any> {
        const options = new RequestOptions({ headers: this.headers });


        const globalMainUrl = "https://smart-api.cfapps.io/smart/project/";
        const postUrl = globalMainUrl + id;
        return this.http.get(postUrl, options)
            .map((response: Response) => {

                const loginResponse = response.json();
                const n = loginResponse.length;
                console.log('loginResponse', loginResponse);

                return loginResponse;

            });

    }
    deleteProjectDetails(id): Observable<any> {
        const options = new RequestOptions({ headers: this.headers });

        const globalMainUrl = "https://smart-api.cfapps.io/smart/project";
        // const globalMainUrl = "http://localhost:3000/api/users";
        const postUrl = globalMainUrl + id;
        return this.http.delete(postUrl, options)
            .map((response: Response) => {

                const loginResponse = response.json();
                const n = loginResponse.length;
                console.log('loginResponse', loginResponse);

                return loginResponse;

            });

    }


    editProjectDetails(id): Observable<any> {
        const options = new RequestOptions({ headers: this.headers });

        const globalMainUrl = "https://smart-api.cfapps.io/smart/project/";
        // const globalMainUrl = "http://localhost:3000/api/users";
        const postUrl = globalMainUrl + id;
        return this.http.delete(postUrl, options)
            .map((response: Response) => {

                const loginResponse = response.json();
                const n = loginResponse.length;
                console.log('loginResponse', loginResponse);

                return loginResponse;

            });

    }


    getEmployees()
    {     
       // const options = new RequestOptions({ headers: this.headers });       
       let globalMainUrl = "https://smart-api.cfapps.io/api/employee";
       return this.http.get(globalMainUrl)
       .map(x => {
            let data = x;
           console.log(data);
           return x;
       });
    }

    addEmployeeDetails(payload)
    {
    const globalMainUrl = "https://smart-api.cfapps.io/api/employee";
     return this.http.post(globalMainUrl,payload)
     .map(x => {
         // let data = x.json();
         console.log(x);
         return x;
     });               
    }
    getEmployeeDetails(id) {
      //  const options = new RequestOptions({ headers: this.headers });


        const globalMainUrl = "https://smart-api.cfapps.io/api/employee/employeeid/";
        const postUrl = globalMainUrl + id;
        console.log( postUrl );
        return this.http.get(postUrl)
            .map(x => {
                const employeeDetails = x.json();
                return employeeDetails;
            });

    }
    deleteEmployeeDetails(id) {
      //  const options = new RequestOptions({ headers: this.headers });

        const globalMainUrl = "https://smart-api.cfapps.io/api/employee/";
        // const globalMainUrl = "http://localhost:3000/api/users";
        const postUrl = globalMainUrl + id;
        return this.http.delete(postUrl)
            .map((response: Response) => {

                const loginResponse = response.json();
                const n = loginResponse.length;
                console.log('loginResponse', loginResponse);

                return loginResponse;

            });

    }


    editEmployeeDetails(id): Observable<any> {
        const options = new RequestOptions({ headers: this.headers });

        const globalMainUrl = "https://smart-api.cfapps.io/api/employee/";
        // const globalMainUrl = "http://localhost:3000/api/users";
        const postUrl = globalMainUrl + id;
        return this.http.delete(postUrl, options)
            .map((response: Response) => {

                const loginResponse = response.json();
                const n = loginResponse.length;
                console.log('loginResponse', loginResponse);

                return loginResponse;

            });

    }



















    // http://localhost:4020/api/projects

        getTimesheets()
    {     
        const options = new RequestOptions({ headers: this.headers });       
       let globalMainUrl = "http://localhost:4020/api/timesheet" 
       return this.http.get(globalMainUrl,options)
       .map(x => {
            let data = x;
           console.log(data);
           return x;
       });
    }





}