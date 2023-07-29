// import { toSignIn, toResetPassword } from "@aws-amplify/ui-react/lib-esm/components/Auth/SignUp";

const components = {
  Header() {
    return (
      <header className="text-center py-8">
        <img
          alt="Amplify logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
        />
      </header>
    );
  },

  Footer() {
    return (
      <footer className="text-center py-8">
        <p className="text-gray-500">&copy; All Rights Reserved</p>
      </footer>
    );
  },

  SignIn: {
    Header() {
      return <h3 className="px-0 pt-16 text-2xl">Sign in to your account</h3>;
    },
    Footer() {
      return (
        <div className="text-center">
          <button
            className="font-normal text-blue-500"
            // onClick={toResetPassword}
          >
            Reset Password
          </button>
        </div>
      );
    },
  },

  SignUp: {
    Header() {
      return <h3 className="px-0 pt-16 text-2xl">Create a new account</h3>;
    },
    Footer() {
      return (
        <div className="text-center">
          <button
            className="font-normal text-blue-500"
            // onClick={toSignIn}
          >
            Back to Sign In
          </button>
        </div>
      );
    },
  },

  ConfirmSignUp: {
    Header() {
      return <h3 className="px-0 pt-16 text-2xl">Enter Information:</h3>;
    },
    Footer() {
      return <p>Footer Information</p>;
    },
  },

  SetupTOTP: {
    Header() {
      return <h3 className="px-0 pt-16 text-2xl">Enter Information:</h3>;
    },
    Footer() {
      return <p>Footer Information</p>;
    },
  },

  ConfirmSignIn: {
    Header() {
      return <h3 className="px-0 pt-16 text-2xl">Enter Information:</h3>;
    },
    Footer() {
      return <p>Footer Information</p>;
    },
  },

  ResetPassword: {
    Header() {
      return <h3 className="px-0 pt-16 text-2xl">Enter Information:</h3>;
    },
    Footer() {
      return <p>Footer Information</p>;
    },
  },

  ConfirmResetPassword: {
    Header() {
      return <h3 className="px-0 pt-16 text-2xl">Enter Information:</h3>;
    },
    Footer() {
      return <p>Footer Information</p>;
    },
  },
};

// MUST ADD THE FOLLOWING TO aws-exports.js
/**
 * "aws_cognito_username_attributes": [
 *      "EMAIL"
 *  ],
 */
const formFields = {
  signIn: {
    username: {
      label: 'Email:',
      placeholder: 'Enter your email',
    },
    password: {
      label: 'Password:',
      placeholder: 'Enter your password',
    },
  },
  signUp: {
    "custom:name": {
      label: 'Child\'s Name:',
      placeholder: 'Enter your child\'s name',
      isRequired: true,
      order: 1,
    },
    "custom:parentName": {
      label: 'Parent\'s Name:',
      placeholder: 'Enter your name',
      isRequired: true,
      order: 2,
    },
    email: {
      label: 'Parent\'s Email:',
      placeholder: 'Enter your email',
      isRequired: true,
      order: 3,
    },
    "custom:level": {
      label: 'Level:',
      placeholder: 'Enter your child\'s grade level (1-3)',
      isRequired: true,
      order: 4,
    },
    password: {
      label: 'Password:',
      placeholder: 'Enter your Password',
      isRequired: true,
      order: 5,
    },
    confirm_password: {
      label: 'Confirm Password:',
      isRequired: true,
      order: 6,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  resetPassword: {
    username: {
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

const auth = {
  components,
  formFields,
}

export default auth;
