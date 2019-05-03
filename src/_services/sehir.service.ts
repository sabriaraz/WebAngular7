import { Injectable } from '@angular/core';
import { Isehir } from 'src/_model/isehir';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SehirService {
baseUrl = 'http://localhost:2890';
sList: Isehir[];

constructor( private http: HttpClient) {
  }
getSehirler(): Observable<Isehir[]> {
    return this.http.get <Isehir[]>(this.baseUrl + '/Sehir/Liste');
  }
updateSehir(sehirDTO: Isehir): Observable<Isehir> {
  return this.http.post<Isehir>(this.baseUrl + '/Sehir/Guncelle' , sehirDTO);
}
deleteSehir(sehirDTO: Isehir): Observable<Isehir> {
  return this.http.post<Isehir>(this.baseUrl + '/Sehir/Sil' , sehirDTO);
}
createSehir(sehirDTO: Isehir): Observable<Isehir> {
  return this.http.post<Isehir>(this.baseUrl + '/Sehir/Ekle' , sehirDTO);
}
}
