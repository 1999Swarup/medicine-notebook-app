import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMedicineComponent,
    MedicineListComponent,
    MedicineDetailsComponent,
    UpdateMedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
