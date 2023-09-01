/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Training } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TrainingCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    weight: "",
    reps: "",
    createdAt: "",
    updatedAt: "",
    userName: "",
    previousId: "",
    Type: "",
  };
  const [weight, setWeight] = React.useState(initialValues.weight);
  const [reps, setReps] = React.useState(initialValues.reps);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [userName, setUserName] = React.useState(initialValues.userName);
  const [previousId, setPreviousId] = React.useState(initialValues.previousId);
  const [Type, setType] = React.useState(initialValues.Type);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setWeight(initialValues.weight);
    setReps(initialValues.reps);
    setCreatedAt(initialValues.createdAt);
    setUpdatedAt(initialValues.updatedAt);
    setUserName(initialValues.userName);
    setPreviousId(initialValues.previousId);
    setType(initialValues.Type);
    setErrors({});
  };
  const validations = {
    weight: [{ type: "Required" }],
    reps: [{ type: "Required" }],
    createdAt: [{ type: "Required" }],
    updatedAt: [{ type: "Required" }],
    userName: [{ type: "Required" }],
    previousId: [],
    Type: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          weight,
          reps,
          createdAt,
          updatedAt,
          userName,
          previousId,
          Type,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            weight: modelFields.weight,
            reps: modelFields.reps,
            createdAt: modelFields.createdAt,
            updatedAt: modelFields.updatedAt,
            userName: modelFields.userName,
            previousId: modelFields.previousId,
          };
          await DataStore.save(new Training(modelFieldsToSave));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TrainingCreateForm")}
      {...rest}
    >
      <TextField
        label="Weight"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={weight}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              weight: value,
              reps,
              createdAt,
              updatedAt,
              userName,
              previousId,
              Type,
            };
            const result = onChange(modelFields);
            value = result?.weight ?? value;
          }
          if (errors.weight?.hasError) {
            runValidationTasks("weight", value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks("weight", weight)}
        errorMessage={errors.weight?.errorMessage}
        hasError={errors.weight?.hasError}
        {...getOverrideProps(overrides, "weight")}
      ></TextField>
      <TextField
        label="Reps"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={reps}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              weight,
              reps: value,
              createdAt,
              updatedAt,
              userName,
              previousId,
              Type,
            };
            const result = onChange(modelFields);
            value = result?.reps ?? value;
          }
          if (errors.reps?.hasError) {
            runValidationTasks("reps", value);
          }
          setReps(value);
        }}
        onBlur={() => runValidationTasks("reps", reps)}
        errorMessage={errors.reps?.errorMessage}
        hasError={errors.reps?.hasError}
        {...getOverrideProps(overrides, "reps")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              weight,
              reps,
              createdAt: value,
              updatedAt,
              userName,
              previousId,
              Type,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={updatedAt && convertToLocal(new Date(updatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              weight,
              reps,
              createdAt,
              updatedAt: value,
              userName,
              previousId,
              Type,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <TextField
        label="User name"
        isRequired={true}
        isReadOnly={false}
        value={userName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              weight,
              reps,
              createdAt,
              updatedAt,
              userName: value,
              previousId,
              Type,
            };
            const result = onChange(modelFields);
            value = result?.userName ?? value;
          }
          if (errors.userName?.hasError) {
            runValidationTasks("userName", value);
          }
          setUserName(value);
        }}
        onBlur={() => runValidationTasks("userName", userName)}
        errorMessage={errors.userName?.errorMessage}
        hasError={errors.userName?.hasError}
        {...getOverrideProps(overrides, "userName")}
      ></TextField>
      <TextField
        label="Previous id"
        isRequired={false}
        isReadOnly={false}
        value={previousId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              weight,
              reps,
              createdAt,
              updatedAt,
              userName,
              previousId: value,
              Type,
            };
            const result = onChange(modelFields);
            value = result?.previousId ?? value;
          }
          if (errors.previousId?.hasError) {
            runValidationTasks("previousId", value);
          }
          setPreviousId(value);
        }}
        onBlur={() => runValidationTasks("previousId", previousId)}
        errorMessage={errors.previousId?.errorMessage}
        hasError={errors.previousId?.hasError}
        {...getOverrideProps(overrides, "previousId")}
      ></TextField>
      <SelectField
        label="Label"
        placeholder="Please select an option"
        value={Type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              weight,
              reps,
              createdAt,
              updatedAt,
              userName,
              previousId,
              Type: value,
            };
            const result = onChange(modelFields);
            value = result?.Type ?? value;
          }
          if (errors.Type?.hasError) {
            runValidationTasks("Type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("Type", Type)}
        errorMessage={errors.Type?.errorMessage}
        hasError={errors.Type?.hasError}
        {...getOverrideProps(overrides, "Type")}
      >
        <option
          children="ダンベル"
          value="ダンベル"
          {...getOverrideProps(overrides, "Typeoption0")}
        ></option>
        <option
          children="バーベル"
          value="バーベル"
          {...getOverrideProps(overrides, "Typeoption1")}
        ></option>
        <option
          children="自重"
          value="自重"
          {...getOverrideProps(overrides, "Typeoption2")}
        ></option>
        <option
          children="その他"
          value="その他"
          {...getOverrideProps(overrides, "Typeoption3")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
