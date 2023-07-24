import { FormEvent, Fragment, useState } from "react";

import Button from "@/UI/button";

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
  dDate?: Date;
  rDate?: Date;
  passenger: { adult?: number; child?: number; infant?: number };
  seat?: string;
}

const FlightSchedulePage = () => {
  const initialState: FlightData = {
    fromLoc: "",
    arrLoc: "",
    dDate: new Date(),
    rDate: new Date(),
    passenger: { adult: 1, child: 0, infant: 0 },
    seat: "",
  };
  const [formData, setFormData] = useState<FlightData>(initialState);

  const flightScheduleHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  const inputChangeHandler = (
    identifier: string,
    value: string | Date | number
  ) => {
    console.log();
    switch (identifier) {
      case formType.fromLoc:
        setFormData((prevState) =>
          prevState ? { ...prevState, fromLoc: value as string } : prevState
        );
        break;
      case formType.arrLoc:
        setFormData((prevState) =>
          prevState ? { ...prevState, arrLoc: value as string } : prevState
        );
        break;
      case formType.dDate:
        setFormData((prevState) =>
          prevState ? { ...prevState, dDate: value as Date } : prevState
        );
        break;
      case formType.rDate:
        setFormData((prevState) =>
          prevState ? { ...prevState, rDate: value as Date } : prevState
        );
        break;
      case formType.adult:
        setFormData((prevState) =>
          prevState
            ? {
                ...prevState,
                passenger: { ...prevState.passenger, adult: value as number },
              }
            : prevState
        );
        break;
      case formType.child:
        setFormData((prevState) =>
          prevState
            ? {
                ...prevState,
                passenger: { ...prevState.passenger, child: value as number },
              }
            : prevState
        );
        break;
      case formType.infant:
        setFormData((prevState) =>
          prevState
            ? {
                ...prevState,
                passenger: { ...prevState.passenger, infant: value as number },
              }
            : prevState
        );
        break;
      case formType.seat:
        setFormData((prevState) =>
          prevState ? { ...prevState, seat: value as string } : prevState
        );
        break;
      default:
        break;
    }
    console.log(formData);
  };
  return (
    <Fragment>
      <h2>This is a scheduled flight</h2>
      <form onSubmit={flightScheduleHandler}>
        <label>
          <span>From</span>
          <input
            type="text"
            value={formData?.fromLoc}
            onChange={(event) =>
              inputChangeHandler(formType.fromLoc, event.target.value)
            }
          />
        </label>
        <label>
          <span>To</span>
          <input
            type="text"
            value={formData ? formData.arrLoc : ""}
            onChange={(event) =>
              inputChangeHandler(formType.arrLoc, event.target.value)
            }
          />
        </label>
        <label>
          <span>Departure Date</span>
          <input
            type="date"
            onChange={(event) =>
              inputChangeHandler(formType.dDate, event.target.value)
            }
          />
        </label>
        <label>
          <span>Return Date</span>
          <input
            type="date"
            onChange={(event) =>
              inputChangeHandler(formType.rDate, event.target.value)
            }
          />
        </label>
        <fieldset>
          <legend>Passengers</legend>
          <label>
            <span>Adult</span>
            <input
              type="number"
              value={formData.passenger.adult}
              onChange={(event) =>
                inputChangeHandler(formType.adult, event.target.value)
              }
            />
          </label>
          <label>
            <span>Child</span>
            <input
              type="number"
              value={formData.passenger.child}
              onChange={(event) =>
                inputChangeHandler(formType.child, event.target.value)
              }
            />
          </label>
          <label>
            <span>Infant</span>
            <input
              type="number"
              value={formData.passenger.infant}
              onChange={(event) =>
                inputChangeHandler(formType.infant, event.target.value)
              }
            />
          </label>
        </fieldset>
        <label>
          <span>Seat Class</span>
          <input
            type="text"
            value={formData.seat}
            onChange={(event) =>
              inputChangeHandler(formType.seat, event.target.value)
            }
          />
        </label>
        <Button>Search Flight</Button>
      </form>
    </Fragment>
  );
};

export default FlightSchedulePage;
