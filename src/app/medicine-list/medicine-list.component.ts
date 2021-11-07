import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

 
  medicines!: Medicine[];
  constructor(private medicineService: MedicineService,
    private router: Router) { }

  ngOnInit(): void {
     this.getMedicine();
  }
    private getMedicine(){
    this.medicineService.getMedicineList().subscribe(data => {
      this.medicines = data;
    });
  }
 medicineDetails(id: number){
    this.router.navigate(['medicine-details', id]);
  }

  updateMedicine(id: number){
    this.router.navigate(['update-medicine', id]);
  }

  deleteMedicine(id: number){
    this.medicineService.deleteMedicine(id).subscribe( data => {
      console.log(data);
      this.getMedicine();
    })
  }

}
