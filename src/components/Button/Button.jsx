import {button} from './Button.module.css';

function Button({ title, type = 'button', onBtnClick }) {
  return (
    <button className={button} type={type} onClick={onBtnClick}>
      {title}
    </button>
  );
}

export default Button