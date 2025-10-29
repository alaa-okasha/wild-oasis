import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
export function useSignup() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "account created successfully! please verify the user Email"
      );
    },
  });
  return { isPending, signUp };
}
