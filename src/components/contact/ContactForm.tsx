import { type ServiceModel } from "./model";
import { GrServices } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { useEffect, useRef } from "react";
import Button from "../commons/Button";

export function SubmitButton() {
  //const { pending } = useFormStatus();
  return (
    // <Button type="submit" disabled={pending}>
    //   {pending ? "Enviado..." : "Enviar"}
    // </Button>
    <Button>Enviar</Button>
  )
}

export default function ContactForm({ services }: { services: ServiceModel[] }) {

  const initialState = { message: null, errors: {}, data: { serviceId: '', name: '', email: '', phone: '', message: '' } };
  //const [state, formAction] = useFormState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // useEffect(() => {
  //   if (state?.message === 'success') {
  //     formRef.current?.reset();
  //   }
  // }, [state]);

  return (
    <>
      <div className="flex flex-col gap-3 items-center">        
        <form
          ref={formRef}
          //action={formAction}
          className="xl:w-6/12 w-full">
          <div className="rounded-md bg-gray-50 p-4 md:p-6">
            {/* service Name */}
            <div className="mb-4">
              <label htmlFor="service" className="mb-2 block text-sm font-medium">
                Servicio
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="serviceId"
                  className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  //defaultValue={state?.data?.serviceId}
                  aria-describedby="customer-error"
                >
                  <option value="" disabled>
                    Seleccionar servicio
                  </option>
                  {services.map((service) => (
                    <option key={service.id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
                <GrServices className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
              <div id="service-error" aria-live="polite" aria-atomic="true">
                {/* {state?.errors?.serviceId &&
                  state.errors.serviceId.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))} */}
              </div>
            </div>

            {/* Customer Name */}
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Nombre
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ingrese su nombre"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    //defaultValue={state?.data?.name}
                  />
                  <FaRegUser className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
              <div id="name-error" aria-live="polite" aria-atomic="true">
                {/* {state?.errors?.name &&
                  state.errors.name.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))} */}
              </div>
            </div>
            {/* Customer Email */}
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Correo electrónico
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Ingrese su correo"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    //defaultValue={state?.data?.email}
                  />
                  <MdAlternateEmail className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
              <div id="email-error" aria-live="polite" aria-atomic="true">
                {/* {state?.errors?.email &&
                  state.errors.email.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))} */}
              </div>
            </div>
            {/* Customer Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                Numero telefónico
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Ingrese su numero telefónico"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    //defaultValue={state?.data?.phone}
                  />
                  <FaPhoneAlt className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
              <div id="phone-error" aria-live="polite" aria-atomic="true">
                {/* {state?.errors?.phone &&
                  state.errors.phone.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))} */}
              </div>
            </div>
            {/* Customer Message */}
            <div className="mb-4">
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Mensaje
              </label>
              <div className="relative mt-2 rounded-md">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Mensaje"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    //defaultValue={state?.data?.message}
                  />
                  <MdMessage className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
              <div id="message-error" aria-live="polite" aria-atomic="true">
                {/* {state?.errors?.message &&
                  state.errors.message.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))} */}
              </div>
            </div>
            <SubmitButton></SubmitButton>
          </div>
        </form>
      </div>
    </>
  )
}