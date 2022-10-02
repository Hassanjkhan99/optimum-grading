import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetPlayerResponse} from '../interfaces/player.interface';
import {main_url} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(public http: HttpClient) {
  }

  getPlayers(): Observable<GetPlayerResponse> {
    return this.http.get<GetPlayerResponse>(
      main_url + '/Player-pg/?playerposition__season=288&page=1&search='
    );
  }
}
