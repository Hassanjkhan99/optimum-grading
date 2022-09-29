import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetPlayerResponse } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(public http: HttpClient) {}

  getPlayers(): Observable<GetPlayerResponse> {
    return this.http.get<GetPlayerResponse>(
      'https://gradebackend.optimumgrading.com/grading/Player-pg/?playerposition__season=288&page=1&search=',
      {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0NDg4NDYwLCJqdGkiOiJmODA3NmUwZThlNjI0NjI5YjBhNTg3MzQwZDc3YWY1ZSIsInVzZXJfaWQiOjE4OX0.RSrQ8mGXtxYUyesW1QxpOv0GvYZ_Flh6ylApYZXrE1k',
        },
      }
    );
  }
}
