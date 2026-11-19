import { dismissToast, type ToastMessage } from "@/hooks/use-toast";
import { Toast, ToastProvider, ToastViewport } from "@/components/ui/toast";

export default function Toaster({ message }: { message: ToastMessage }) {
  const { id, title, description, action } = message;
  return (
    <ToastProvider>
      <Toast key={id} onOpenChange={open => { if (!open) dismissToast(id); }}>
        <div className="grid gap-1">
          {title && <div className="font-semibold">{title}</div>}
          {description && <div className="text-sm opacity-90">{description}</div>}
        </div>
        {action}
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}
