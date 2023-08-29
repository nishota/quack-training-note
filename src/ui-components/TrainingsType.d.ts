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
export declare type TrainingsTypeInputValues = {
    Field0?: string;
    Field1?: string;
};
export declare type TrainingsTypeValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainingsTypeOverridesProps = {
    TrainingsTypeGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<SelectFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrainingsTypeProps = React.PropsWithChildren<{
    overrides?: TrainingsTypeOverridesProps | undefined | null;
} & {
    onSubmit: (fields: TrainingsTypeInputValues) => void;
    onChange?: (fields: TrainingsTypeInputValues) => TrainingsTypeInputValues;
    onValidate?: TrainingsTypeValidationValues;
} & React.CSSProperties>;
export default function TrainingsType(props: TrainingsTypeProps): React.ReactElement;
