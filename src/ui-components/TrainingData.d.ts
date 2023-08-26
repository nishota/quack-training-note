/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TrainingDataInputValues = {};
export declare type TrainingDataValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainingDataOverridesProps = {
    TrainingDataGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type TrainingDataProps = React.PropsWithChildren<{
    overrides?: TrainingDataOverridesProps | undefined | null;
} & {
    onSubmit: (fields: TrainingDataInputValues) => void;
    onChange?: (fields: TrainingDataInputValues) => TrainingDataInputValues;
    onValidate?: TrainingDataValidationValues;
} & React.CSSProperties>;
export default function TrainingData(props: TrainingDataProps): React.ReactElement;
