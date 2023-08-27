import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import {
  Authenticator,
  View,
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
import QuackCopyright from "./quack-copyright";
import QuackLogo from "./quack-logo";
import { formFields, services } from "./quack-authenticator-parameter";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

I18n.putVocabularies(translations);
I18n.setLanguage("ja");

import { ReactNode } from "react";

type SignProps = {
  children: ReactNode
}

export default function QuackAuthenticator({ children }: SignProps) {
  const { tokens } = useTheme();

  const components = {
    Header: () => {
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <QuackLogo width={200} height={50} />
        </View>
      );
    },
    Footer: () => {
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <QuackCopyright />
        </View>
      );
    },
    SignIn: {
      Header: () => {
        return (
          <Text padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}>
            サインインします
          </Text>
        );
      },
      Footer: () => {
        const { toResetPassword } = useAuthenticator();
        return (
          <View
            textAlign="center"
            padding={`0 ${tokens.space.xl} ${tokens.space.xl} ${tokens.space.xl}`}
          >
            <Button
              fontWeight="normal"
              onClick={toResetPassword}
              size="small"
              variation="link"
              isFullWidth={true}
            >
              パスワードを再設定する
            </Button>
          </View>
        );
      },
    },
    SignUp: {
      Header: () => {
        return (
          <>
            <Text padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}>
              アカウントを作成します
            </Text>
            <Text padding={`0 0 0 ${tokens.space.xl}`}>
              <Link color={tokens.colors.blue["80"]} textDecoration="underline" href="#">
                利用規約
              </Link>
              をお読みください
            </Text>
          </>
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
            メールアドレス認証
          </Heading>
        );
      },
      Footer: () => {
        const { toSignUp } = useAuthenticator();
        return (
          <View
            textAlign="center"
            padding={`0 ${tokens.space.xl} ${tokens.space.xl} ${tokens.space.xl}`}
          >
            <Button
              fontWeight="normal"
              onClick={toSignUp}
              size="small"
              variation="link"
              isFullWidth={true}
            >
              アカウント作成へ戻る
            </Button>
          </View>
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
            <Text>ユーザー名を入力してください</Text>
            <Text>登録したメールアドレスへ 認証コードが送付されます</Text>
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
              登録したメールアドレスへ 送付された認証コードを入力してください
            </Text>
          </>
        );
      },
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
            value: tokens.colors.blue["40"].value,
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
            <nav
              className="relative flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start"
              data-te-navbar-ref
            >
              <div className="flex w-full flex-wrap items-center justify-between px-6">
                <div className="flex items-center">
                  <a className="text-primary dark:text-primary-400" href="/">
                    <QuackLogo width={100} height={24} />
                  </a>
                </div>
                <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
                  <div
                    className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <h1>Hi, {user?.username}!</h1>
                  </div>
                </div>
                <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={signOut}
                  >
                    Signout
                  </button>
                </div>
              </div>
            </nav>
            {children}
          </main>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}
