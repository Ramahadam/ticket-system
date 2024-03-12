import Archive from "./Archive";
import Button from "./Button";
import CurrentDate from "./CurrentDate";
import Filter from "./Filter";

import styles from "./PageHeader.module.css";
function PageHeader() {
  return (
    <div className={styles.container}>
      <CurrentDate />
      <Archive />
      <Filter />
    </div>
  );
}

export default PageHeader;
