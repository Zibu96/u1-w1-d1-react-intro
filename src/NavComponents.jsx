function NavComponents(props) {
  return (
    <nav className={props.className4}>
      <div>
        <ul className={props.className}>
          <li>
            <a className={props.className2} href="#">
              Home
            </a>
          </li>
          <li>
            <a className={props.className2} href="#">
              Products
            </a>
          </li>
          <li>
            <a className={props.className2} href="#">
              Rockets
            </a>
          </li>
          <li className={props.className3}>
            <button className={props.className5}>{props.text}</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavComponents;
