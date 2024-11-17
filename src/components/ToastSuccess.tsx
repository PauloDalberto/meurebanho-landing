import * as Toast from '@radix-ui/react-toast';
import '../styles/toastSuccess.css';

export const ToastSuccess = ({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) => {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className="ToastRootSuccess"
        open={open}
        onOpenChange={setOpen}
        duration={3000} 
      >
        <div className="ToastTitleSuccess">Mensagem enviada com sucesso!</div>
        <Toast.Action
          className="ToastActionSuccess"
          asChild
          altText="Fechar notificação"
        >
          <button className="ButtonSuccess">Fechar</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewportSuccess" />
    </Toast.Provider>
  );
};
