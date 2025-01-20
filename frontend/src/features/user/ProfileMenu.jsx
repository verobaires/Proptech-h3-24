import { useQueryClient } from '@tanstack/react-query';
import { ChevronRight, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { useUser } from '../../context/UserContext';

const options = [
  // { id: '1', label: 'Datos Prestamo', to: '/loan/loan-life' },
  { id: '2', label: 'Panel de inversion', to: '/investmentPanel' },
  { id: '3', label: 'Datos de garantes', to: '/loan/upload-documentation' },
  { id: '4', label: 'Resumen de tu préstamo', to: '/loan/data-summary' },
  { id: '5', label: 'Cuotas a pagar', to: '/loans' },
  { id: '6', label: 'Ajustes personales', to: '/personalSettings' },
];

function ProfileMenu() {
  const navigate = useNavigate();
  const { logout: logoutContext } = useUser();
  function logout() {
    logoutContext();
    return navigate('/home');
  }

  return (
    <div>
      <ul className='flex-grow flex flex-col gap-5'>
        {options.map((option) => (
          <li key={option.id}>
            <Link
              to={option.to}
              className='bg-[#F8FAFC] flex justify-between p-4 rounded-xl transition hover:bg-primary hover:text-light'>
              {option.label}
              <ChevronRight />
            </Link>
          </li>
        ))}
      </ul>

      <div className=' p-5'>
        <h2 className=' text-lg font-bold mb-4'>Ajustes de sesión</h2>
        <Button type='logOut' onClick={logout}>
          <div className='flex gap-2 items-center'>
            <LogOut className='w-[20px] h-[20px]' />
            Cerrar Sesión
          </div>
        </Button>
      </div>
    </div>
  );
}

export default ProfileMenu;
