import "@aws-amplify/ui-react/styles.css";
  
import { Amplify } from "aws-amplify";
import {
  Authenticator,
  View,
  Image,
  Text,
  Heading,
  Button,
  CheckboxField,
  Theme,
  ThemeProvider,
  useTheme,
  useAuthenticator,
} from "@aws-amplify/ui-react";

import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

const components = {
  Header: () => {
    const { tokens } = useTheme();
    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
        />
      </View>
    );
  },
  Footer: () => {
    const { tokens } = useTheme();
    const year = new Date().getFullYear();
    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; {year} QUACK-TEAL.COM All Rights Reserved
        </Text>
      </View>
    );
  },
  SignIn: {
    Header: () => {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          サインイン
        </Heading>
      );
    },
    Footer: () => {
      const { toResetPassword } = useAuthenticator();
      return (
        <View textAlign="center" className="pb-5">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            パスワードを再設定する
          </Button>
        </View>
      );
    },
  },
  SignUp: {
    Header: () => {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          アカウント作成
        </Heading>
      );
    },
    Footer: () => {
      const { toSignIn } = useAuthenticator();
      return (
        <View textAlign="center" className="pb-5">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            サインインへ戻る
          </Button>
        </View>
      );
    },
    FormFields: () => {
      const { validationErrors } = useAuthenticator();
      return (
        <>
          <Authenticator.SignUp.FormFields />
          <CheckboxField
            errorMessage={validationErrors.acknowledgement as string}
            hasError={!!validationErrors.acknowledgement}
            name="acknowledgement"
            value="yes"
            label="I agree with the Terms & Conditions"
          />
        </>
      );
    },
  },
  ConfirmSignUp: {
    Header: () => {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information
        </Heading>
      );
    },
    Footer: () => {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header: () => {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information
        </Heading>
      );
    },
    Footer: () => {
      return <Text>Footer Information</Text>;
    },
  },
  ResetPassword: {
    Header: () => {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information
        </Heading>
      );
    },
    Footer: () => {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header: () => {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information
        </Heading>
      );
    },
    Footer: () => {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: "Enter your User name",
    },
  },
  signUp: {
    username: {
      placeholder: "Enter your User name",
      order: 1,
    },
    email: {
      placeholder: "Enter your Email address",
      order: 2,
    },
    password: {
      label: "Password",
      placeholder: "Enter your Password",
      isRequired: false,
      order: 3,
    },
    confirm_password: {
      label: "Confirm Password",
      order: 4,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: "Enter your Password",
    },
  },
  resetPassword: {
    username: {
      placeholder: "Enter your Email address",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: "Enter your Confirmation Code",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      placeholder: "Enter your Password Please",
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: "New Label",
      placeholder: "Enter your Confirmation Code",
      isRequired: false,
    },
  },
};
const services = {
  async validateCustomSignUp(formData: any, _: any) {
    if (!formData.acknowledgement) {
      return {
        acknowledgement: "You must agree to the Terms & Conditions",
      };
    }
  },
  async validateFormPassword(formData: any)
  {
    if (!formData.acknowledgement) {
      return {
        acknowledgement: "validateFormPassword",
      };
    }
  },
  async validateConfirmPassword(formData: any)
  {
    if (!formData.acknowledgement) {
      return {
        acknowledgement: "validateConfirmPassword",
      };
    }
  },
  async validatePreferredUsername(formData: any)
  {
    if (!formData.acknowledgement) {
      return {
        acknowledgement: "validatePreferredUsername",
      };
    }
  }
};

export default function App() {
  const { tokens } = useTheme();
  const theme: Theme = {
    name: "Auth Example Theme",
    tokens: {
      colors: {
        background: {
          primary: {
            value: tokens.colors.teal["40"].value,
          },
          secondary: {
            value: tokens.colors.teal["100"].value,
          },
        },
        font: {
          interactive: {
            value: tokens.colors.white.value,
          },
        },
        brand: {
          primary: {
            "10": tokens.colors.purple["100"],
            "80": tokens.colors.purple["40"],
            "90": tokens.colors.purple["20"],
            "100": tokens.colors.purple["10"],
          },
        },
      },
      components: {
        tabs: {
          item: {
            _focus: {
              color: {
                value: tokens.colors.white.value,
              },
            },
            _hover: {
              color: {
                value: tokens.colors.yellow["80"].value,
              },
            },
            _active: {
              color: {
                value: tokens.colors.white.value,
              },
            },
          },
        },
      },
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Authenticator
        components={components}
        formFields={formFields}
        services={services}
      >
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>サインアウト</button>
          </main>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}
