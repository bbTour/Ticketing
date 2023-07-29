import { FlightFormProvider } from "@/store/formContext";
import FlightForm from "@/components/form/flightForm";
import FlightAvailabilityList from "@/components/flightAvailability/flightAvailabilityList";
import FlightFilterList from "@/components/flightFilter/flightFilterList";

const FlightSchedulePage = () => {
  return (
    <FlightFormProvider>
      <FlightForm />
      <FlightAvailabilityList />
      <FlightFilterList />
    </FlightFormProvider>
  );
};

export default FlightSchedulePage;
