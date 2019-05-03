import { Component, OnInit } from '@angular/core';
import { SehirService } from 'src/_services/sehir.service';
import { Isehir } from 'src/_model/isehir';


@Component ({
  selector: 'app-sehirler',
  templateUrl: './sehirler.component.html',
  styleUrls: ['./sehirler.component.css']
})
export class SehirlerComponent implements OnInit {
  constructor(private sehirService: SehirService) { }
  sehirList: Isehir[];
  selectedSehir: Isehir;
  bosSehir: Isehir;
  detay: boolean;
  ngOnInit() {
    this.GetSehirler();
  }
  getSehir(s: Isehir) {
    this.selectedSehir = s;
    this.detay = true;
  }
  mouseLeft() {
    this.detay = false;
  }
  GetSehirler() {
    this.sehirService.getSehirler().subscribe((sehirler: Isehir[]) => {
      this.sehirList = sehirler;
    }, err => {
      console.log(err + 'Hatası');
    }
    );
  }
}
