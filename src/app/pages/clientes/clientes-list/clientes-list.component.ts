import { Component, OnInit } from "@angular/core";
import { CustomTitleService } from "@shared/services/custom-title.service";
import { fadeInRight400ms } from "src/@vex/animations/fade-in-right.animation";
import { scaleIn400ms } from "src/@vex/animations/scale-in.animation";
import { stagger40ms } from "src/@vex/animations/stagger.animation";
import { ClienteService } from "src/app/services/cliente.service";
import { componentSttings } from "./cliente-list-config";
import { ClienteApi } from "src/app/response/cliente/cliente.response";
import { ClienteMagnamentComponent } from "../cliente-magnament/cliente-magnament.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "vex-clientes-list",
  templateUrl: "./clientes-list.component.html",
  styleUrls: ["./clientes-list.component.scss"],
  animations: [stagger40ms, scaleIn400ms, fadeInRight400ms],
})
export class ClientesListComponent implements OnInit {
  component;
  constructor(
    customTitle: CustomTitleService,
    public _dialog: MatDialog,
    public _clienteService: ClienteService
  ) {
    customTitle.set("Clientes");
  }

  ngOnInit(): void {
    this.component = componentSttings;
  }

  rowClick(e: any) {
    let action = e.action;
    let client = e.row;

    switch (action) {
      case "edit":
        this.ClienteEdit(client);
        break;
      case "remove":
        this.ClienteRemove(client);
        break;
    }
    return false;
  }

  setData(data: any = null) {
    this.component.filters.stateFilter = data.value;
    this.component.menuOpen = false;
    this.formatGetInputs();
  }

  formatGetInputs() {
    let inputs = {
      numFilter: 0,
      textFilter: "",
      stateFilter: null,
      startDate: null,
      endDate: null,
    };

    if (this.component.filters.stateFilter != null) {
      inputs.stateFilter = this.component.filters.stateFilter;
    }

    this.component.getInputs = inputs;
  }

  openDialogRegister() {
    this._dialog
      .open(ClienteMagnamentComponent, {
        disableClose: true,
        width: "400px",
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.formatGetInputs();
        }
      });
  }

  ClienteEdit(row: ClienteApi) {}
  ClienteRemove(cliente: any) {}
}
