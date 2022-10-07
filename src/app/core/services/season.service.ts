import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {main_url} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {GetPositionGroup, Season} from '../interfaces/season.interface';

@Injectable({
  providedIn: 'root',
})
export class SeasonService {
  constructor(private http: HttpClient) {}

  getAllSeasons(): Observable<Season[]> {
    return this.http.get<Season[]>(`${main_url}/AddSeason/`);
  }

  getPositions(): Observable<GetPositionGroup[]> {
    return this.http.get<GetPositionGroup[]>(
      `${main_url}/PositionGroup/?side_of_ball__in=O,D,ST`
    );
  }

  getMobileCarriers(): Observable<string[]> {
    return this.http.get<string[]>(
      `${main_url}/Player/mobile-carriers/`
    );
  }
}
