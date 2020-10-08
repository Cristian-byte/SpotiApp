import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('Spotify Service Listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': '[{"key":"Authorization","value":"Bearer BQDEzm7hqpgJSdJfDV7zDizMgi5-8AMQtVpVquwQb3prGekl6DYi8aQd3uW8qNNDrWDZceu8qaPd990vMeg","description":"","type":"text","enabled":true}]'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } )
        .subscribe( data => {
          console.log(data);
        });
  }
}
