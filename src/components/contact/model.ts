export type ContactModel = {
  id?: string;
  serviceId: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export type ServiceModel = {
  id: string;
  name: string;
}

export type State = {
  errors?: {
    serviceId?: string[];
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  } | undefined;
  message?: string | null;  
  data: ContactModel | undefined;
} | undefined;