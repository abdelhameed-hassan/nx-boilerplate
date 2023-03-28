import styles from './index.module.scss';
import { DatePicker } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { antDesign } from '@wexcute-boilerplate/ant-design';

/* eslint-disable-next-line */
export interface TestProps {}

const Test = (props: TestProps) => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to Test! Fudge</h1>
      <DatePicker />
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
      {antDesign()}
    </div>
  );
};

export default Test;
