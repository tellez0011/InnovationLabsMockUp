import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {

  data:any
  powerstats: { label: string; valor: any; }[] | undefined;
  appearance: any[] | undefined;
  biography: any | undefined;

  constructor(private http: HttpClient) {}

  async obtenerInformacionSpiderman() {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', 'de91acfa97mshd674a3260d9c0ddp151de7jsn35fef9af8426')
      .set('X-RapidAPI-Host', 'superhero-search.p.rapidapi.com');

    try {
      const response = await this.http.get('https://superhero-search.p.rapidapi.com/api/', {
        headers,
        params: { hero: 'Hulk' }
      }).toPromise();
  
      this.data= response
      this.powerstats = Object.keys(this.data.powerstats).map(label => ({ label, valor: this.data.powerstats[label] }));
      this.appearance=Object.keys(this.data.appearance).map(label =>({label,adjetive: this.data.appearance[label]}));
      this.biography=Object.keys(this.data.biography).map(label=>({label,data: this.data.biography[label]}))
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit(){
     this.obtenerInformacionSpiderman()
  
  }
}

