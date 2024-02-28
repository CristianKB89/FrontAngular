import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertService } from "@shared/services/alert.service";
import { Observable } from "rxjs";
import { ClienteApi } from "../response/cliente/cliente.response";
import { ApiResponse } from "../commons/response.interface";
import { environment as env } from "src/environments/environment";
import { endpoint } from "@shared/apis/endpoints";
import { ListClienteRequest } from "../requests/cliente/list-cliente.request";
import { map } from "rxjs/operators";
import { ClienteRequest } from "../requests/cliente/cliente.request";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  constructor(private _http: HttpClient, private alert: AlertService) {}
  GetAll(size, sort, order, page, getInputs): Observable<ClienteApi> {
    const requestUrl = `${env.api}${endpoint.LIST_CLIENTES}`;
    const params: ListClienteRequest = new ListClienteRequest(
      page + 1,
      order,
      sort,
      size,
      getInputs.numFilter,
      getInputs.textFilter,
      getInputs.stateFilter,
      getInputs.starDate,
      getInputs.endDate
    );

    return this._http.post<ClienteApi>(requestUrl, params).pipe(
      map((data: ClienteApi) => {
        data.data.items.forEach(function (e: any) {
          switch (e.estado) {
            case "Inactivo":
              e.badgeColor = "text-red bg-red-light";
              break;
            case "Activo":
              e.badgeColor = "text-green bg-green-light";
              break;
            default:
              e.badgeColor = "text-red bg-red-light";
              break;
          }
        });
        return data;
      })
    );
  }

  ClienteRegister(cliente: ClienteRequest): Observable<ApiResponse> {
    const requestUrl = `${env.api}${endpoint.CLIENTES_REGISTER}`;
    console.log(cliente);
    return this._http.post(requestUrl, cliente).pipe(
      map((resp: ApiResponse) => {
        return resp;
      })
    );
  }
}
