import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import { landing_buttons } from '../../data/data';
import './Dropdown.scss';

export default function CustomDropdown() {
  return (
    <Dropdown classNames={{ base: 'dropdown-class' }}>
      <DropdownTrigger>
        <span className="material-symbols-outlined">menu</span>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {landing_buttons.map((btn) => {
          return <DropdownItem key={btn}>{btn}</DropdownItem>;
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
