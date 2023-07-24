import { useState, createContext, PropsWithChildren } from "react";

enum formType {
  fromLoc = "DEPARTURE_LOCATION",
  arrLoc = "ARRIVAL_LOCATION",
  dDate = "DEPARTURE_DATE",
  rDate = "RETURN_DATE",
  adult = "PASSENGER_ADULT",
  child = "PASSENGER_CHILD",
  infant = "PASSENGER_INFANT",
  seat = "SEAT_CLASS",
}

interface FlightData {
  fromLoc: string;
  arrLoc: string;
  dDate: Date;
  rDate?: Date;
  passenger: { adult: number; child: number; infant: number };
  seat?: string;
}

const initialState: FlightData = {
  fromLoc: "",
  arrLoc: "",
  dDate: new Date(),
  rDate: new Date(),
  passenger: { adult: 1, child: 0, infant: 0 },
  seat: "",
};

const flightCtx = {
  flightData: initialState,
  formType,
  changeFlightData: (identifier: string, value: number | string | Date) => {},
  resetFlightData: () => {},
};

const flightFormCtx = createContext(flightCtx);



export const FlightFormProvider = ({children} : PropsWithChildren<{}>) => {
  const [flightData, setFlightData] = useState<FlightData>(initialState);

  const resetFlightData = () => {
    setFlightData(initialState);
  };

  const changeFlightData = (
    identifier: string,
    value: string | Date | number
  ) => {
    console.log();
    switch (identifier) {
      case formType.fromLoc:
        setFlightData((prevState) =>
          prevState ? { ...prevState, fromLoc: value as string } : prevState
        );
        break;
      case formType.arrLoc:
        setFlightData((prevState) =>
          prevState ? { ...prevState, arrLoc: value as string } : prevState
        );
        break;
      case formType.dDate:
        setFlightData((prevState) =>
          prevState ? { ...prevState, dDate: value as Date } : prevState
        );
        break;
      case formType.rDate:
        setFlightData((prevState) =>
          prevState ? { ...prevState, rDate: value as Date } : prevState
        );
        break;
      case formType.adult:
        setFlightData((prevState) =>
          prevState
            ? {
                ...prevState,
                passenger: { ...prevState.passenger, adult: value as number },
              }
            : prevState
        );
        break;
      case formType.child:
        setFlightData((prevState) =>
          prevState
            ? {
                ...prevState,
                passenger: { ...prevState.passenger, child: value as number },
              }
            : prevState
        );
        break;
      case formType.infant:
        setFlightData((prevState) =>
          prevState
            ? {
                ...prevState,
                passenger: { ...prevState.passenger, infant: value as number },
              }
            : prevState
        );
        break;
      case formType.seat:
        setFlightData((prevState) =>
          prevState ? { ...prevState, seat: value as string } : prevState
        );
        break;
      default:
        break;
    }
    console.log(flightData);
  };

  const flightContext = {
    flightData,
    formType,
    changeFlightData,
    resetFlightData,
  };

  return (
    <flightFormCtx.Provider value={flightContext}>
      {children}
    </flightFormCtx.Provider>
  );
};

export default flightFormCtx;
