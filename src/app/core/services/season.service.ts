import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {main_url} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Season} from '../interfaces/season.interface';

@Injectable({
  providedIn: 'root',
})
export class SeasonService {
  constructor(private http: HttpClient) {}

  getAllSeasons(): Observable<Season[]> {
    return this.http.get<Season[]>(`${main_url}/AddSeason/`);
  }
}
