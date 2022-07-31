import style from './head-up-button.module.scss';

interface HeadUpButtonInterface {
  children: any;
  className?: string;
  left?: boolean;
  right?: boolean;
  leftImage?: string;
  rightImage?: string;
  classNameLeft?: string;
  classNameRight?: string;
}

export const HeadUpButton = ({
  children,
  className,
  left,
  right,
  leftImage,
  rightImage,
  classNameLeft,
  classNameRight,
}: HeadUpButtonInterface) => {
  return (
    <section className={`${style.headUpButton} ${className}`}>
      {left ? (
        <div className={`${style.left} ${classNameLeft}`}>
          <img src={leftImage} alt='' />
        </div>
      ) : (
        ''
      )}
      {children}
      {right ? (
        <div className={`${style.right} ${classNameRight}`}>
          <img src={rightImage} alt='' />
        </div>
      ) : (
        ''
      )}
    </section>
  );
};
