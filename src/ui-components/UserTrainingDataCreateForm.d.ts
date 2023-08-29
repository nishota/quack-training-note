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
export declare type UserTrainingDataCreateFormInputValues = {
    UserName?: string;
    TrainingDataId?: string[];
};
export declare type UserTrainingDataCreateFormValidationValues = {
    UserName?: ValidationFunction<string>;
    TrainingDataId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserTrainingDataCreateFormOverridesProps = {
    UserTrainingDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    UserName?: PrimitiveOverrideProps<TextFieldProps>;
    TrainingDataId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserTrainingDataCreateFormProps = React.PropsWithChildren<{
    overrides?: UserTrainingDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserTrainingDataCreateFormInputValues) => UserTrainingDataCreateFormInputValues;
    onSuccess?: (fields: UserTrainingDataCreateFormInputValues) => void;
    onError?: (fields: UserTrainingDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserTrainingDataCreateFormInputValues) => UserTrainingDataCreateFormInputValues;
    onValidate?: UserTrainingDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserTrainingDataCreateForm(props: UserTrainingDataCreateFormProps): React.ReactElement;
