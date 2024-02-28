import { convertDateToRequest } from "@shared/functions/helpers";
import { params } from "src/app/commons/params-api.interface";

export class ListClienteRequest extends params {
  constructor(
    numPage: number,
    order: "desc" | "asc",
    sort: string,
    records: 10 | 20 | 50,
    numFilter: number = 0,
    textFilter: string = "",
    stateFilter: boolean,
    private startDate: string, //fechaCreaciónInicio
    private endDate: string //fechaCreaciónFin
  ) {
    super(
      true,
      numPage,
      order,
      sort,
      records,
      false,
      numFilter,
      textFilter,
      stateFilter
    );
    this.startDate = convertDateToRequest(this.startDate, "date");
    this.endDate = convertDateToRequest(this.endDate, "date");
  }
}
