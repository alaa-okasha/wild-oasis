import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";

export function useEditSettings() {
  const queryClient = useQueryClient();
  const { mutate: editSettings, isPending: isEditing } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });

      toast.success("settings edited successfully");
    },
    onError: (err) => toast.error(err.message),
  });
  return { editSettings, isEditing };
}
