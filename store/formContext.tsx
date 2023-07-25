import { useState, createContext, PropsWithChildren } from "react";

import DateFormatted from "@/pages/api/date";

interface FlightData {
  fromLoc: string;
  arrLoc: string;
  dDate: string;
  rDate?: string;
  passenger: { adult: number; child: number; infant: number };
  seat?: string;
}

const initialState: FlightData = {
  fromLoc: "",
  arrLoc: "",
  dDate: DateFormatted(),
  rDate: DateFormatted(),
  passenger: { adult: 1, child: 0, infant: 0 },
  seat: "",
};

export type SubmitType = Partial<FlightData>;

const flightCtx = {
  flightData: initialState,
  resetFlightData: () => {},
  changeFromLoc: (value: string) => {},
  changeArrLoc: (value: string) => {},
  submitHandler: ( value: SubmitType) => {}
};

const flightFormCtx = createContext(flightCtx);

export const FlightFormProvider = ({ children }: PropsWithChildren<{}>) => {
  const [flightData, setFlightData] = useState<FlightData>(initialState);

  const resetFlightData = () => {
    setFlightData(initialState);
  };

  const changeFromLoc = (value: string) => {
    setFlightData((prevState) => {
      return { ...prevState, fromLoc: value };
    });
  };

  const changeArrLoc = (value: string) => {
    setFlightData((prevState) => {
      return { ...prevState, arrLoc: value };
    });
  };

  const submitHandler = (value: SubmitType) => {
    setFlightData(prevState => {
      const newFlightData = {...prevState, ...value}
      console.log(newFlightData);
      return newFlightData;
    })
  };

  const flightContext = {
    flightData,
    resetFlightData,
    changeFromLoc,
    changeArrLoc,
    submitHandler
  };

  return (
    <flightFormCtx.Provider value={flightContext}>
      {children}
    </flightFormCtx.Provider>
  );
};

export default flightFormCtx;
