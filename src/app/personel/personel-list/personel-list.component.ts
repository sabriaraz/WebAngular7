import { Component, OnInit } from '@angular/core';
import { PersonelService } from 'src/_services/personel.service';
import { Ipersonel } from 'src/_model/ipersonel';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrls: ['./personel-list.component.css']
})
export class PersonelListComponent implements OnInit {

  constructor(private persoenlService: PersonelService) { }
  personelList: Ipersonel[];
  secilenPerosnel: Ipersonel;
  ngOnInit() {
    this.GetPersonel();
  }
GetPersonel() {
  this.persoenlService.getPersonel().subscribe((pList: Ipersonel[]) => {
    this.personelList = pList;
  }, err => {
    console.log(err + 'Hatası');
  }
  );
}
SetPersonel(s: Ipersonel) {
  this.secilenPerosnel = s;
}
}
