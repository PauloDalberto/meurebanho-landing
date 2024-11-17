import * as Toast from '@radix-ui/react-toast';
import '../styles/toastError.css';

export const ToastError = ({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) => {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className="ToastRoot"
        open={open}
        onOpenChange={setOpen}
        duration={3000} 
      >
        <div className="ToastTitle">Ocorreu um erro ao enviar sua mensagem!</div>
        <Toast.Action
          className="ToastAction"
          asChild
          altText="Fechar notificação"
        >
          <button className="Button">Fechar</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};
