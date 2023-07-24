import { FormEvent, Fragment, useContext } from "react";

import flightFormCtx from "@/store/formContext";
import Button from "@/UI/button";


const FlightForm = () => {
  const formCtx = useContext(flightFormCtx);

  const flightScheduleHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(formCtx.flightData);
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
            onChange={(event) =>
              formCtx.changeFlightData(formCtx.formType.fromLoc, event.target.value)
            }
          />
        </label>
        <label>
          <span>To</span>
          <input
            type="text"
            value={formCtx.flightData ? formCtx.flightData.arrLoc : ""}
            onChange={(event) =>
              formCtx.changeFlightData(formCtx.formType.arrLoc, event.target.value)
            }
          />
        </label>
        <label>
          <span>Departure Date</span>
          <input
            type="date"
            onChange={(event) =>
              formCtx.changeFlightData(formCtx.formType.dDate, event.target.value)
            }
          />
        </label>
        <label>
          <span>Return Date</span>
          <input
            type="date"
            onChange={(event) =>
              formCtx.changeFlightData(formCtx.formType.rDate, event.target.value)
            }
          />
        </label>
        <fieldset>
          <legend>Passengers</legend>
          <label>
            <span>Adult</span>
            <input
              type="number"
              value={formCtx.flightData.passenger.adult}
              onChange={(event) =>
                formCtx.changeFlightData(formCtx.formType.adult, event.target.value)
              }
            />
          </label>
          <label>
            <span>Child</span>
            <input
              type="number"
              value={formCtx.flightData.passenger.child}
              onChange={(event) =>
                formCtx.changeFlightData(formCtx.formType.child, event.target.value)
              }
            />
          </label>
          <label>
            <span>Infant</span>
            <input
              type="number"
              value={formCtx.flightData.passenger.infant}
              onChange={(event) =>
                formCtx.changeFlightData(formCtx.formType.infant, event.target.value)
              }
            />
          </label>
        </fieldset>
        <label>
          <span>Seat Class</span>
          <input
            type="text"
            value={formCtx.flightData.seat}
            onChange={(event) =>
              formCtx.changeFlightData(formCtx.formType.seat, event.target.value)
            }
          />
        </label>
        <Button>Search Flight</Button>
      </form>
    </Fragment>
  );
}

export default FlightForm;