
export interface Data {
  url: string;
  company_blacklists: string;
  port_blacklists: string;
  country_blacklists: string;
  ship_blacklists: string;
  id: string;
  created: Date;
  modified: Date;
  name: string;
  company_check_prior_months: number;
  company_check_prior_months_severity: string;
  company_check_severity: string;
  company_check_severity_technical_manager: string;
  company_check_severity_technical_manager_sdn: string;
  company_check_severity_technical_manager_generic: string;
  company_check_severity_group_beneficial_owner: string;
  company_check_severity_group_beneficial_owner_sdn: string;
  company_check_severity_group_beneficial_owner_generic: string;
  company_check_severity_ship_manager: string;
  company_check_severity_ship_manager_sdn: string;
  company_check_severity_ship_manager_generic: string;
  company_check_severity_operator: string;
  company_check_severity_operator_sdn: string;
  company_check_severity_operator_generic: string;
  company_check_severity_registered_owner: string;
  company_check_severity_registered_owner_sdn: string;
  company_check_severity_registered_owner_generic: string;
  country_check_severity: string;
  country_check_unknown_severity: string;
  ship_sanction_check_severity: string;
  ship_sanction_check_severity_sdn: string;
  ship_sanction_check_severity_generic: string;
  ship_sanction_prior_months: number;
  ship_sanction_prior_months_severity: string;
  port_visit_severity: string;
  no_ais_position_severity: string;
  zone_severity: string;
  ship_inspection_detained: string;
  ship_inspection_deficiency: string;
}

export interface DataSet {
  count: number;
  next: string;
  previous?: any;
  results: Data[];
}
