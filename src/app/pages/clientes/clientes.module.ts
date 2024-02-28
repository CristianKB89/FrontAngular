import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientesRoutingModule } from "./clientes-routing.module";
import { ClientesListComponent } from "./clientes-list/clientes-list.component";
import { SharedModule } from "@shared/shared.module";
import { ClienteMagnamentComponent } from './cliente-magnament/cliente-magnament.component';

@NgModule({
  declarations: [ClientesListComponent, ClienteMagnamentComponent],
  imports: [CommonModule, ClientesRoutingModule, SharedModule],
})
export class ClientesModule {}
