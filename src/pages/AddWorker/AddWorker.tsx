import React, { useState, useContext, useEffect, useCallback } from "react";
import { WorkersListContext } from "../../context/WorkersListContext";
import { WorkersContextType } from "../../types";
import "./AddWorker.scss";
import UniversalButton from "../../components/UniversalButton/UniversalButton";
import { AlertSuccess } from "../../components/AlertSuccess/AlertSuccess";

export const AddWorker = () => {
  const { workers, addWorker } = useContext(
    WorkersListContext
  ) as WorkersContextType;
  const [newWorker, setNewWorker] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    street: "",
    city: "",
    postCode: "",
    salary: 0,
    statusOfWork: "",
    phone: "",
  });
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const isFormValid = useCallback(() => {
    return (
      Boolean(newWorker.firstName) &&
      Boolean(newWorker.lastName) &&
      Boolean(newWorker.dateOfBirth) &&
      Boolean(newWorker.street) &&
      Boolean(newWorker.city) &&
      Boolean(newWorker.postCode) &&
      Boolean(newWorker.salary) &&
      Boolean(newWorker.statusOfWork) &&
      Boolean(newWorker.phone)
    );
  }, [newWorker]);

  useEffect(() => {
    if (isSubmitted) {
      setDisabled(false);
    }
  }, [isSubmitted]);

  useEffect(() => {
    setIsSubmitted(isFormValid());
  }, [newWorker, isFormValid]);

  const handleAddWorker = () => {
    if (isFormValid()) {
      const newId =
        workers.length > 0
          ? Math.max(...workers.map((worker) => worker.id)) + 1
          : 1;

      if (!newWorker.statusOfWork) {
        alert("Please select a status of work");
        return;
      }

      addWorker({ ...newWorker, id: newId });
      setNewWorker({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        street: "",
        city: "",
        postCode: "",
        salary: 0,
        statusOfWork: "",
        phone: "",
      });

      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div className="add-page dark:bg-slate-600">
      {showAlert && <AlertSuccess title={"Worker added successfully!"} />}
      <div className="form-container">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Add new employee
        </h2>
        <form
          name="AddNewWorker"
          className="add-form w-full max-w-lg"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddWorker();
          }}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                    htmlFor="first-name"
                  >
                    First Name:
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:putline-none focus:bg-white"
                    id="first-name"
                    required
                    type="text"
                    placeholder="First name"
                    value={newWorker.firstName}
                    onChange={(e) =>
                      setNewWorker({ ...newWorker, firstName: e.target.value })
                    }
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                    htmlFor="last-name"
                  >
                    Last Name:
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:putline-none focus:bg-white"
                    id="last-name"
                    required
                    type="text"
                    placeholder="Last name"
                    value={newWorker.lastName}
                    onChange={(e) =>
                      setNewWorker({ ...newWorker, lastName: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                htmlFor="date-of-birth"
              >
                Date of birth:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounder py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="date-of-birth"
                required
                type="date"
                placeholder="Enter date of birth..."
                value={newWorker.dateOfBirth}
                onChange={(e) =>
                  setNewWorker({ ...newWorker, dateOfBirth: e.target.value })
                }
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                htmlFor="street"
              >
                Street:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounder py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="street"
                type="text"
                required
                placeholder="Enter street..."
                value={newWorker.street}
                onChange={(e) =>
                  setNewWorker({ ...newWorker, street: e.target.value })
                }
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                htmlFor="city"
              >
                City:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounder py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="city"
                type="text"
                required
                placeholder="Enter city..."
                value={newWorker.city}
                onChange={(e) =>
                  setNewWorker({ ...newWorker, city: e.target.value })
                }
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                htmlFor="post-code"
              >
                Post Code:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounder py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="post-code"
                type="number"
                required
                placeholder="Enter post code..."
                value={newWorker.postCode}
                onChange={(e) =>
                  setNewWorker({ ...newWorker, postCode: e.target.value })
                }
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                htmlFor="salary"
              >
                Salary:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounder py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="salary"
                required
                type="number"
                value={newWorker.salary}
                onChange={(e) =>
                  setNewWorker({
                    ...newWorker,
                    salary: parseFloat(e.target.value),
                  })
                }
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                htmlFor="status-of-work"
              >
                Status of Work:
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounder py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="status-of-work"
                placeholder="Choose status of work..."
                value={newWorker.statusOfWork}
                onChange={(e) =>
                  setNewWorker({ ...newWorker, statusOfWork: e.target.value })
                }
                required
                name="status-of-work"
              >
                <option value="" disabled>
                  Select status of work...
                </option>
                <option value="Employed">Employee</option>
                <option value="Self-employed">Self-employed</option>
                <option value="Maternity-leave">Maternity-leave</option>
                <option value="Fired">Fired</option>
                <option value="On-vacation">On vacation</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                htmlFor="phone"
              >
                Phone:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounder py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                type="number"
                required
                placeholder="Enter phone number..."
                value={newWorker.phone}
                onChange={(e) =>
                  setNewWorker({ ...newWorker, phone: e.target.value })
                }
              />
            </div>
          </div>
          <div className="w-full mb-6 md:mb-0">
            <UniversalButton
              type="submit"
              title="Add new employee"
              isDisabled={disabled}
              classes={isSubmitted ? "btn-submit" : "btn-submit-transparent"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
