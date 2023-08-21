import "@aws-amplify/ui-react/styles.css";

import { Amplify } from "aws-amplify";
import {
  Authenticator,
  View,
  Image,
  Text,
  Link,
  Heading,
  Button,
  CheckboxField,
  Theme,
  ThemeProvider,
  useTheme,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { I18n } from "aws-amplify";
import { translations } from "@aws-amplify/ui-react";
I18n.putVocabularies(translations);
I18n.setLanguage("jp");

I18n.putVocabularies({
  jp: {
    "Sign In": "サインイン",
    "Sign in": "サインイン",
    "Create Account": "サインアップ",
    "Send code": "認証コード送信",
    "Back to Sign In": "サインインへ戻る"
  },
});

import awsExports from "../../aws-exports";
Amplify.configure(awsExports);

export default function App() {
  const { tokens } = useTheme();

  const components = {
    Header: () => {
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="Quack logo"
            src="https://docs.amplify.aws/assets/logo-dark.svg"
          />
        </View>
      );
    },
    Footer: () => {
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
        return (
          <Text
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          >
            Quack Training Noteへサインインします
          </Text>
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
    ConfirmSignIn: {
      Header: () => {
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information
          </Heading>
        );
      },
    },
    SignUp: {
      Header: () => {
        return (
          <Text
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          >
            Quack Training Noteのアカウントを作成します
          </Text>
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
            <Link href="#">利用規約</Link>
            <CheckboxField
              errorMessage={validationErrors.acknowledgement as string}
              hasError={!!validationErrors.acknowledgement}
              name="acknowledgement"
              value="yes"
              label="私は利用規約に同意します"
            />
          </>
        );
      },
    },
    ConfirmSignUp: {
      Header: () => {
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information
          </Heading>
        );
      },
    },

    ResetPassword: {
      Header: () => {
        return (
          <>
            <Heading
              padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
              level={5}
            >
              パスワード再設定
            </Heading>
            <Text>
              <span>入力したメールアドレスへ</span>
              認証コードが送付されます
            </Text>
          </>
        );
      },
    },
    ConfirmResetPassword: {
      Header: () => {
        return (
          <>
            <Heading
              padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
              level={5}
            >
              パスワード再設定
            </Heading>
            <Text>
              <span>入力したメールアドレスへ</span>
              送付された認証コードを入力してください
            </Text>
          </>
        );
      },
      Footer: () => {
        const { resendCode } = useAuthenticator();
        return (
          <View textAlign="center" className="pb-5">
            <Button
              fontWeight="normal"
              onClick={resendCode}
              size="small"
              variation="link"
            >
              認証コードを再送します
            </Button>
          </View>
        );
      },
    },
  };

  const formFields = {
    signIn: {
      username: {
        labelHidden: true,
        placeholder: "ユーザー名",
        order: 1,
        isRequired: true,
      },
      password: {
        labelHidden: true,
        placeholder: "パスワード",
        order: 2,
        isRequired: true,
      },
    },
    signUp: {
      username: {
        labelHidden: true,
        placeholder: "ユーザー名",
        order: 1,
        isRequired: true,
      },
      email: {
        labelHidden: true,
        placeholder: "メールアドレス",
        order: 2,
        isRequired: true,
      },
      password: {
        labelHidden: true,
        placeholder: "パスワード",
        isRequired: true,
        order: 3,
      },
      confirm_password: {
        labelHidden: true,
        placeholder: "同じパスワードを入力してください",
        isRequired: true,
        order: 4,
      },
    },
    forceNewPassword: {
      password: {
        labelHidden: true,
        placeholder: "パスワード",
        isRequired: true,
      },
    },
    resetPassword: {
      username: {
        labelHidden: true,
        placeholder: "メールアドレス",
        isRequired: true,
      },
    },
    confirmResetPassword: {
      confirmation_code: {
        labelHidden: true,
        placeholder: "認証コードを入力してください",
        isRequired: true,
      },
      confirm_password: {
        labelHidden: true,
        placeholder: "パスワードを入力してください",
        isRequired: true,
      },
    },
    confirmSignIn: {
      confirmation_code: {
        labelHidden: true,
        placeholder: "認証コードを入力してください",
        isRequired: true,
      },
    },
  };
  const services = {
    async validateCustomSignUp(formData: any, _: any) {
      if (!formData.acknowledgement) {
        return {
          acknowledgement: "利用規約への同意をお願いいたします",
        };
      }
    },
    async validateFormPassword(formData: any) {
      if (!formData.acknowledgement) {
        return {
          acknowledgement: "誤ったパスワードが入力されました",
        };
      }
    },
    async validateConfirmPassword(formData: any) {
      if (!formData.acknowledgement) {
        return {
          acknowledgement: "誤ったパスワードが入力されました",
        };
      }
    },
    async validatePreferredUsername(formData: any) {
      if (!formData.acknowledgement) {
        return {
          acknowledgement: "誤ったユーザ名が入力されました",
        };
      }
    },
  };

  const theme: Theme = {
    name: "Auth Theme",
    tokens: {
      colors: {
        background: {
          primary: {
            value: tokens.colors.teal["10"].value,
          },
          secondary: {
            value: tokens.colors.teal["80"].value,
          },
        },
        font: {
          interactive: {
            value: tokens.colors.black.value,
          },
        },
        brand: {
          primary: {
            "10": tokens.colors.blue["100"],
            "80": tokens.colors.blue["40"],
            "90": tokens.colors.blue["20"],
            "100": tokens.colors.blue["10"],
          },
        },
      },
      components: {
        tabs: {
          item: {
            _focus: {
              color: {
                value: tokens.colors.black.value,
              },
            },
            _hover: {
              color: {
                value: tokens.colors.white.value,
              },
            },
            _active: {
              color: {
                value: tokens.colors.black.value,
              },
            },
          },
        },
        textfield: {},
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Authenticator
        initialState="signUp"
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
