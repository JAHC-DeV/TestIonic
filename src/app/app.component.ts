import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  text: string = ";"
  constructor(private http: HttpClient) {
    http.get<any>("http://195.35.36.71:8080/api/usuario/1").subscribe(data => {
        this.text = data.nombre as string
        console.log(data)
    })

  }
}
