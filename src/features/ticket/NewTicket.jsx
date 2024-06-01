import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NewTicket.module.css";
import { faBug, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

function NewTicket() {
  const handleForm = function () {};

  return (
    <div className={`container ${styles["newTicket"]}`}>
      <div className={styles.wrapper}>
        <header>
          <FontAwesomeIcon icon={faBug} className={styles.icon} />
          <h2>Create new incident</h2>
        </header>
        <form action="">
          <div className={styles.left}>
            <p>
              <label htmlFor="subject" className={styles.mandatory}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="short description of the issue"
              />
            </p>

            <p>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id=""
                cols="30"
                rows="10"
                value="  Problem description"
                onChange={handleForm}
              ></textarea>
            </p>
          </div>

          <div className={styles.right}>
            <p>
              <label htmlFor="prority" className={styles.mandatory}>
                Priority
              </label>
              <select name="prority">
                <option value="Normal">Normal</option>
                <option value="Normal">High</option>
                <option value="Normal">Low</option>
              </select>
            </p>
            <p>
              <label htmlFor="prority" className={styles.mandatory}>
                Status
              </label>
              <select name="prority">
                <option value="open">open</option>
                <option value="completed">completed</option>
                <option value="progress">progress</option>
                <option value="hold">on hold</option>
              </select>
            </p>
            <p>
              <label htmlFor="prority" className={styles.mandatory}>
                Priority
              </label>
              <select name="prority">
                <option value="one">1 User</option>
                <option value="tow">2 users</option>
                <option value="many">Many users</option>
              </select>
            </p>
          </div>

          <div className={styles.file}>
            <div className={styles.fileWrapper}>
              <FontAwesomeIcon icon={faFolderOpen} />
              <label htmlFor="fileInput">
                <span>Browse Files </span>or Drag files here &#91; Max size: 10
                MB. &#93;
              </label>
              <input
                type="file"
                name="file"
                placeholder="Browse Files"
                accept="image/*,.pdf"
                id="fileInput"
              />
            </div>
          </div>
          <footer>
            <button className="btn btn--primary">Submit</button>
            <button className="btn btn--rounded">Cancle</button>
          </footer>
        </form>
      </div>
    </div>
  );
}

export default NewTicket;
