/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Training } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TrainingUpdateFormInputValues = {
    Type?: string;
    Name?: string;
};
export declare type TrainingUpdateFormValidationValues = {
    Type?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainingUpdateFormOverridesProps = {
    TrainingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Type?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrainingUpdateFormProps = React.PropsWithChildren<{
    overrides?: TrainingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    training?: Training;
    onSubmit?: (fields: TrainingUpdateFormInputValues) => TrainingUpdateFormInputValues;
    onSuccess?: (fields: TrainingUpdateFormInputValues) => void;
    onError?: (fields: TrainingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrainingUpdateFormInputValues) => TrainingUpdateFormInputValues;
    onValidate?: TrainingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TrainingUpdateForm(props: TrainingUpdateFormProps): React.ReactElement;
