import { toast as sonnerToast } from "sonner";

export function useToast() {
  const toast = (options: { title?: string; description?: string }) => {
    sonnerToast(options.title ?? "Notificación", {
      description: options.description,
    });
  };

  const dismiss = (id?: string) => {
    if (id) {
      sonnerToast.dismiss(id);
    } else {
      sonnerToast.dismiss(); 
    }
  };

  return { toast, dismiss };
}
