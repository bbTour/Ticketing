import { FlightFormProvider } from "@/store/formContext";
import FlightForm from "@/components/form/flightForm";

const FlightSchedulePage = () => {
  return (
    <FlightFormProvider>
      <FlightForm />
    </FlightFormProvider>
  );
};

export default FlightSchedulePage;
