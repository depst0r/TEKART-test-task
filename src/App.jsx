import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setData, setStep, getPrice, resetState } from "./Redux/Actions/actions"

import "bootstrap/dist/css/bootstrap.css";

const StepOne = ({ setValue, building, resetState, setStep }) => {
  const handleChangeValue = (event) => {
    setValue("building", event.target.value);
  }

  const handleNext = () => setStep(2);

  return (
    <>
      <div className="card-body">
        <span className="text-muted">Шаг 1</span>
        <h5 className="card-title">Что будем строить?</h5>
        <input
          type="radio"
          value="1"
          className="btn-check"
          name="btnradio"
          id="House"
          autoComplete="off"
          onChange={handleChangeValue}
        />
        <label
          className="card-text text-success font-weight-bold"
          htmlFor="House"
        >
          Жилой Дом
        </label>
        <br />
        <input
          type="radio"
          value="2"
          className="btn-check"
          name="btnradio"
          id="Garage"
          autoComplete="off"
          onChange={handleChangeValue}
        />
        <label
          className="card-text text-success font-weight-bold"
          htmlFor="Garage"
        >
          Гараж
        </label>
      </div>
      <div className="card-footer text-muted">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={resetState}
        >
          Отмена
        </button>
        {building && (
          <button
            type="button"
            className="btn btn-outline-info ml-5"
            onClick={handleNext}
          >
            Далее
          </button>
        )}
      </div>
    </>
  );
}

const StepTwo = ({ setValue, height, resetState, setStep }) => {
  const handleChangeValue = (event) => {
    setValue("height", event.target.value);
  };

  const handleNext = () => setStep(3);

  return (
    <>
      <div className="card-body">
        <span className="text-muted">Шаг 2</span>
        <h5 className="card-title">Колличество этажей (число):</h5>
        <input type="number" onChange={handleChangeValue} />
      </div>
      <div className="card-footer text-muted">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={resetState}
        >
          Отмена
        </button>
        {height && (
          <button
            type="button"
            className="btn btn-outline-info ml-5"
            onClick={handleNext}
          >
            Далее
          </button>
        )}
      </div>
    </>
  );
}

const StepThree = ({ stepNumber, setValue, material, resetState, setStep }) => {
  const handleChangeValue = (event) => {
    setValue("material", event.target.value);
  };

  const handleNext = () => setStep(4);

  return (
    <>
      <div className="card-body">
        <span className="text-muted">Шаг {stepNumber}</span>
        <h5 className="card-title">Материал Стен:</h5>
        <input
          type="radio"
          value="1"
          className="btn-check"
          name="btnradio"
          id="1"
          autoComplete="off"
          onChange={handleChangeValue}
        />
        <label className="card-text text-success font-weight-bold" htmlFor="1">
          Кирпич
        </label>
        <br />
        <input
          type="radio"
          value="2"
          className="btn-check"
          name="btnradio"
          id="2"
          autoComplete="off"
          onChange={handleChangeValue}
        />
        <label className="card-text text-success font-weight-bold" htmlFor="2">
          Шлакоблок
        </label>
        <br />
        <input
          type="radio"
          value="3"
          className="btn-check"
          name="btnradio"
          id="3"
          autoComplete="off"
          onChange={handleChangeValue}
        />
        <label className="card-text text-success font-weight-bold" htmlFor="3">
          Деревянный брус
        </label>
      </div>
      <div className="card-footer text-muted">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={resetState}
        >
          Отмена
        </button>
        {material && (
          <button
            type="button"
            className="btn btn-outline-info ml-5"
            onClick={handleNext}
          >
            Далее
          </button>
        )}
      </div>
    </>
  );
}

const StepFour = ({
  stepNumber,
  setValue,
  sizeX,
  sizeY,
  resetState,
  setStep,
  onSubmit
}) => {
  const handleChangeValue = (event) => {
    setValue(event.target.name, event.target.value);
  };

  const handleNext = () => {
    onSubmit();
    setStep(5);
  };

  return (
    <>
      <div className="card-body">
        <span className="text-muted">Шаг {stepNumber}</span>
        <h5 className="card-title">Длинна стен (в метрах):</h5>
        <input type="number" name="sizeX" onChange={handleChangeValue} />
        <span>X</span>
        <input type="number" name="sizeY" onChange={handleChangeValue} />
      </div>
      <div className="card-footer text-muted">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={resetState}
        >
          Отмена
        </button>
        {sizeX && sizeY && (
          <button
            type="button"
            className="btn btn-outline-info ml-5"
            onClick={handleNext}
          >
            Далее
          </button>
        )}
      </div>
    </>
  );
}

const StepFive = ({ resetState, result, message, isLoading }) => {
  return (
    <>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          Загрузка...
        </div>
      )}
      {!isLoading && (
        <>
          <div className="card-body">
            <span className="text-muted">Результат расчета</span>
            <div className="card-title">
              {result === "ok" ? (
                <>
                  <h1>Успешно</h1>
                  <p>{message}</p>
                </>
              ) : (
                <>
                  <h1>Ошибка</h1>
                  <p className="text-danger">{message}</p>
                </>
              )}
            </div>
          </div>
          <div className="card-footer text-muted">
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={resetState}
            >
              Новый расчет
            </button>
          </div>
        </>
      )}
    </>
  );
}

export const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const setValue = (key, value) => {
    dispatch(
      setData({
        dataKey: key,
        dataValue: value
      })
    );
  };

  const handleResetState = () => dispatch(resetState());

  const handleSetStep = (value) => {
    if (value === 2 && state.building === "2") {
      dispatch(setStep(3));
    } else {
      dispatch(setStep(value));
    }
  };

  const handleSubmit = () => dispatch(getPrice());

  const renderSteps = () => {
    switch (state.step) {
      case 1:
        return (
          <StepOne
            setValue={setValue}
            building={state.building}
            resetState={handleResetState}
            setStep={handleSetStep}
          />
        );
      case 2:
        return (
          <StepTwo
            setValue={setValue}
            height={state.height}
            resetState={handleResetState}
            setStep={handleSetStep}
          />
        );
      case 3:
        return (
          <StepThree
            setValue={setValue}
            material={state.material}
            resetState={handleResetState}
            setStep={handleSetStep}
            stepNumber={state.building === "2" ? 2 : 3}
          />
        );
      case 4:
        return (
          <StepFour
            setValue={setValue}
            sizeX={state.sizeX}
            sizeY={state.sizeY}
            resetState={handleResetState}
            setStep={handleSetStep}
            stepNumber={state.building === "2" ? 3 : 4}
            onSubmit={handleSubmit}
          />
        );
      case 5:
        return (
          <StepFive
            resetState={handleResetState}
            result={state?.result?.result}
            message={state?.result?.message}
            isLoading={state.isLoading}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header">Калькулятор цены конструкций</div>
      {renderSteps()}
    </div>
  );
}
