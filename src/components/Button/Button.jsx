
// import styles from './Button.module.scss';

function Button({ title, type = 'button', onBtnClick }) {
  return (
    <button type={type} onClick={onBtnClick}>
      {title}
    </button>
  );
}

export default Button