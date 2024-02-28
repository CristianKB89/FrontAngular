import { Component, Inject, OnInit, inject } from "@angular/core";
import icClose from "@iconify/icons-ic/twotone-close";
import * as configs from "../../../../static-data/configs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AlertService } from "@shared/services/alert.service";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "vex-cliente-magnament",
  templateUrl: "./cliente-magnament.component.html",
  styleUrls: ["./cliente-magnament.component.scss"],
})
export class ClienteMagnamentComponent implements OnInit {
  icClose = icClose;
  configs = configs;

  form: FormGroup;

  initForm(): void {
    this.form = this._fb.group({
      clienteId: [0, [Validators.required]],
      nombre: ["", [Validators.required]],
      email: [""],
      telefono: [""],
      estado: ["", [Validators.required]],
    });
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private _fb: FormBuilder,
    private _alert: AlertService,
    private _clienteService: ClienteService,
    public _dialogRef: MatDialogRef<ClienteMagnamentComponent>
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  ClienteSave(): void {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((controls) => {
        controls.markAllAsTouched();
      });
    }

    const clienteId = this.form.get("clienteId").value;

    if (clienteId > 0) {
      this.ClienteEdit(clienteId);
    } else this.ClienteRegister();
  }
  ClienteEdit(clienteId: number): void {}
  ClienteRegister(): void {
    let request = this.form.value;
    console.log(request);
    this._clienteService.ClienteRegister(request).subscribe((resp) => {
      if (resp.isSucces) {
        this._alert.succes("Excelente", resp.message);
        this._dialogRef.close(true);
      } else {
        this._alert.warn("Atención", resp.message);
      }
    });
  }
}
