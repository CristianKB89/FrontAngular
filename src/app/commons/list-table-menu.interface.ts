import { Icon } from "@visurel/iconify-angular";

export interface ListTableMenu {
  type: "link" | "subheading" | "button";
  id?: "all" | "Activo" | "Inactivo";
  icon?: Icon;
  label: string;
  value?: boolean;
  classes?: {
    icon?: string;
  };
  size?: string;
}
