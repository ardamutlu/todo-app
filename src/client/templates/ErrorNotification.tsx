import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const ErrorNotification = (
  icon: SweetAlertIcon,
  title: string
): Promise<SweetAlertResult> => {
  const Toast = MySwal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });
  return Toast.fire({
    icon: icon,
    title: title
  });
};
