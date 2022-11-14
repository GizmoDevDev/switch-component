import {useId} from "react";
import classnames from './Switch.module.css';

type Props = {
  value: boolean;
  onChange: () => void;
  disabled?: boolean;
}

export const Switch = ({disabled, value, onChange}: Props) => {
  const inputId = useId();
  return <>
    <input
      type="checkbox"
      id={inputId}
      className={classnames.switch}
      disabled={disabled}
      checked={value}
      onChange={onChange}
    />
    <label htmlFor={inputId}>Checkbox</label>
  </>
}