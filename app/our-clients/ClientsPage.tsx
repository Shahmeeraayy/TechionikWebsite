"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ClientsCard from "../../components/sections/ourClientsComponents/clientsCard";
import DropDown from "../../components/sections/ourClientsComponents/dropdown";
import FooterContact from "@/components/sections/home/footer-content/FooterContent";

import { OurClients, fetchClients, fetchIndustries, fetchServices, filterClients } from "@/app/api/our-clients/utils/getClients";
interface OurClientPageProps {
  info: OurClients[];
}
const OurClientPage = ({ info }: OurClientPageProps) => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const clientsQuery = useQuery({
    queryKey: ["our-clients", "clients"],
    queryFn: fetchClients,
    initialData: info?.length ? info : undefined,
  });

  const industriesQuery = useQuery({
    queryKey: ["our-clients", "industries"],
    queryFn: fetchIndustries,
  });

  const servicesQuery = useQuery({
    queryKey: ["our-clients", "services"],
    queryFn: fetchServices,
  });

  const clients = clientsQuery.data ?? info ?? [];
  const industries = industriesQuery.data ?? [];
  const services = servicesQuery.data ?? [];

  const filteredClients = useMemo(
    () => filterClients(clients, selectedIndustry, selectedService),
    [clients, selectedIndustry, selectedService],
  );

  return (
    <main>
      <div>
        <h1 className="body1 text-muted">Our Clients</h1>
        <p className="caption text-muted max-w-xl">
          We are proud of contributing to the success of our clients by providing them with top-notch
          software solutions that meet their unique needs and help them achieve their business goals.
        </p>
      </div>

      {/* Dropdowns */}
      <div className="flex justify-center my-10 space-x-4">
        <DropDown
          options={industries}
          placeholder="All Industries"
          onSelect={setSelectedIndustry}
        />
        <DropDown
          options={services}
          placeholder="All Services"
          onSelect={setSelectedService}
        />
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8 my-20">
        {filteredClients.map((client) => (
          <ClientsCard key={client.id} data={client} />
        ))}
      </div>

      <FooterContact />
    </main>
  );
};

export default OurClientPage;
