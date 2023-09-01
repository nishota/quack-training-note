/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TrainingCreateFormInputValues = {
    weight?: number;
    reps?: number;
    createdAt?: string;
    updatedAt?: string;
    userName?: string;
    previousId?: string;
    Type?: string;
};
export declare type TrainingCreateFormValidationValues = {
    weight?: ValidationFunction<number>;
    reps?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    userName?: ValidationFunction<string>;
    previousId?: ValidationFunction<string>;
    Type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainingCreateFormOverridesProps = {
    TrainingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
    reps?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    previousId?: PrimitiveOverrideProps<TextFieldProps>;
    Type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type TrainingCreateFormProps = React.PropsWithChildren<{
    overrides?: TrainingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TrainingCreateFormInputValues) => TrainingCreateFormInputValues;
    onSuccess?: (fields: TrainingCreateFormInputValues) => void;
    onError?: (fields: TrainingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrainingCreateFormInputValues) => TrainingCreateFormInputValues;
    onValidate?: TrainingCreateFormValidationValues;
} & React.CSSProperties>;
export default function TrainingCreateForm(props: TrainingCreateFormProps): React.ReactElement;
