import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ClientDetailsLocationService } from '../../Services/clientdetailslocation.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css'],
  providers: [ClientDetailsLocationService]
})
export class ZipcodeComponent implements OnInit {
  details: any;
  clientLocationAndDetailsActive: boolean = false;
  houseNumber: any;
  address1: any;
  address2: any;
  state: any;
  city: any;
  businessName: any;
  dba: any;
  zipCode: any;
  errorCheck: boolean = false;
  orderNo: string = "1";
  ZipCodeForm = new FormGroup({
    'zipCode': new FormControl("", Validators.required)
  });

  ClientDetailsLocationForm = new FormGroup({
    'businessName': new FormControl("", ),
    'dba': new FormControl("", ),
    'houseNumber': new FormControl("", ),
    'address1': new FormControl("", ),
    'address2': new FormControl("", ),
    'city': new FormControl("", ),
    'state': new FormControl("", )
  });


  constructor(private router: Router, private _clientDetailsLocationService: ClientDetailsLocationService) { }

  ngOnInit() {
    this.ZipCodeForm.controls['zipCode'].markAsUntouched();
    this.ZipCodeForm.controls['zipCode'].markAsPristine();
    this.zipCode = "";
  }

  ClientDetailsLocationFormSubmit() {
    console.log(this.ClientDetailsLocationForm.value);
  }
  ZipCodeSubmit() {
    this.getClientDetailsAndLocationInfo();
  }

  getClientDetailsAndLocationInfo() {

    this.ZipCodeForm.controls['zipCode'].markAsDirty();
    this.ZipCodeForm.controls['zipCode'].markAsTouched();



    let zipcode = ({
      "zipcode": this.zipCode //"72206"
    });
    console.log(zipcode);



    if (this.zipCode === '72206' && this.zipCode.trim().length > 0) {
      this.clientLocationAndDetailsActive = true;
      this.orderNo = "2";  
      this._clientDetailsLocationService.GetClientDetailsLocation(zipcode).subscribe(
        data => {
          debugger
          this.details = JSON.parse(data._body);
          this.businessName = this.details.buisnessname;
          this.dba = this.details.dba;
          this.houseNumber = this.details.address1;
          this.city = this.details.city;
          this.address1 = this.details.address1;
          this.address2 = this.details.address2;
          this.state = this.details.state;
        })

    } else {
      this.errorCheck = true;
      this.ZipCodeForm.controls['zipCode'].markAsPristine();

    }
    /*this.clientLocationAndDetailsActive = true;
    this.orderNo = "2";  
    this.businessName = "bussiness 1";
    this.dba = "dba check";
    this.houseNumber ="test 1"; 
    this.city = "test 2";
    this.address1 = "test 3";
    this.address2 = "test 4";
    this.state = "test 5";
  */
  }

}
