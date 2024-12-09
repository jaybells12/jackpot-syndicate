import {
  Flex,
  Input,
  FormControl,
  Button,
  Text,
  FlexProps,
} from "@chakra-ui/react";
import { useSize } from "@chakra-ui/react-use-size";
import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useReducer,
  useEffect,
  useRef,
  useState,
} from "react";
// import ReCAPTCHA from 'react-google-recaptcha'
import { Link } from "@chakra-ui/next-js";
import verifyRecaptcha from "src/utils/verifyRecaptcha";
import sendEmail from "src/utils/sendEmail";
import { ContactFormField } from "./ContactFormField";
import { PaperPlane } from "@components/PaperPlane";
import { ContactFormResults } from "./ContactFormResults";
import dynamic from "next/dynamic";

const ReCAPTCHA = dynamic(() =>
  import("@components/LazyReCaptcha").then((mod) => mod.LazyReCaptcha),
);

function reducer(state: FormErrorState, action: FormErrorAction) {
  switch (action.type) {
    case "first":
      return {
        ...state,
        first: action.payload,
      };
    case "last":
      return {
        ...state,
        last: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "phone":
      return {
        ...state,
        phone: action.payload,
      };
    case "subject":
      return {
        ...state,
        subject: action.payload,
      };
    case "message":
      return {
        ...state,
        message: action.payload,
      };
    // case 'address':
    //   return {
    //     ...state,
    //     message: action.payload,
    //   }
    default:
      throw Error("Unknown Form Action: ", action.type);
  }
}

export const ContactForm = (props: FlexProps) => {
  const [isError, dispatch] = useReducer(reducer, {
    first: false,
    last: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
    // address: false,
  });
  // // Address is a honeypot field
  // const [address, setaddress] = useState('')
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const recaptchaValue = useRef(null);
  const [recapNeeded, setRecapNeeded] = useState(false);
  const formRef = useRef<HTMLElement>(null);
  const formSize = useSize(formRef);

  const FIELD_SPACING = "1rem";

  // If an error property is true, then return false
  const isValid = useCallback(() => {
    return !(
      isError.first ||
      isError.last ||
      isError.email ||
      isError.phone ||
      isError.subject ||
      isError.message
    );
  }, [isError]);

  useEffect(() => {
    // if (address) {
    //   // Honey pot field has value
    //   // Render Fake Success
    //   setResult(true)
    //   setShowResult(true)
    //   return
    // }
    if (isDisabled) {
      // Check state for validity
      if (isValid()) {
        if (!recaptchaValue.current) {
          // ReCaptcha is not loaded
          // Render Failure Modal
          setResult(false);
          setIsDisabled(false);
          setShowResult(true);
          return;
        }
        // Submission logic continues at ReCaptcha OnChange handler
        //@ts-expect-error Couldn't figure out why typescript assumes ref is a never here, but it works.
        recaptchaValue.current.execute();
        return;
      } else {
        // Form Field validation failed
        setIsDisabled(false);
        return;
      }
    }
  }, [isDisabled, isValid]); // address

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.id;
    const value = e.target.value;

    if (!recapNeeded) {
      setRecapNeeded(true);
    }

    switch (field) {
      case "first":
        setFirst(value);
        if (value && isError.first) {
          dispatch({ type: "first", payload: false });
        } else if (!value && !isError.first) {
          dispatch({ type: "first", payload: true });
        }
        break;
      case "last":
        setLast(value);
        if (value && isError.last) {
          dispatch({ type: "last", payload: false });
        } else if (!value && !isError.last) {
          dispatch({ type: "last", payload: true });
        }
        break;
      case "email":
        setEmail(value);
        if (value && isError.email) {
          dispatch({ type: "email", payload: false });
        } else if (!value && !isError.email) {
          dispatch({ type: "email", payload: true });
        }
        break;
      case "phone":
        setPhone(value);
        if (value && isError.phone) {
          dispatch({ type: "phone", payload: false });
        } else if (!value && !isError.phone) {
          dispatch({ type: "phone", payload: true });
        }
        break;
      case "subject":
        setSubject(value);
        if (value && isError.subject) {
          dispatch({ type: "subject", payload: false });
        } else if (!value && !isError.subject) {
          dispatch({ type: "subject", payload: true });
        }
        break;
      case "message":
        setMessage(value);
        if (value && isError.message) {
          dispatch({ type: "message", payload: false });
        } else if (!value && !isError.message) {
          dispatch({ type: "message", payload: true });
        }
        break;
      default:
        console.log("This should never happen");
    }
  };

  const verifyRequiredFields = () => {
    first
      ? dispatch({ type: "first", payload: false })
      : dispatch({ type: "first", payload: true });
    last
      ? dispatch({ type: "last", payload: false })
      : dispatch({ type: "last", payload: true });
    email
      ? dispatch({ type: "email", payload: false })
      : dispatch({ type: "email", payload: true });
    phone
      ? dispatch({ type: "phone", payload: false })
      : dispatch({ type: "phone", payload: true });
    subject
      ? dispatch({ type: "subject", payload: false })
      : dispatch({ type: "subject", payload: true });
    message
      ? dispatch({ type: "message", payload: false })
      : dispatch({ type: "message", payload: true });
  };

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    console.log("RecapNeeded: ", recapNeeded);
    console.log("RecapRef: ", recaptchaValue.current);

    // Validate Form Fields
    verifyRequiredFields();
    // When component rerenders, submission logic continues when isDisabled is true
    setIsDisabled(true);
    // setShowResult(true) // Remove this before pushing to main
  };

  const onChange = async (token: string | null) => {
    if (token) {
      const response = await verifyRecaptcha(token);
      if (response.success) {
        // Captcha Verified - Send Email - Render Success Message (Modal?)
        const result = await sendEmail({
          name: `${first} ${last}`,
          email,
          phone,
          subject,
          message,
        });
        if (Boolean(result.success)) {
          setResult(true);
        } else {
          setIsDisabled(false);
          setResult(false);
        }
        setShowResult(true);
        return;
      } else {
        // Captcha Unverified - Render Failure Message (Modal?)
        setResult(false);
        setIsDisabled(false);
        setShowResult(true);
        return;
      }
    }
  };

  return (
    <Flex
      ref={formRef}
      position={"relative"}
      direction={"column"}
      margin={["2.25em 1em", null, "2.25em 1.75em 2.25em 1em"]}
      {...props}
    >
      <ContactFormResults
        when={showResult}
        size={formSize}
        result={result}
        duration={0.25}
        tryAgain={() => setShowResult(false)}
      />
      <Flex
        gap={[FIELD_SPACING, null, "1.5rem"]}
        direction={["column", null, "row"]}
      >
        <ContactFormField
          isRequired
          isDisabled={isDisabled}
          isInvalid={isError.first}
          id={"first"}
          value={first}
          onChange={handleInput}
        />
        <ContactFormField
          isRequired
          isDisabled={isDisabled}
          isInvalid={isError.last}
          id={"last"}
          value={last}
          onChange={handleInput}
        />
      </Flex>
      <Flex
        gap={[FIELD_SPACING, null, "1.5rem"]}
        direction={["column", null, "row"]}
        marginTop={FIELD_SPACING}
      >
        <ContactFormField
          isRequired
          isDisabled={isDisabled}
          isInvalid={isError.email}
          id={"email"}
          value={email}
          onChange={handleInput}
        />

        <ContactFormField
          isRequired
          isDisabled={isDisabled}
          isInvalid={isError.phone}
          id={"phone"}
          value={phone}
          onChange={handleInput}
        />
      </Flex>
      <ContactFormField
        isRequired
        isDisabled={isDisabled}
        isInvalid={isError.subject}
        id={"subject"}
        value={subject}
        onChange={handleInput}
        marginTop={FIELD_SPACING}
      />

      <ContactFormField
        isRequired
        isDisabled={isDisabled}
        isInvalid={isError.message}
        id={"message"}
        value={message}
        onChange={handleInput}
        marginTop={FIELD_SPACING}
      />
      {/* <FormControl
        as={'fieldset'}
        id={'address'}
        name={'address'}
        opacity={0}
        position={'absolute'}
        inset={0}
        height={0}
        width={0}
        zIndex={-2}
        tabIndex={-1}
        marginTop={FIELD_SPACING}
      >
        <Input
          value={address}
          onChange={handleInput}
        />
      </FormControl> */}
      <Button
        isDisabled={isDisabled}
        _hover={isDisabled ? {} : undefined}
        variant={"contact"}
        alignSelf={"flex-end"}
        marginTop={FIELD_SPACING}
        onClick={handleSubmit}
        _disabled={{ bgColor: "form.accent", padding: 0, cursor: "wait" }}
      >
        {isDisabled ? <PaperPlane /> : "Send Message"}
      </Button>
      <Text variant={"fineprint"}>
        This site is protected by reCAPTCHA and the Google
        <Link href="https://policies.google.com/privacy" color={"blue.500"}>
          {` Privacy Policy `}
        </Link>{" "}
        and
        <Link href="https://policies.google.com/terms" color={"blue.500"}>
          {` Terms of Service `}
        </Link>{" "}
        apply.
      </Text>
      {recapNeeded && (
        <ReCAPTCHA recapRef={recaptchaValue} onChange={onChange} />
      )}
    </Flex>
  );
};
