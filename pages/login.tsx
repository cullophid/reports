import React, { useState, useRef } from "react";
import { useSignInMutation } from "../codegen/client";
import styled from "@emotion/styled";
import { useSpring, animated, useChain, config } from "react-spring";
import { css } from "@emotion/core";
import { Text } from "../components/Typography";

const useLetterAnimation = (submitted: boolean, onRest: () => void) => {
  console.log({ submitted });
  const step1 = useRef();
  const formProps = useSpring({
    ref: step1,
    from: {
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
      height: 50,
      padding: 0
    },
    to: submitted
      ? {
          height: 300,
          padding: 32,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
        }
      : {}
  });

  const step2 = useRef();
  const postMarkProps = useSpring({
    ref: step2,
    from: {
      opacity: 0
    },
    immediate: true,
    to: submitted ? { opacity: 1 } : { opacity: 0 }
  });

  const step3 = useRef();
  const formProps2 = useSpring({
    ref: step3,
    delay: 500,
    from: {
      transform: "scale(1)"
    },
    to: submitted
      ? {
          transform: "scale(0)"
        }
      : {},
    onRest: () => onRest()
  });

  useChain(submitted ? [step1, step2, step3] : [step3, step2, step1]);

  return {
    form: {
      ...formProps,
      ...formProps2
    },
    postMark: postMarkProps
  };
};
export default () => {
  const [email, setEmail] = useState("");
  const [login, loginRequest] = useSignInMutation();
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const successProps = useSpring({
    from: {
      opacity: 0.1,
      transform: "scale(0.8) translateY(16px)"
    },
    to:
      animationCompleted && loginRequest.data
        ? { opacity: 1.0, transform: "scale(1) translateY(0)" }
        : {},
    config: config.slow
  });

  const animations = useLetterAnimation(loginRequest.called, () =>
    setAnimationCompleted(true)
  );

  return (
    <Layout>
      {loginRequest.error && animationCompleted && (
        <Text as="p" color="red">
          {loginRequest.error.graphQLErrors[0]
            ? loginRequest.error.graphQLErrors[0].message
            : loginRequest.error.message}
        </Text>
      )}
      {loginRequest.data && animationCompleted ? (
        <animated.div style={successProps}>
          <Text as="p">We have sent you an email with a link to sign in.</Text>
        </animated.div>
      ) : (
        <Form
          isSending={loginRequest.called}
          style={animations.form}
          onSubmit={e => {
            e.preventDefault();
            login({
              variables: {
                email
              }
            });
          }}
        >
          <PostStamp
            src="/static/postage_mark.png"
            alt="animation-post-stamp"
            style={animations.postMark}
          />
          <div>
            <EmailLabel
              style={{ display: loginRequest.called ? "block" : "none" }}
            >
              To:
            </EmailLabel>
            <EmailInput
              disabled={loginRequest.called}
              id="email-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <Stamp style={{ padding: loginRequest.called ? 6 : 0 }}>
            <SendButton disabled={loginRequest.called} type="submit">
              START
            </SendButton>
          </Stamp>
        </Form>
      )}
    </Layout>
  );
};

const Layout = styled.div`
  display: grid;
  height: 100%;
  place-content: center center;
  justify-items: center;
  grid-auto-columns: auto;
`;

const Form = styled(animated.form)<{ isSending: boolean }>`
  display: grid;
  box-sizing: border-box;
  justify-self: center;
  align-items: center;
  position: relative;
  min-width: 0;
  width: 600px;
  max-width: 80%;
  transform-origin: top center;
  grid-template-columns: 1fr auto;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  overflow: hidden;
  @media (max-width: 700px) {
    width: 100%;
  }
  ${p =>
    p.isSending &&
    css`
      ${EmailInput} {
        border: none !important;
      }
    `}
`;

const PostStamp = styled(animated.img)`
  position: absolute;
  z-index: 10;
  right: 30px;
  top: 80px;
  width: 80px;
  height: 80px;
`;
const EmailLabel = styled.label`
  display: none;
  padding: 0 16px;
  font-family: "Montserrat", sans-serif;
  color: #444;
  font-weight: 300;
`;
const EmailInput = styled(animated.input)`
  position: relative;
  justify-self: end;
  height: 50px;
  width: 100%;
  padding: 0 16px;
  min-width: 0px;
  box-sizing: border-box;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
  color: #4b4b4b;
  ::placeholder {
    color: #8c8b8c;
  }
  border: 1px solid transparent;
  :focus {
    outline: none;
    border-color: #ef536f;
  }
  &:-webkit-autofill {
    background: none !important;
    transition: background-color 5000s ease-in-out 0s;
  }
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  border: 1px solid transparent;
`;
const Stamp = styled.div`
  filter: drop-shadow(0px 0.5px 1px rgba(0, 0, 0, 0.3));
  /* padding: 8px; */
  background: white;
  align-self: start;
  box-sizing: border-box;
  background: radial-gradient(
    transparent 0px,
    transparent 3px,
    white 3px,
    white
  );
  background-size: 12px 12px;
  background-position: -6px -6px;
  width: 84px;
  height: 50px;
`;
const SendButton = styled(animated.button)`
  display: block;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #ef536f 0%, #cc475f 100%);
  border: none;

  color: white;
  :focus {
    outline: none;
  }
`;
