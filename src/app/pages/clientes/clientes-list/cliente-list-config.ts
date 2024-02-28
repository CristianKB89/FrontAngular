import { TableColumn } from "src/@vex/interfaces/table-column.interface";
import { Cliente } from "src/app/response/cliente/cliente.response";
import icClientes from "@iconify/icons-ic/twotone-group";
import { ListTableMenu } from "src/app/commons/list-table-menu.interface";
import icViewHeadLine from "@iconify/icons-ic/twotone-view-headline";
import icLabel from "@iconify/icons-ic/twotone-label";

const menuItems: ListTableMenu[] = [
  {
    type: "link",
    id: "all",
    icon: icViewHeadLine,
    label: "Todos",
  },
  {
    type: "link",
    id: "Activo",
    value: true,
    icon: icLabel,
    label: "Activo",
    classes: {
      icon: "text-green",
    },
  },
  {
    type: "link",
    id: "Inactivo",
    value: false,
    icon: icLabel,
    label: "Inactivo",
    classes: {
      icon: "text-red",
    },
  },
];

const tableColumns: TableColumn<Cliente>[] = [
  {
    label: "Nombre",
    property: "nombre",
    type: "text",
    cssClasses: ["font-medium", "w-10"],
  },
  {
    label: "Email",
    property: "email",
    type: "text",
    cssClasses: ["font-medium", "w-10"],
  },
  {
    label: "Fecha de Creación",
    property: "fechaRegistro",
    type: "datetime",
    cssClasses: ["font-medium", "w-10"],
  },
  {
    label: "Estado",
    property: "estado",
    type: "badge",
    cssClasses: ["font-medium", "w-10"],
  },
  {
    label: "",
    property: "menu",
    type: "buttonGroup",
    buttonItems: [
      {
        buttonLabel: "Editar",
        buttonAction: "edit",
        buttonCondition: null,
        disable: false,
      },
      {
        buttonLabel: "Eliminar",
        buttonAction: "remove",
        buttonCondition: null,
        disable: false,
      },
    ],
    cssClasses: ["font-medium", "w-10"],
  },
];

const filters = {
  numFilter: 0,
  textFilter: "",
  stateFilter: null,
  startDate: null,
  endDate: null,
};

const intputs = {
  numFilter: 0,
  textFilter: "",
  stateFilter: true,
  startDate: null,
  endDate: null,
};

export const componentSttings = {
  //Iconos
  icClientes: icClientes,
  menuOpen: false,
  //TableSettings
  tableColumns: tableColumns,
  initialSort: "Id",
  initialSortDir: "desc",
  getInputs: intputs,
  buttonLabel: "Editar",
  buttonLabel2: "Eliminar",
  menuItems: menuItems,
  filters: filters,
  columnsFilter: tableColumns.map((column) => {
    return {
      label: column.label,
      property: column.property,
      type: column.type,
    };
  }),
};
