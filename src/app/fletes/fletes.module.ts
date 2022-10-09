import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FletesPageRoutingModule } from './fletes-routing.module';

import { FletesPage } from './fletes.page';
import { AltaComponent } from './alta/alta.component';
import { PrecargaComponent } from './precargas/precarga/precarga.component';
import { PaqueteComponent } from './paquetes/paquete/paquete.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { PrecargasComponent } from './precargas/precargas.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FletesPageRoutingModule],
  declarations: [
    FletesPage,
    AltaComponent,
    PrecargaComponent,
    PaqueteComponent,
    PaquetesComponent,
    PrecargasComponent,
  ],
})
export class FletesPageModule {}
