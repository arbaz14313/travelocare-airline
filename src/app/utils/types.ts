import React from "react";

export interface DropdownProps {
  title: React.ReactNode;
  items: { label: string; link: string }[];
}

export interface Modalprops {
  show: boolean;
  handleClose: () => void;
  setShow: any;
  ispath?: boolean;
}

export interface AutoSearchProps {
  error?: any;
  label: string;
  options: string[];
  name?: string;
  setFieldValue?: any;
}

export interface AirportData {
  country: string;
  city: string;
  name: string;
  code: string;
}

export interface Travelers {
  adults: number;
  children: number;
  infants: number;
}

export interface Sector {
  id: number;
  departFrom: string;
  arrivalTo: string;
  departureDate: string;
}

export interface FormValues {
  [x: string]: string | number | boolean | readonly string[] | Travelers | Sector[] | undefined;
  selectedTab: string;
  departFrom: string;
  arrivalTo: string;
  departureDate: string;   // ✅ renamed from arrivalDate
  returnDate: string;      // ✅ new — used for Round Trip
  travelers: Travelers;
  stop_mode: boolean;
  class_mode: boolean;
  sectors: Sector[];
  name: string;
  email: string;
  phone: string;
}

export interface SearchEngineProps {
  handleToggle?: () => void;
}

export interface Heroprops {
  title: string;
  description: string;
}