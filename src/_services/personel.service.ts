import { Injectable } from '@angular/core';
import { Ipersonel } from 'src/_model/ipersonel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {
baseUrl = 'http://localhost:2890';
pList: Ipersonel[];

constructor( private http: HttpClient) {
  }
getPersonel(): Observable<Ipersonel[]> {
    return this.http.get <Ipersonel[]>(this.baseUrl + '/Personel/Liste');
  }
updatePersonel(personelDTO: Ipersonel): Observable<Ipersonel> {
  return this.http.post<Ipersonel>(this.baseUrl + '/Personel/Guncelle' , personelDTO);
}
deletePersonel(personelDTO: Ipersonel): Observable<Ipersonel> {
  return this.http.post<Ipersonel>(this.baseUrl + '/Personel/Sil' , personelDTO);
}
createPersonel(personelDTO: Ipersonel): Observable<Ipersonel> {
  return this.http.post<Ipersonel>(this.baseUrl + '/Personel/Ekle' , personelDTO);
}
}
