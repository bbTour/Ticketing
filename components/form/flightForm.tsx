import { FormEvent, Fragment, useContext, useRef } from "react";

import DateFormatted from "@/pages/api/date";
import flightFormCtx, { SubmitType } from "@/store/formContext";
import Button from "@/UI/button";

const FlightForm = () => {
  const formCtx = useContext(flightFormCtx);
  const departDateref = useRef<HTMLInputElement>(null);
  const returnDateref = useRef<HTMLInputElement>(null);
  const adultPassengerref = useRef<HTMLInputElement>(null);
  const childPassengerref = useRef<HTMLInputElement>(null);
  const infantPassengerref = useRef<HTMLInputElement>(null);
  const seatClassref = useRef<HTMLInputElement>(null);

  const flightScheduleHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const departureDate = departDateref.current
      ? departDateref.current.value
      : formCtx.flightData.dDate;
    const returnDate = returnDateref.current
      ? returnDateref.current.value
      : formCtx.flightData.rDate;
    const adultPassenger = adultPassengerref.current
      ? adultPassengerref.current.value as unknown
      : formCtx.flightData.passenger.adult;
    const childPassenger = childPassengerref.current
      ? childPassengerref.current.value as unknown
      : formCtx.flightData.passenger.child;
    const infantPassenger = infantPassengerref.current
      ? infantPassengerref.current.value as unknown
      : formCtx.flightData.passenger.infant;
    const seatClass = seatClassref.current
      ? seatClassref.current.value
      : formCtx.flightData.seat;

    const newFlightData: SubmitType = {
      dDate: departureDate,
      rDate: returnDate,
      passenger: {
        adult: adultPassenger as number,
        child: childPassenger as number,
        infant: infantPassenger as number,
      },
      seat: seatClass,
    };

    formCtx.submitHandler(newFlightData);

  };

  return (
    <Fragment>
      <h2>This is a scheduled flight</h2>
      <form onSubmit={flightScheduleHandler}>
        <label>
          <span>From</span>
          <input
            type="text"
            value={formCtx.flightData.fromLoc}
            onChange={(event) => formCtx.changeFromLoc(event.target.value)}
          />
        </label>
        <label>
          <span>To</span>
          <input
            type="text"
            value={formCtx.flightData ? formCtx.flightData.arrLoc : ""}
            onChange={(event) => formCtx.changeArrLoc(event.target.value)}
          />
        </label>
        <label>
          <span>Departure Date</span>
          <input
            type="date"
            defaultValue={DateFormatted()}
            ref={departDateref}
          />
        </label>
        <label>
          <span>Return Date</span>
          <input
            type="date"
            defaultValue={DateFormatted()}
            ref={returnDateref}
          />
        </label>
        <fieldset>
          <legend>Passengers</legend>
          <label>
            <span>Adult</span>
            <input
              type="number"
              defaultValue={formCtx.flightData.passenger.adult}
              ref={adultPassengerref}
            />
          </label>
          <label>
            <span>Child</span>
            <input
              type="number"
              defaultValue={formCtx.flightData.passenger.child}
              ref={childPassengerref}
            />
          </label>
          <label>
            <span>Infant</span>
            <input
              type="number"
              defaultValue={formCtx.flightData.passenger.infant}
              ref={infantPassengerref}
            />
          </label>
        </fieldset>
        <label>
          <span>Seat Class</span>
          <input type="text" ref={seatClassref} />
        </label>
        <Button>Search Flight</Button>
      </form>
    </Fragment>
  );
};

export default FlightForm;
