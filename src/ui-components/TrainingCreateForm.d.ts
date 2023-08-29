/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TrainingCreateFormInputValues = {
    Type?: string;
    Name?: string;
};
export declare type TrainingCreateFormValidationValues = {
    Type?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainingCreateFormOverridesProps = {
    TrainingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Type?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
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
