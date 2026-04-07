// src/hooks/useToast.tsx
import { toast as sonnerToast } from "sonner";

export function useToast() {
  // Wrapper para mantener la misma API que tu hook original
  const toast = (options: { title?: string; description?: string }) => {
    sonnerToast(options.title ?? "Notificación", {
      description: options.description,
    });
  };

  const dismiss = (id?: string) => {
    if (id) {
      sonnerToast.dismiss(id);
    } else {
      sonnerToast.dismiss(); // cierra todos
    }
  };

  return { toast, dismiss };
}
