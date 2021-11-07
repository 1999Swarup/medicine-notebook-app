import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent implements OnInit {

  id!: number
  medicine!: Medicine
  constructor(private route: ActivatedRoute, private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.medicine = new Medicine();
    this.medicineService.getMedicineById(this.id).subscribe( data => {
      this.medicine = data;
    });
  }
}
