export const services = {
  async validateCustomSignUp(formData: any) {
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

export const formFields = {
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
      isRequired: false,
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
      placeholder: "ユーザー名",
      isRequired: true,
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      labelHidden: true,
      placeholder: "認証コードを入力してください",
      isRequired: true,
      order: 1,
    },
    new_password: {
      labelHidden: true,
      placeholder: "パスワード",
      isRequired: true,
      order: 2,
    },
    confirm_password: {
      labelHidden: true,
      placeholder: "パスワードを入力してください",
      isRequired: false,
      order: 3,
    },
  },
  confirmSignUp: {
    confirmation_code: {
      labelHidden: true,
      placeholder: "認証コードを入力してください",
      isRequired: true,
    },
  },
};
