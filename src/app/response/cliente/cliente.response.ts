export interface Cliente {
  clienteID: number;
  nombre: string;
  email: string;
  telefono: string;
  fechaRegistro: Date;
  estado: boolean;
}

export interface ClienteApi {
  totalRecords: number;
  data: any;
}
