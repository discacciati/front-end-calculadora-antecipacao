import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../../components/form";
import { MemoryRouter } from "react-router-dom";

describe("Form Component", () => {
  let project;
  let setDataSale;
  let days;
  let setErrors;
  let amountTextBox;
  let installmentsTextBox;
  let mdrTextBox;

  const setup = () => {
    render(
      <MemoryRouter>
        <Form setDataSale={setDataSale} days={days} setErrors={setErrors} />
      </MemoryRouter>
    );

    amountTextBox = screen.getByRole("textbox", {
      name: /project amount/i,
    });

    installmentsTextBox = screen.getByRole("textbox", {
      name: /project installments/i,
    });

    mdrTextBox = screen.getByRole("textbox", {
      name: /project mdr/i,
    });
  };

  beforeEach(() => {
    project = new project({
      amount: 1500,
      installments: 6,
      mdr: 30,
    });
  });

  test("Should be able to render a Form", () => {
    setup();
    expect(
      screen.getByRole("form", {
        name: /edit a project/i,
      })
    ).toHaveFormValues({
      amount: project.amount,
      installments: project.installments,
      mdr: project.mdr,
    });
  });
});
