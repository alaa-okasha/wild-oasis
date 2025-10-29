import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signUp, isPending } = useSignup();
  function onSubmit({ fullName, email, password }) {
    signUp(
      { fullName, email, password },
      {
        onSettled: reset,
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "this field is required" })}
          disabled={isPending}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "please enter vaild Email address",
            },
          })}
          disabled={isPending}
        />
      </FormRow>

      <FormRow label="Password (min 8 chars)" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "this field is required",
            minLength: {
              value: 8,
              message: "password needs at least 8 characters",
            },
          })}
          disabled={isPending}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "this field is required",
            validate: (value) =>
              value === getValues().password || "passwords need to match",
          })}
          disabled={isPending}
        />
      </FormRow>

      <FormRow>
        <Button disabled={isPending}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
