import React, { CSSProperties } from 'react';
import { ChangePassword } from '../Student/ChangePassword';
import { SetData } from '../Student/SetData';

const styles = {
  titlepa: {
    textAlign: 'center',
  } as CSSProperties,
};

const RegistrationStudent: React.FC = () => {
  return (
    <div>
      <h2 style={styles.titlepa}>Witamy w Aplikacji Rekrutacyjnej Mega K</h2>
      <br />
      <h3 style={styles.titlepa}>Ustaw Hasło</h3>
      <br />
      <br />
      <ChangePassword />
      <br />
      <hr />
      <br />
      <h3 style={styles.titlepa}>Ustaw Dane</h3>
      <SetData />
    </div>
  );
};

export { RegistrationStudent };
