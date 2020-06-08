import { Injectable } from '@angular/core';
import { Latest } from '../models/latest.model';
import { Location } from '../models/location.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root',
})
export class ApiServiceCorona{
    urlLatest = "https://coronavirus-tracker-api.herokuapp.com/v2/latest";
    urlLocations = "https://coronavirus-tracker-api.herokuapp.com/v2/locations";
    constructor(private http:HttpClient){

    }
    getLatest():Observable<Latest>{
        return this.http.get<Latest>(this.urlLatest);
    }
    getAllLocation():Observable<Location[]>{
        return this.http.get<Location[]>(this.urlLocations);
    }

}