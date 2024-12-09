import ReCAPTCHA from "react-google-recaptcha";
import { MutableRefObject } from "react";

type LazyReCaptchaProps = {
  recapRef: MutableRefObject<any>;
  onChange: (token: string | null) => void;
};

export const LazyReCaptcha: React.FunctionComponent<LazyReCaptchaProps> = ({
  recapRef,
  onChange,
}) => {
  return (
    <ReCAPTCHA
      ref={recapRef}
      size={"invisible"}
      onChange={onChange}
      sitekey={process.env.NEXT_PUBLIC_INVIS_RECAP_SITE as string}
    />
  );
};
