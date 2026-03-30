import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  service: string;
  message: string;
}

export function useSubmitLead() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: LeadData) => {
      if (actor) {
        await actor.submitLead(
          data.name,
          data.email,
          data.phone,
          data.businessType,
          data.service,
          data.message,
        );
      }
    },
  });
}
