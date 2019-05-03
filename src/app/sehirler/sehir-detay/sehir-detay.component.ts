import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Isehir } from 'src/_model/isehir';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SehirService } from 'src/_services/sehir.service';
import * as alertifyJs from 'alertifyjs';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sehir-detay',
  templateUrl: './sehir-detay.component.html',
  styleUrls: ['./sehir-detay.component.css']
})
export class SehirDetayComponent implements OnInit {
  @Input() inputSecilenSehir: Isehir;
  sehirForm: FormGroup;
  sehir: Isehir;
  sehirList: Isehir[];
  constructor(private formBuil: FormBuilder, private sehirService: SehirService) { }

  ngOnInit() {
    this.createSehirForm();
  }
createSehirForm() {

  this.sehirForm = this.formBuil.group
  (
      { id: [''],
         sehirAd: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
      }
  );
}
GetSehirler() {
  this.sehirService.getSehirler().subscribe((sehirler: Isehir[]) => {
    this.sehirList = sehirler;
  }, err => {
    console.log(err + 'Hatası');
  }
  );
}
sehirGuncelle(sDTO: Isehir) {
  this.sehirService.updateSehir(sDTO).subscribe((sehirDTO: Isehir) => {
    this.sehir = sehirDTO;
    alertifyJs.warning(this.sehir.sehirAd + ' Güncellendi');
  }, err => {
    alertifyJs.console.error(err);
  });
}
sehirEkle(s: Isehir) {
  this.sehirService.createSehir(s).subscribe((sehirDTO: Isehir) => {
    alertifyJs.success(sehirDTO.sehirAd + ' Eklendi');
  }, err => {
    alertifyJs.console.error(err);
  });
}
sehirSil(sDTO: Isehir) {
  this.sehirService.deleteSehir(sDTO).subscribe((sehirDTO: Isehir) => {
    this.sehir = sehirDTO;
    alertifyJs.error(this.sehir.sehirAd + ' Silindi');
  }, err => {
    alertifyJs.console.error(err);
  });
}
}
