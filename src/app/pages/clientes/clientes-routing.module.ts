import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesListComponent } from "./clientes-list/clientes-list.component";

const routes: Routes = [
  {
    path: "",
    component: ClientesListComponent,
    data: {
      scrollDisable: true,
      toolbarShadowEnable: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
