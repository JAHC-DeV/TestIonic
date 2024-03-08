import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HTTPOriginal } from '@awesome-cordova-plugins/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  text: string = ";"
  constructor(private http: HTTPOriginal) {
    /*http.get<any>("http://195.35.36.71:8080/api/usuario/1").subscribe(data => {
        this.text = data.nombre as string
        console.log(data)
    })*/
    http.get("http://195.35.36.71:8080/api/usuario/1", null, null).then(data => {
      this.text = data.data.nombre as string;
    }).catch(err => {
      this.text = err;
    })
  }
}
