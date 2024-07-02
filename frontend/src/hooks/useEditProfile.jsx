import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useEditProfile = (formData, authUser) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updateProfile, isPending: isUpdating } = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch(`/api/user/update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to update profile");
        }
        return data;
      } catch (error) {
        throw error;
      }
    },
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries(["profile"]),
        queryClient.invalidateQueries(["authUser"]),
      ]);
      toast.success("Profile updated successfully");
      navigate(`/profile/${formData.username || authUser.username}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { updateProfile, isUpdating };
};

export default useEditProfile;
