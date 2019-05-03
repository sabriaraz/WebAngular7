import { Component, OnInit, Input } from '@angular/core';
import { Ipersonel } from 'src/_model/ipersonel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Isehir } from 'src/_model/isehir';
import { SehirService } from 'src/_services/sehir.service';

@Component({
  selector: 'app-personel-detay',
  templateUrl: './personel-detay.component.html',
  styleUrls: ['./personel-detay.component.css']
})
export class PersonelDetayComponent implements OnInit {
@Input() inputPersonel: Ipersonel;
personelForm: FormGroup;
sList: Isehir[];
  constructor(private formBuilder: FormBuilder, private sehirService: SehirService) { }

  ngOnInit() {
    this.createPersonelForm();
    this. GetSehirler();
  }
  GetSehirler() {
    this.sehirService.getSehirler().subscribe((sehirler: Isehir[]) => {
      this.sList = sehirler;
    }, err => {
      console.log(err + 'Hatası');
    }
    );
  }
  createPersonelForm() {
    this.personelForm = this.formBuilder.group
    (
        { id: [''],
           Ad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
           Soyad: ['', [Validators.required]]
        }
    );
  }
}
